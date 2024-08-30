import { refreshToken } from "./callApi.js";

function handleLogout() {
  // Xóa token và chuyển hướng đến trang đăng nhập
  localStorage.removeItem("user_token");
  window.location = "./login.html";
}

function hanlerefreshToken() {
  const token = JSON.parse(localStorage.getItem("user_token"));
  const { refreshToken: _refreshToken } = token;

  if (token && _refreshToken) {
    const getNewAccessToken = async () => {
      try {
        const newAccessToken = await refreshToken(_refreshToken);
        if (newAccessToken) {
          token.accessToken = newAccessToken.accessToken;
          token.refreshToken = newAccessToken.refreshToken;
          localStorage.setItem("user_token", JSON.stringify(token));
        } else {
          // Nếu làm mới token thất bại, đăng xuất người dùng
          handleLogout();
        }
      } catch (error) {
        console.error("Lỗi khi gọi refreshToken:", error);
        handleLogout();
      }
    };

    getNewAccessToken();
  } else {
    // Nếu không có refreshToken, đăng xuất người dùng
    handleLogout();
  }
}

function parseJwt(token) {
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
      const currentTime = Date.now() / 1000;
      const timeLeft = decoded.exp - currentTime;

      if (timeLeft < 5) {
        hanlerefreshToken();
      }
    } else {
      console.log("Token không hợp lệ hoặc không có thông tin hết hạn.");
      handleLogout();
    }
  } else {
    handleLogout();
  }
}

setInterval(checkTokenExpiryAndRefresh, 1000);

// Thêm sự kiện để người dùng có thể đăng xuất ngay lập tức
document.getElementById("logoutButton").addEventListener("click", handleLogout);
