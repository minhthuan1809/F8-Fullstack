// bài tập 1 : chuyển họ và tên viết sai thành viết đúng quy tắc
var fullname = "nguyễn minh Thuận";
// output : Nguyễn Minh Thuận
// ko dùng mảng

fullname = fullname.trim();
fullname = fullname.charAt(0).toUpperCase() + fullname.slice(1);

for (let i = 0; i < fullname.length; i++) {
  var char = fullname.charAt(i);
  var charNext = fullname.charAt(i + 1);
  if (char === " " && charNext !== " ") {
    var index = i + 1; // vị trí ksi tự chuyển chữ hoa
    fullname =
      fullname.slice(0, index).trim() +
      " " +
      fullname.charAt(index).toUpperCase() +
      fullname.slice(index + 1);
  }
}

console.log(fullname);
