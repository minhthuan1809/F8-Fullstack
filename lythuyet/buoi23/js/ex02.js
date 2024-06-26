// // Js Định nghĩa sẵn các sự kiện ttuongw úng cới các thẻ html
// // việc lập trình viên : lắng nghe sự kiện

// var btn = document.querySelector(".btn");
// btn.onclick = function () {
//   console.log("click me");
// };
// btn.onmouseover = function () {
//   console.log("vào");
// };
// btn.onmouseout = function () {
//   console.log("ra");
// };

// btn.onmousemove = function () {
//   console.log("di chuột trong nút");
// };

// var nameEL = document.querySelector(".name");

// nameEL.oninput = function () {
//   console.log("bạn đang gõ phải vào ô");
// };
// nameEL.focur = function () {
//   console.log("bạn đang focur");
// };
// nameEL.onchange = function () {
//   console.log("Bạn Vừa thay đổi");
// };

// event Listener
// var btn = document.querySelector(".btn");
// var btnRemove = document.querySelector(".btn-remove");
// btn.addEventListener("click", function () {
//   console.log("click");
// });

// var count = 0;
// var handleClickBtn = function () {
//   console.log(`count : ${++count}`);
//   console.log(this);
// };
// btn.addEventListener("click", handleClickBtn);

// btnRemove.addEventListener("click", function () {
//   btn.removeEventListener("click", handleClickBtn);
// });
// nameEL.addEventListener("keyup", function (e) {
//   var value = this.value;
//   console.log(value);
//   console.log(e.key);
// });
