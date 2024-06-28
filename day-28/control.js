var loginEL = document.querySelector(".btn--box__login"); // btn đăng nhập
var registerEL = document.querySelector(".btn--box__register"); // btn đăng kí

var eyeEL = document.querySelectorAll(".fa-eye"); // hiện thị passs
var hideEyeEL = document.querySelectorAll(".fa-eye-slash"); // ẩn pass
var passEl = document.querySelectorAll(".password"); // input pass
var mainLogin = document.querySelector(".main--login"); // btn login
var bgCover = document.querySelector(".bg--cover"); // bg đen login
var modelLogin = document.querySelector(".box"); // ,model login
var formLogin = document.querySelector(".login"); // form login
var formRegister = document.querySelector(".register"); // form register
var inputs = document.querySelectorAll("input");
var Email = document.querySelectorAll(".Email");
var userName = "f8@gmail.com";
var _password = "f8";

console.log(
  `Thông tin đăng nhập : username:  ${userName} password : ${_password}`
);

function reset() {
  inputs.forEach(function (value) {
    value.style.border = "1px solid rgb(246, 246, 246)";
    value.value = "";
  });
}

var getShow = function () {
  // hiện form
  console.log("bạn muốn đăng nhập ! ");
  bgCover.style.visibility = "visible";
  modelLogin.style.visibility = "visible";
  getConver(loginEL, registerEL, true);
  reset();
};

var getConver = function (_add, _remove, getBoolen) {
  // changer color btn conver
  if (getBoolen) {
    formLogin.style.display = "block";
    formRegister.style.display = "none";
  } else {
    formLogin.style.display = "none";
    formRegister.style.display = "block";
  }
  _add.classList.add("btn--color");
  console.log("nút này đang được click");
  _remove.classList.remove("btn--color");
  reset();
};

var hideForm = function () {
  bgCover.style.visibility = "hidden";
  modelLogin.style.visibility = "hidden";
};

function showpass(getBoolen) {
  //// show pass
  function Channger(hide, show) {
    // changer icon
    hide.forEach(function (value) {
      value.style.display = "none";
    });
    show.forEach(function (value) {
      value.style.display = "block";
    });
  }
  function show(value, indexBoolen) {
    // show pass
    if (indexBoolen) {
      value.forEach(function (_value) {
        _value.type = "text";
      });
    } else {
      value.forEach(function (_value) {
        _value.type = "password";
      });
    }
  }

  if (getBoolen) {
    Channger(eyeEL, hideEyeEL);
    show(passEl, true);
  } else {
    Channger(hideEyeEL, eyeEL);
    show(passEl, false);
  }
}

document.addEventListener("keydown", function (event) {
  // phím tắt esc
  if (event.key === "Escape") {
    hideForm();
  }
});

// Xử lý nhập dữ liệu

var notificationEmail = document.querySelectorAll(".Notification--email");
var notificationPassword = document.querySelectorAll(".Notification--password");

function CheckPitted() {
  inputs.forEach(function (_value) {
    if (_value.value !== "") {
      _value.style.border = "1px solid rgb(246, 246, 246)";
      if (_value.classList.contains("Email")) {
        Email.forEach(function (email, index) {
          if (email === _value) {
            notificationEmail[index].innerText = "";
          }
        });
      } else if (_value.classList.contains("password")) {
        passEl.forEach(function (password, index) {
          if (password === _value) {
            notificationPassword[index].innerText = "";
          }
        });
      }
    } else {
      _value.style.border = "1px solid red";
      if (_value.classList.contains("Email")) {
        Email.forEach(function (email, index) {
          if (email === _value) {
            notificationEmail[index].innerText = "Bạn Không được để trống";
          }
        });
      } else if (_value.classList.contains("password")) {
        passEl.forEach(function (password, index) {
          if (password === _value) {
            notificationPassword[index].innerText = "Bạn Không được để trống";
          }
        });
      }
    }
  });
  Email.forEach(function (input, index) {
    // kiểm tra gmail
    if (input.value.includes("@gmail.com")) {
      notificationEmail[index].innerText = "";
      input.style.border = "1px solid rgb(246, 246, 246)";
    } else {
      input.style.border = "1px solid red";
      notificationEmail[index].innerText = "Nhập Đúng định dạng Gmail";
    }
  });
}

inputs.forEach(function (input) {
  input.addEventListener("input", function () {
    CheckPitted();
  });
  input.addEventListener("blur", function () {
    CheckPitted();
  });
});
