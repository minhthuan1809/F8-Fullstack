import { connectApi } from "./callApi.js";

function render() {
  connectApi().then((data) => {
    console.log(data); // In ra dữ liệu để kiểm tra

    if (data && data.data) {
      // Kiểm tra nếu có dữ liệu
      data.data.map((post) => {
        let html = `<section class="mb-8">
            <div
                class="bg-white p-6 rounded-xl shadow-lg border border-gray-200 transition-transform transform hover:scale-105">
                <h2 class="text-cyan-600 text-2xl font-bold mb-3">${post.title
                  .replace(/</g, "&lt;")
                  .replace(/>/g, "&gt;")}</h2>
                <p class="text-gray-700 mb-4">Được đăng bởi: <span class="font-semibold">${post.userId.name
                  .replace(/</g, "&lt;")
                  .replace(/>/g, "&gt;")}</span></p>
                <p class="text-gray-600 mb-4">${post.content
                  .replace(/</g, "&lt;")
                  .replace(/>/g, "&gt;")}</p>
                <a href="#" class="text-green-600 hover:underline font-medium">Đọc thêm</a>
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
} else {
  // thay đổi nút đăng xuất
  document.querySelector(".btn").innerHTML = `  <a href="login.html"
                    class=" bg-white text-green-500 px-6 py-3 rounded-full shadow-md hover:bg-gray-100 transition duration-300">Đăng
                    nhập</a>`;
  // hiện thị from post
  document.querySelector(".add--title").classList.add("hidden");
}
if (document.querySelector(".logout")) {
  document.querySelector(".logout").addEventListener("click", () => {
    localStorage.removeItem("user_token");
    console.log("đã đăng xuất thành công");
    if (!localStorage.getItem("user_token")) {
      // thay đổi nút đăng xuất
      document.querySelector(".btn").innerHTML = `  <a href="login.html"
            class=" bg-white text-green-500 px-6 py-3 rounded-full shadow-md hover:bg-gray-100 transition duration-300">Đăng
            nhập</a>`;
      // hiện thị from post
      document.querySelector(".add--title").classList.add("hidden");
    }
  });
}
render(); // Gọi hàm render
