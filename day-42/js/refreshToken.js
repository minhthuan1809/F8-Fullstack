// import { refreshToken } from "./callApi.js";

// const token = JSON.parse(localStorage.getItem("user_token"));

// if (token && token.refreshToken) {
//   const { refreshToken: _refreshToken } = token;

//   const getNewAccessToken = async () => {
//     try {
//       const newAccessToken = await refreshToken(_refreshToken);
//       if (newAccessToken) {
//         console.log("Mã accessToken mới là:", newAccessToken);
//       } else {
//         console.log("Lỗi khi làm mới token");
//       }
//     } catch (error) {
//       console.error("Lỗi khi gọi refreshToken:", error);
//     }
//   };

//   getNewAccessToken(); // Gọi hàm để lấy mã token mới
// }
