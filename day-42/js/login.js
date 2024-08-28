import { requestlogin } from "./callApi.js";
const Notification = document.querySelector(".text-Notification");
const userName = document.querySelector('input[name="username"]');
const userPass = document.querySelector('input[name="password"]');

const btnLogin = document.querySelector(".btn--login");
const btnLoading = document.querySelector(".loading-login ");
document.querySelector("#loginForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  // hiệu úng loading
  btnLogin.classList.add("hidden");
  btnLoading.classList.remove("hidden");

  Notification.innerHTML = ``;
  const dataLogin = {
    email: userName.value,
    password: userPass.value,
  };
  console.log(dataLogin);

  try {
    // Sử dụng await để chờ kết quả của requestlogin
    const response = await requestlogin(dataLogin);

    // Kiểm tra dữ liệu trả về
    console.log(response);

    if (response && response.status_code === "SUCCESS") {
      // Lưu dữ liệu vào localStorage
      localStorage.setItem("user_token", JSON.stringify(response.data));
      e.target.reset();

      window.location.href = "./index.html";
    } else {
      Notification.innerHTML = `   <div class=" bg-red-100 border border-red-400 text-yellow-700 px-4 py-3 rounded relative mb-4 "
            role="alert">
            <strong class="font-bold">Cảnh báo!</strong> 
            <span class="block sm:inline">Thông tin tài khoản hoặc mật khẩu không chính xác.</span>
        </div>`;

      console.log("Lỗi: Đăng nhập không thành công hoặc dữ liệu không hợp lệ.");
    }
  } catch (error) {
    console.error("Lỗi:", error.message);
  } finally {
    // hiệu ứng loading
    btnLogin.classList.remove("hidden");
    btnLoading.classList.add("hidden");
  }
});
