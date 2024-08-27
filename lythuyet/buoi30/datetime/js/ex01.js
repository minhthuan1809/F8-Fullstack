// const today = new Date();
// const date = new Date("2024-7-25");
// console.log(today);
const targetDate = `2024-08-31 23:59:59`;

// ngày giờ cần đếm

const ngaycanlay = new Date(targetDate).getDate();
const giocanlay = new Date(targetDate).getHours();
const phutcanlay = new Date(targetDate).getMinutes();
const giaycanlay = new Date(targetDate).getSeconds();
console.log(
  "ngay",
  ngaycanlay,
  "gio",
  giocanlay,
  "phut",
  phutcanlay,
  "giây",
  giaycanlay
);

function countdown() {
  const today = new Date();

  // ngày giờ hiện tại
  const ngay = today.getDate();
  const gio = today.getHours();
  const phut = today.getMinutes();
  const giay = today.getSeconds();

  // ngày
  document.querySelector(".date span").innerText = Math.floor(
    ngaycanlay - ngay
  );

  // giờ
  document.querySelector(".hour span").innerText = Math.floor(giocanlay - gio);

  // phút
  document.querySelector(".minute span").innerText = Math.floor(
    phutcanlay - phut
  );

  // giây
  document.querySelector(".second span").innerText = Math.floor(
    giaycanlay - giay
  );
}

setInterval(countdown, 1000);
