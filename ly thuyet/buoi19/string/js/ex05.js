// bài tâp 2 Kiểm tra độ mạnh yếu mất khẩu
/*
>=8 ký tự
phải có ít nhất 1 kí tự viết Hoa
phải có ít nhất 1 ký thự viết thường
phải có ít nhất 1 ký tự số
phải có ít nhất 1 ký tụ đặc biệt : !@#$%^&*()
lưu ý : không dùng Regex, mảng

*/

var password = "Thuan";
var isLength = false;
var isUpper = false;
var isLower = false;
var isNumber = false;
var isSpecial = false;
var number = "0123456789";
var special = "!@#$%^&*()";
if (password.length >= 8) {
  isLength = true;
  for (let i = 0; i < password.length; i++) {
    var char = password.charAt(i);
    if (char >= "A" && char <= "Z") {
      isUpper = true;
    }
    if (char >= "a" && char <= "z") {
      isLower = true;
    }
    if (number.includes(char)) {
      isNumber = true;
    }
    if (special.includes(char)) {
      isSpecial = true;
    }
  }
}
if (isLength && isUpper && isLower && isNumber && isSpecial) {
  console.log("mật khẩu mạnh");
} else {
  console.log("mật khẩu yếu");
}
