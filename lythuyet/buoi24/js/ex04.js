/// scroll Event : Sự kiện Liện quan đến thanh cuộn

// scrollY : Lấy vị trí thanh cuộn theo trục y
// scrollX : Lấy vị trí thanh cuộn theo trục X
/*
scroll({
top : value1,
left : value2,

})
==> chuyển vị trí thanh quận tới vị trí đã chỉ định 
*/
var btn = document.querySelector(".btn");
window.addEventListener("scroll", function () {
  //   var color;
  //   if (window.scrollY > current) {
  //     color = "yellow";
  //   } else {
  //     color = "null";
  //   }
  //   this.document.body.style.backgroundColor = color;
  //   current = this.screenY;

  var positon = window.scrollY;
  if (positon >= 100) {
    btn.classList.add("show");
  } else {
    btn.classList.remove("show");
  }
});

btn.addEventListener("click", function () {
  window.scroll({
    top: 0,
    behavior: "smooth",
  });
});

// bài tập: Kéo thanhh quận xuống ==. đổi body thành mày vàng , kéo thanh quận xuống thì đổi thành màu trắng
