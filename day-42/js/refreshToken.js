import { refreshToken } from "./callApi.js";
function hanlerefreshToken() {
  const token = JSON.parse(localStorage.getItem("user_token"));
  console.log("Token hiện tại:", token);

  if (token && token.refreshToken) {
    const { refreshToken: _refreshToken } = token;

    const getNewAccessToken = async () => {
      try {
        const newAccessToken = await refreshToken(_refreshToken);
        if (newAccessToken) {
          console.log("Mã accessToken mới là:", newAccessToken);
          // Lưu accessToken mới vào localStorage nếu cần
          token.accessToken = newAccessToken.accessToken;
          token.refreshToken = newAccessToken.refreshToken;
          localStorage.setItem("user_token", JSON.stringify(token));
        } else {
          console.log("Lỗi khi làm mới token");
        }
      } catch (error) {
        console.error("Lỗi khi gọi refreshToken:", error);
      }
    };

    getNewAccessToken(); // Gọi hàm để lấy mã token mới
  } else {
    console.log("Không tìm thấy refreshToken trong localStorage.");
  }
}
hanlerefreshToken();
// setInterval(() => {
// }, 6000);
