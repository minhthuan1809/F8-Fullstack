var loginEL = document.querySelector(".btn--box__login");
var registerEL = document.querySelector(".btn--box__register");

loginEL.addEventListener("click", function () {
  this.classList.add("btn--color");
  console.log("nút Login đang được click");
  registerEL.classList.remove("btn--color");
});

registerEL.addEventListener("click", function () {
  this.classList.add("btn--color");
  console.log("nút đăng kí đang được click");
  loginEL.classList.remove("btn--color");
});
