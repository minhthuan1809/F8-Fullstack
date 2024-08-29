import { usersApi } from "./callApi.js";

const getUser = async () => {
  const _userId = localStorage.getItem("userId");
  if (_userId) {
    const response = await usersApi(_userId);

    if (response && response.status_code === "SUCCESS") {
      const user = response.data;

      document.querySelector(".name-profile").innerText = user.name;

      if (Array.isArray(user.blogs) && user.blogs.length > 0) {
        const blogsContainer = document.querySelector(".blogs-container");
        blogsContainer.innerHTML = "";

        user.blogs.forEach((blog) => {
          const blogElement = document.createElement("section");
          blogElement.classList.add("mx-auto", "mb-8");

          blogElement.innerHTML = `
            <div
                class="bg-white p-6 w-4/5 m-auto rounded-xl shadow-lg border border-gray-200 transition-transform duration-300">
                <h2 class="text-cyan-600 text-2xl font-bold mb-3">${
                  blog.title
                }</h2>
                <p class="text-gray-700">Được đăng bởi: <span class="font-semibold">${
                  user.name
                }</span></p>
                <p class="text-gray-600 mb-4">${blog.content}</p>
                <div class="flex justify-between items-center mb-4">
                    <p class="text-green-600 hover:underline font-medium">Xem thêm</p>
                    <p class="text-gray-500 text-sm text-right">Đăng vào: ${new Date(
                      blog.createdAt
                    ).toLocaleString("vi-VN", {
                      dateStyle: "long",
                      timeStyle: "short",
                    })}</span></p>
                </div>
            </div>
          `;

          blogsContainer.appendChild(blogElement);
        });
      } else {
        console.log("No blogs available.");
      }
    }
  }
};

getUser();
