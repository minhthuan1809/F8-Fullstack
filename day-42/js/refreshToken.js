import { refreshToken } from "./callApi.js";
const userTokenObject = JSON.parse(datatoken);

const { refreshToken: _refreshToken } = userTokenObject;

const newAccessToken = refreshToken(_refreshToken);
if (newAccessToken) {
  console.log("Mã accessToken mới là:", newAccessToken);
} else {
  console.log("Lỗi khi làm mới token");
}
