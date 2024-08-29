import { blogs } from "./callApi.js";

const handleBlogs = async () => {
  const _blog = localStorage.getItem("blogsId");

  const response = await blogs(_blog);
  console.log(response);

  if (response.code === 200) {
    const html = `<section class="container--blogs mx-auto mb-8">
                    <div
                    class="bg-white p-6 w-11/12s m-auto rounded-xl shadow-lg border border-gray-200 transition-transform duration-300">
                    <h2 class="text-cyan-600 text-2xl font-bold mb-3">${response.data.title
                      .replace(/</g, "&lt;")
                      .replace(/>/g, "&gt;")}</h2>
                    <p class="text-gray-700"> <b>Được đăng bởi : </b>${response.data.userId.name
                      .replace(/</g, "&lt;")
                      .replace(/>/g, "&gt;")}</p>
                    <p class="text-gray-600 mb-4 mt-2"><b>Bài viết :</b>${response.data.content
                      .replace(/</g, "&lt;")
                      .replace(/>/g, "&gt;")}</p>
                    <div class="flex justify-between items-center mb-4">
                       <button data-blogs-id = "${
                         response.data.userId._id
                       }" class="btn-blogs-id text-green-600 hover:underline font-medium">Xem thêm về ${
      response.data.userId.name
    }
                </button>

                        <b class="text-gray-500 text-sm text-right">Đăng vào ${new Date(
                          response.data.createdAt
                        ).toLocaleString("vi-VN", {
                          dateStyle: "long",
                          timeStyle: "short",
                        })}</b>
                    </div>
                    </div>
                    </section>
                    `;
    document.querySelector(".blogs").innerHTML += html;

    const btnUser = document.querySelector(".btn-blogs-id");
    btnUser.addEventListener("click", (e) => {
      console.log(btnUser);
      localStorage.setItem("data_blogs", btnUser.getAttribute("data-blogs-id"));
      if (localStorage.getItem("data_blogs")) {
        window.location = "./user.html";
      } else {
        console.log("lỗi chuyển trang");
      }
    });
  }
};

handleBlogs();
