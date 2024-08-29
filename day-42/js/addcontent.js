import { addData } from "./callApi.js";
import { render } from "./render.js";
const token = JSON.parse(localStorage.getItem("user_token"));
const { accessToken: _accessToken } = token;
const titleEl = document.querySelector("#title");
const contentEl = document.querySelector("#content");

const userTokenObject = JSON.parse(localStorage.getItem("user_token"));

// thêm blogs
document.querySelector("#postForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const newEntry = {
    title: titleEl.value,
    content: contentEl.value,
  };

  console.log(newEntry);
  const data = await addData(newEntry, _accessToken);
  if (data) {
    console.log(data);
    const intervalId = setInterval(function () {
      // Thêm thông báo vào DOM
      document.querySelector(".list--notification").innerHTML = `
          <div class="fixed z-50 bottom-8 right-0 text-center w-80 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded"
              role="alert">
              <span class="block sm:inline">Đã thêm bài viết thành công</span>
          </div>`;

      setTimeout(function () {
        document.querySelector(".list--notification").innerHTML = "";
        clearInterval(intervalId);
      }, 2000);
    }, 1000);
    document.querySelector("#postForm").reset();
    render();
  } else {
    const _intervalId = setInterval(function () {
      // Thêm thông báo vào DOM
      document.querySelector(".list--notification").innerHTML = `
          <div class="fixed z-50 bottom-8 right-0 text-center w-80 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded"
              role="alert">
              <span class="block sm:inline">Thêm bài viết Thất bại</span>
          </div>`;

      setTimeout(function () {
        document.querySelector(".list--notification").innerHTML = "";
        clearInterval(_intervalId);
      }, 2000);
    }, 1000);
  }
});
