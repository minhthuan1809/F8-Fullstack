import { usersApi } from "./callApi.js";
import { htmluser } from "./regex.js";

const getUser = async () => {
  const _userId = localStorage.getItem("data_blogs");
  if (_userId) {
    const response = await usersApi(_userId);
    console.log(response);

    if (response && response.status_code === "SUCCESS") {
      const user = response.data;

      document.querySelector(".name-profile").innerText = user.name;

      const blogsContainer = document.querySelector(".blogs-container");
      blogsContainer.innerHTML = "";

      user.blogs.map((blog) => {
        blogsContainer.innerHTML += htmluser(blog, user.name);
      });

      btnBlogs();
    }
  }
};

function btnBlogs() {
  document.querySelectorAll(".btn-blogs").forEach((e) => {
    e.addEventListener("click", () => {
      localStorage.setItem("blogsId", e.getAttribute("data-blogs-id"));
      window.location = "./blog.html";
    });
  });
}

getUser();
