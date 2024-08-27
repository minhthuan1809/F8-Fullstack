import { connectApi, logout } from "./callApi.js";
const datatoken = localStorage.getItem("user_token");
const userTokenObject = JSON.parse(datatoken);

function render() {
  connectApi().then((data) => {
    if (data && data.data) {
      // Kiểm tra nếu có dữ liệu
      data.data.map((post) => {
        let html = `<section class="mb-8">
            <div
                class="bg-white p-6 rounded-xl shadow-lg border border-gray-200 transition-transform transform ">
                <h2 class="text-cyan-600 text-2xl font-bold mb-3">${post.title
                  .replace(/</g, "&lt;")
                  .replace(/>/g, "&gt;")}</h2>
                <p class="text-gray-700 mb-4">Được đăng bởi: <span class="font-semibold">${post.userId.name
                  .replace(/</g, "&lt;")
                  .replace(/>/g, "&gt;")}</span></p>
                <p class="text-gray-600 mb-4">${post.content
                  .replace(/</g, "&lt;")
                  .replace(/>/g, "&gt;")}</p>
                <a href="#" class="text-green-600 hover:underline font-medium">Xem thêm về ${post.userId.name
                  .replace(/</g, "&lt;")
                  .replace(/>/g, "&gt;")}
                </a>
            </div>
        </section>`;
        document.querySelector(".container").innerHTML += html;
      });
    } else {
      console.log("Không có dữ liệu để hiển thị.");
    }
  });
}

if (localStorage.getItem("user_token")) {
  // thay đổi nút đăng xuất
  document.querySelector(
    ".btn"
  ).innerHTML = `<button   class=" logout bg-red-500 text-white px-6 py-3 rounded-full shadow-md hover:bg-red-400 transition duration-300"> Đăng xuất </button>`;
  // hiện thị from post
  document.querySelector(".add--title").classList.remove("hidden");

  // chuyển json về JavaScript

  document.querySelector(".name--user").innerText = userTokenObject.email;
} else {
  // thay đổi nút đăng xuất
  document.querySelector(".btn").innerHTML = `  <a href="login.html"
                    class=" bg-white text-green-500 px-6 py-3 rounded-full shadow-md hover:bg-gray-100 transition duration-300">Đăng
                    nhập</a>`;
  // hiện thị from post
  document.querySelector(".add--title").classList.add("hidden");
}
// đăng xuất
if (document.querySelector(".logout")) {
  document.querySelector(".logout").addEventListener("click", async () => {
    try {
      const logoutApi = await logout(userTokenObject.accessToken);

      if (logoutApi) {
        // Nếu logout thành công
        localStorage.removeItem("user_token");
        alert("Đã đăng xuất thành công");

        // Thay đổi nút đăng xuất thành nút đăng nhập
        document.querySelector(".btn").innerHTML = `
          <a href="login.html"
             class="bg-white text-green-500 px-6 py-3 rounded-full shadow-md hover:bg-gray-100 transition duration-300">
             Đăng nhập
          </a>`;

        // Ẩn form post (nếu cần)
        document.querySelector(".add--title").classList.add("hidden");
      }
    } catch (error) {
      console.error("Lỗi khi đăng xuất:", error.message);
      // Bạn có thể thêm thông báo lỗi cho người dùng ở đây
    }
  });
}

render(); // Gọi hàm render
