import { connectApi, logout } from "./callApi.js";
const linkWeb = /(http.?:\/\/[^\s]+)/g;
const email =
  /(^[a-zA-Z][a-zA-Z0-9-_.]+[a-zA-Z0-9]@(([a-zA-Z][a-zA-Z0-9-_]*[a-zA-Z0-9]|[a-zA-Z])\.)+[a-zA-Z]{2,}$)/;

export function render() {
  document.querySelector(".container").innerHTML = "";
  localStorage.getItem("");
  connectApi().then((data) => {
    if (data && data.data) {
      // Kiểm tra nếu có dữ liệu
      data.data.map((post) => {
        console.log(data.data.content);

        let htmls = `
        <section class="container mx-auto mb-8">
        <div
            class="bg-white p-6 w-11/12s m-auto rounded-xl shadow-lg border border-gray-200 transition-transform duration-300">
            <h2 class="text-cyan-600 text-2xl font-bold mb-3">${post.title
              .replace(/</g, "&lt;")
              .replace(/>/g, "&gt;")}</h2>
            <p class="text-gray-700"> <b >Được đăng bởi : </b>${post.userId.name
              .replace(/</g, "&lt;")
              .replace(/>/g, "&gt;")}</p>
            <p class="text-gray-600 mb-4 mt-2"><b>Bài viết :</b> ${post.content
              .replace(/</g, "&lt;")
              .replace(/>/g, "&gt;")
              .replace(linkWeb, `<a href="$1"  target="_blank"><u>$1</u></a>`)
              .replace(email, `<a href="mailto:$1"><u>$1</u></a>`)}</p>
            <div class="flex justify-between items-center mb-4">
                <button data-id = "${
                  post.userId._id
                }"  class=" data-id-blog text-green-600 hover:underline font-medium">Xem thêm về #${post.userId.name
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;")}
                </button>
                <button data-blogs-id = "${
                  post._id
                }" class="btn-blogs-id text-green-600 hover:underline font-medium">Xem bài viết
                </button>
                <b class="text-gray-500 text-sm text-right">Đăng vào ${new Date(
                  post.createdAt
                ).toLocaleString("vi-VN", {
                  dateStyle: "long",
                  timeStyle: "short",
                })}</b>
                  
                  
            </div>
        </div>
    </section>`;

        document.querySelector(".container").innerHTML += htmls;
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
