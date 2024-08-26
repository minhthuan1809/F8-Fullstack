import { createAcc } from "./callApi.js";

// khai báo html
const Notification = document.querySelector(".text-Notification");
const registerForm = document.getElementById("registerForm");

// submit
registerForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  // Lấy dữ liệu từ form
  const formData = new FormData(registerForm);
  const data = Object.fromEntries(formData.entries());

  const response = await createAcc(data);
  if (/[A-Z]/.test(data.password) && /\d/.test(data.password)) {
    console.log("newdata", data);
    // Gọi hàm tạo tài khoản từ file callApi.js

    if (response) {
      console.log("Response create : ", response);
      Notification.innerHTML = `   <div class=" bg-green-100  border-none text-green-700 px-4 py-3 rounded relative mb-4 "
                                  role="alert">
                                  <span class="block sm:inline">Đăng ký Thành công</span>
                              </div>`;
    } else {
      Notification.innerHTML = `   <div class=" bg-red-100 border border-none text-yellow-700 px-4 py-3 rounded relative mb-4 "
                                role="alert">
                                <span class="block sm:inline">Đăng ký thất bại</span>
                            </div>`;
    }
  } else {
    Notification.innerHTML = `   <div class=" bg-yellow-100  border-yellow-100 text-yellow-700 px-4 py-3 rounded relative mb-4 "
    role="alert">
    <span class="block sm:inline">Mật khẩu phải chứ kí tự viết hoa và số</span>
</div>`;
  }
});
