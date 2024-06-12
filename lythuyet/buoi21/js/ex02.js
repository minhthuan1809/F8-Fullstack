// var users = [
//   ["user 1", "user1@gmail.com"],
//   ["user 2", "user2@gmail.com"],
//   ["user 3", "user3@gmail.com"],
// ];
// console.log(users);
// users = users.map(function (user) {
//   if (user[1] === "user2@gmail.com") {
//     user[0] = "User 2 Update";
//   }
//   return user;
// });
// console.log(users);

// var users = users.find(function (user) {
//   return user[1] === "user2@gmail.com";
// });
// user[0] = "user Update";
// console.log(users);

var a = ["Hoàng An", "Hoangan.web@gmail.com"];
// var b = a;
// sao chép mảng (copy)
//shallow copy : dùng các phương thức sử lý mảng mà trả về mảng mới: slice , map , filter
// sử dụng cú pháp Spread(ES6)
// deep copy : chuyển thành định dạng JSON , sau đó chuyển ngược lại

// var b = a.map(function (item) {
//   return item;
// });
// var b = [...a];
// var json = JSON.stringify(a);
// var b = JSON.parse(json);

// b[1] = "Hoangan@gmail.com";
// console.log(a);
// console.log(b);

function test() {
  // array-like object : 1 object có cấu trúc giống mảng
  // muốn sử dụng các phuongw thức xử lý mảng ==> ép về kiểu mảng
  //   ==> Array.from()
  Array.from(arguments).forEach(function (item) {
    console.log(item);
  });
  console.log(arguments);
}
test(5, 10, 15, 20, 25);
