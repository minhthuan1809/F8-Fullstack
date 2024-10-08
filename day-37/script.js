const btnEl = document.querySelector(".btn");
const messEl = document.querySelector(".mess");
const cancelEl = document.querySelector(".cancel");
const searchBox = document.querySelector(".search-box");
var data = {
  youtube: "https://www.youtube.com/",
  facebook: "https://www.facebook.com/",
  f8: "https://fullstack.edu.vn/",
  google: "https://www.google.com.vn/?hl=vi",
  "google drive":
    "https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwjR77f5zt6HAxXmOHsHHcY-K1gYABAAGgJ0bQ&co=1&ase=2&gclid=Cj0KCQjw8MG1BhCoARIsAHxSiQkwcLw5I35wCvZFcvK6o_PalITQhMAmztur3FzY2Dh8i0h7MNy-7XIaAoj3EALw_wcB&ohost=www.google.com&cid=CAESVuD2NwJDWBIDX8AMuNLcduToDx5bC2Hf4K90lQAn9z7RAF6KMuMIeNVaMaZ3o7XBDPgO2CL72xRMJlatMTmMJqmeB8zqXMZ4kNrIHBMSLLtZNGo4uIfZ&sig=AOD64_3cNrXP17JmQGz3wStYtRfrIX9bBg&q&nis=4&adurl&ved=2ahUKEwi0mLP5zt6HAxWZkVYBHVjZF2QQ0Qx6BAgJEAE",
};
if ("webkitSpeechRecognition" in window) {
  // kiểm tra mic
  const recognition = new webkitSpeechRecognition();
  recognition.continuous = false;
  recognition.interimResults = false;
  recognition.lang = "vi-VN";

  btnEl.addEventListener("click", () => {
    // bắt sự kiện click của btn để lấy dữ liệu

    cancelEl.style.display = "inline-block";
    btnEl.classList.add("active--btn");
    btnEl.innerText = "Tôi đăng lắng nghe bạn nói ....";
    recognition.start();
  });
  cancelEl.addEventListener("click", () => {
    // bắt sự kiện click của btn hủy
    cancelEl.style.display = "none";
    recognition.onend();
  });
  recognition.onresult = function (event) {
    // lấy dữ liệu từ míc
    const transcript = event.results[0][0].transcript;
    listenerEl(transcript);
  };

  function listenerEl(value) {
    // sử lý sự kiện
    const found = false;

    Object.keys(data).forEach((key) => {
      if (value.toLowerCase().trim().includes(key.toLowerCase().trim())) {
        setTimeout(function () {
          window.open(data[key], "_blank");
        }, 1000);

        messEl.classList.add("active");
        messEl.innerText = `${key} đang được mở`;
        found = true;
      } else if (
        // xử lý mở map

        (value.toLowerCase().trim().includes("đi") &&
          value.toLowerCase().trim().includes("đường")) ||
        (value.toLowerCase().trim().includes("đi") &&
          value.toLowerCase().trim().includes("đến")) ||
        (value.toLowerCase().trim().includes("chỉ") &&
          value.toLowerCase().trim().includes("đường")) ||
        value.toLowerCase().trim().includes("đến")
      ) {
        const map = value
          .replace("tới", "")
          .replace("chỉ", "")
          .replace("đường", "")
          .replace("đến", "");

        messEl.classList.add("active");
        messEl.innerText = `"đang mở map ${value}" `;
        setTimeout(() => {
          window.open(`https://www.google.com/maps/search/${value}`, "_blank");
        }, 1000);
        found = true;
      } else if (
        // xử lý mở mp3
        value.toLowerCase().trim().includes("bài hát") ||
        value.toLowerCase().trim().includes("mở bài") ||
        value.toLowerCase().trim().includes("hát") ||
        value.toLowerCase().trim().includes("nhạc")
      ) {
        const music = value.replace("bài hát", "").replace("mở bài", "");
        messEl.innerText = `"đang mở bài ${value}" `;
        messEl.classList.add("active");
        setTimeout(() => {
          window.open(
            `https://zingmp3.vn/tim-kiem/bai-hat?q=${music}`,
            "_blank"
          );
        }, 1000);
        found = true;
      }
    });

    if (!found) {
      messEl.classList.remove("active");
      messEl.innerText = `"${value}" không có trong từ điển của tôi, nhưng tôi có thể gợi ý cho bạn`;
      setTimeout(() => {
        console.log(value);

        window.open(`https://www.google.com/search?q=${value}`, "_blank");
      }, 1000);
    }
  }

  recognition.onend = function () {
    // đóng mic
    btnEl.classList.remove("active--btn");
    cancelEl.style.display = "none";
    btnEl.innerText = "Bấm vào đây để nói";
  };
}
