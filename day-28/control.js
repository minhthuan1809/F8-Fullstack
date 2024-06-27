var loginEL = document.querySelector(".btn--box__login"); // btn đăng nhập
var registerEL = document.querySelector(".btn--box__register"); // btn đăng kí

var eyeEL = document.querySelector(".fa-eye"); // hiện thị passs
var hideEyeEL = document.querySelector(".fa-eye-slash"); // ẩn pass
var passEl = document.querySelector(".password"); // input pass
var mainLogin = document.querySelector(".main--login"); // btn login
var bgCover = document.querySelector(".bg--cover"); // bg đen login
var modelLogin = document.querySelector(".box"); // ,model login
var userName = "f8@gmail.com";
var _password = "f8";
console.log(
  `Thông tin đăn nhập : userame:  ${userName} password : ${_password}`
);
var getShow = function () {
  console.log("bạn muốn đăng nhập ! ");
  bgCover.style.visibility = "visible";
  modelLogin.style.visibility = "visible";
  getConver(loginEL, registerEL);
};
function showpass(showPass, hidePass, getBoolen) {
  // sử lí show pass
  showPass.style.display = "block";
  hidePass.style.display = "none";
  if (getBoolen) {
    passEl.type = "text";
  } else {
    passEl.type = "password";
  }
}
var getConver = function (_add, _remove) {
  // if (getBoolen) {
  //   modelLogin;
  // }
  _add.classList.add("btn--color");
  console.log("nút này đang được click");
  _remove.classList.remove("btn--color");

  showpass(eyeEL, hideEyeEL, false); // trả về mặc định
};
