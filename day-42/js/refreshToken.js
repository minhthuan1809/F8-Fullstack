<<<<<<< HEAD
import { refreshToken } from "./callApi";
const token = JSON.parse(localStorage.getItem("user_token"));
const { refreshToken: _refreshToken } = token;
const newToken = refreshToken(_refreshToken);
=======
import { refreshToken } from "./callApi.js";
const userTokenObject = JSON.parse(datatoken);

const { refreshToken: _refreshToken } = userTokenObject;

const newAccessToken = refreshToken(_refreshToken);
if (newAccessToken) {
  console.log("Mã accessToken mới là:", newAccessToken);
} else {
  console.log("Lỗi khi làm mới token");
}
>>>>>>> 543fcb6de4c9a5b2aff2ace797c03a5791b467c6
