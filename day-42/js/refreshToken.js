import { refreshToken } from "./callApi.js";

const userTokenObject = JSON.parse(localStorage.getItem("user_token"));

// Kiểm tra xem refreshToken có tồn tại không
if (userTokenObject && userTokenObject.refreshToken) {
  const data = await refreshToken(userTokenObject.refreshToken);

  if (data && data.accessToken && data.refreshToken) {
    // Cập nhật token mới vào userTokenObject
    userTokenObject.accessToken = data.accessToken;
    userTokenObject.refreshToken = data.refreshToken;

    // Lưu trữ lại vào localStorage
    localStorage.setItem("user_token", JSON.stringify(userTokenObject));

    console.log("Token mới đã được lưu trữ:", data);
  } else {
    console.error("Làm mới token không thành công.");
  }
} else {
  console.error("Không tìm thấy refreshToken.");
}
