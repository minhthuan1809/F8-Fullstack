import { connectApi, logout } from "./callApi.js";
import { html } from "./regex.js";

export function render() {
  document.querySelector(".container").innerHTML = "";
  localStorage.getItem("");
  connectApi().then((data) => {
    if (data && data.data) {
      // Kiểm tra nếu có dữ liệu
      data.data.map((post) => {
        document.querySelector(".container").innerHTML += html(post, true);
        userBlogs();
      });
    } else {
      console.log("Không có dữ liệu để hiển thị.");
    }
  });
}
// userBlogs
function userBlogs() {
  // Xử lý cho các nút với class 'data-id-blog'
  const idBlogElements = document.querySelectorAll(".data-id-blog");
  idBlogElements.forEach((element) => {
    element.addEventListener("click", function () {
      localStorage.setItem("data_blogs", this.getAttribute("data-id"));
      window.location = "./user.html";
    });
  });

  // Xử lý cho các nút với class 'btn-blogs-id'
  const btnBlogElements = document.querySelectorAll(".btn-blogs-id");
  btnBlogElements.forEach((element) => {
    element.addEventListener("click", function () {
      const blogsId = this.getAttribute("data-blogs-id");
      localStorage.setItem("blogsId", blogsId);

      window.location = "./blog.html";
    });
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
// đăng xuất
if (document.querySelector(".logout")) {
  document.querySelector(".logout").addEventListener("click", async () => {
    const userTokenObject = JSON.parse(localStorage.getItem("user_token"));
    try {
      const logoutApi = await logout(userTokenObject.accessToken);

      if (logoutApi.status_code === "SUCCESS") {
        localStorage.removeItem("user_token");
        alert("Đã đăng xuất thành công");

        document.querySelector(".btn").innerHTML = `
          <a href="login.html"
             class="bg-white text-green-500 px-6 py-3 rounded-full shadow-md hover:bg-gray-100 transition duration-300">
             Đăng nhập
          </a>`;

        document.querySelector(".add--title").classList.add("hidden");
      }
    } catch (error) {
      console.error("Lỗi khi đăng xuất:", error.message);
    }
  });
}

render(); // Gọi hàm render
