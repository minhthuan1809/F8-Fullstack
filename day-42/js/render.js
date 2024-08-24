import { connectApi } from "./callApi.js";

function render() {
  connectApi().then((data) => {
    console.log(data); // In ra dữ liệu để kiểm tra

    if (data && data.data) {
      // Kiểm tra nếu có dữ liệu
      data.data.map((post) => {
        console.log(post);

        let html = `<section class="mb-8">
            <div
                class="bg-white p-6 rounded-xl shadow-lg border border-gray-200 transition-transform transform hover:scale-105">
                <h2 class="text-cyan-600 text-2xl font-bold mb-3">${post.title}</h2>
                <p class="text-gray-700 mb-4">Được đăng bởi: <span class="font-semibold">${post.userId.name}</span></p>
                <p class="text-gray-600 mb-4">${post.content}</p>
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

render(); // Gọi hàm render
