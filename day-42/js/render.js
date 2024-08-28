import { connectApi, logout } from "./callApi.js";
const datatoken = localStorage.getItem("user_token");
const userTokenObject = JSON.parse(datatoken);

export function render() {
  console.log(`render(); đã được gọi`);
  document.querySelector(".container").innerHTML = "";
  connectApi().then((data) => {
    if (data && data.data) {
      // Kiểm tra nếu có dữ liệu
      data.data.map((post) => {
        const converTime = post.createdAt;

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
              .replace(/>/g, "&gt;")}</p>
            <div class="flex justify-between items-center mb-4">
                <a href="#" class="text-green-600 hover:underline font-medium">Xem thêm về ${post.userId.name
                  .replace(/</g, "&lt;")
                  .replace(/>/g, "&gt;")}
                </a>
                <b class="text-gray-500 text-sm text-right">Đăng vào ${changetime(
                  converTime
                )
                  .replace(/</g, "&lt;")
                  .replace(/>/g, "&gt;")
                  .replace(/SA/g, "Sáng,")}</b>
                  
                  
            </div>
        </div>
    </section>`;

        document.querySelector(".container").innerHTML += htmls;
      });
    } else {
      console.log("Không có dữ liệu để hiển thị.");
    }
  });
}
// thay đổi thời gian
function changetime(time) {
  const ngayUTC = new Date(time);

  const lechGioVietNam = 7 * 60;

  const thoiGianDiaPhuong = ngayUTC.getTime();

  const lechGioHeThong = ngayUTC.getTimezoneOffset();

  const ngayGioVietNam = new Date(
    thoiGianDiaPhuong + (lechGioVietNam + lechGioHeThong) * 60000
  );

  const tuyChonDinhDang = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
    timeZone: "Asia/Ho_Chi_Minh",
  };
  const thoiGianVietNam = ngayGioVietNam.toLocaleString(
    "vi-VN",
    tuyChonDinhDang
  );

  return thoiGianVietNam;
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
