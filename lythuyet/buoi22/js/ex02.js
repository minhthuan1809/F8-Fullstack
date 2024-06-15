//Từ khóa this (context)
// var user = {
//   name: "Minh Thuận",
//   email: "thuan18092003@gmail.com",
//   getName: function () {
//     // var _this = this;
//     return {
//       age: 32,
//       address: "Hà Nội",
//       getEmail: function () {
//         // console.log(_this.email);
//         //thay đổi contex cho hàm getEmail
//         console.log(this.email);
//       },
//     };
//   },
// };
// user.getName().getEmail.bind(user).call();

// Object.prototype.combineValue = function () {
//   var _this = this;
//   var result = [];
//   Object.keys(this).forEach(function (key) {
//     console.log(this);
//     var value = _this[key];
//     if (typeof value !== "function") {
//       result.push(value);
//     }
//   });
//   return result;
// };
// var user = {
//   name: "Minh Thuận",
//   email: "thuan18092003@gmail.com",
//   age: 21,
// };
// var produce = {
//   name: "SP 1",
//   price: 12000,
// };
// console.log(user);
// console.log(produce);

// Object.prototype.message = "Học Lập trình Không Khó";
// // var a = [];
// // console.log(a.message);

// var a = "Minh Thuận";
// console.log(a.message);
// var b = true; // Boolean
// console.log(b.message);
// var c = 10; // number
// console.log(c.message);
// var d = BigInt(10); // bigint
// console.log(d.message);

// Array.prototype.a = "minhthuan";
// var a = [];
// console.log(a.a);
// var fullname = "F8";
// console.log(fullname.a);

// Array.prototype.latest = function () {
//   return this[this.length - 1];
// };
// var users = ["Item 1", "Item 2", "Item 3"];
// console.log(users.latest());

// bài tập : Viết lại vòng lặp map trong mảng
var users = ["User 1", "User 2", "User 3"];
Array.prototype.map2 = function (callback) {
  if (typeof callback !== "function") {
    return;
  }
  var newArr = [];
  for (let i = 0; i < this.length; i++) {
    var value = this[i];
    var newValue = callback(value, i);
    newArr[newArr.length] = newValue;
  }
  return newArr;
};
var newArr = users.map2(function (users, index) {
  return `<h3> ${index} - ${users} </h3>`;
});

console.log(newArr);
