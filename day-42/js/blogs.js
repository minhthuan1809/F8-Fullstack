import { blogs } from "./callApi.js";
import { html } from "./regex.js";

const handleBlogs = async () => {
  const _blog = localStorage.getItem("blogsId");

  const response = await blogs(_blog);
  console.log(response);

  if (response.code === 200) {
    document.querySelector(".blogs").innerHTML += html(response.data, false);

    const btnUser = document.querySelector(".data-id-blog");
    btnUser.addEventListener("click", (e) => {
      console.log(btnUser);
      localStorage.setItem("data_blogs", btnUser.getAttribute("data-id"));
      if (localStorage.getItem("data_blogs")) {
        window.location = "./user.html";
      } else {
        console.log("lỗi chuyển trang");
      }
    });
  }
};

handleBlogs();
