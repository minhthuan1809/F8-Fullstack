import { refreshToken } from "./callApi.js";

export function hanlerefreshToken() {
  const token = JSON.parse(localStorage.getItem("user_token"));
  const { refreshToken: _refreshToken } = token;

  if (token && _refreshToken) {
    const getNewAccessToken = async () => {
      try {
        const newAccessToken = await refreshToken(_refreshToken);
        if (newAccessToken) {
          console.log("Mã accessToken mới là:", newAccessToken);
          // Lưu accessToken mới vào localStorage
          token.accessToken = newAccessToken.accessToken;
          token.refreshToken = newAccessToken.refreshToken;
          localStorage.setItem("user_token", JSON.stringify(token));
        } else {
          localStorage.removeItem("user_token");
          window.location = "./login.html";
        }
      } catch (error) {
        console.error("Lỗi khi gọi refreshToken:", error);
      }
    };

    getNewAccessToken();
  } else {
    window.location = "./login.html";
  }
}

function parseJwt(token) {
  // kiểm tra cấp lại token
  try {
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );

    return JSON.parse(jsonPayload);
  } catch (e) {
    console.error("Invalid JWT token:", e);
    return null;
  }
}

function checkTokenExpiryAndRefresh() {
  const token = JSON.parse(localStorage.getItem("user_token"));

  if (token && token.accessToken) {
    const decoded = parseJwt(token.accessToken);

    if (decoded && decoded.exp) {
      const currentTime = Date.now() / 1000; // Thời gian hiện tại theo giây
      const timeLeft = decoded.exp - currentTime;

      console.log(`Token sẽ hết hạn sau ${Math.floor(timeLeft)} giây`);

      // Làm mới token nếu còn ít hơn 60 giây trước khi hết hạn
      if (Math.floor(timeLeft) < 10) {
        hanlerefreshToken();
      }
    } else {
      console.log(
        "Không thể giải mã hoặc không có thông tin hết hạn trong token"
      );
    }
  }
}

setInterval(checkTokenExpiryAndRefresh, 1000);
