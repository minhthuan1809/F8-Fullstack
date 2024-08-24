import { requestlogin } from "./callApi.js";

const userName = document.querySelector('input[name="username"]');
const userPass = document.querySelector('input[name="password"]');

document.querySelector("#loginForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const dataLogin = {
    email: userName.value,
    password: userPass.value,
  };

  try {
    // Sử dụng await để chờ kết quả của requestlogin
    const response = await requestlogin(dataLogin);

    // Kiểm tra dữ liệu trả về
    console.log(response);

    if (response && response.status_code === "SUCCESS") {
      // Lưu dữ liệu vào localStorage
      localStorage.setItem("user_token", JSON.stringify(response));
      e.target.reset();
      console.log("Đăng nhập thành công");
    } else {
      console.log("Lỗi: Đăng nhập không thành công hoặc dữ liệu không hợp lệ.");
    }
  } catch (error) {
    console.error("Lỗi:", error.message);
  }
});