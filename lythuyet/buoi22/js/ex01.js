// Object = Đối tượng , mô tả thông tin cụ thể cuối đối tượng
/*
- Thuộc tính : đặc điểm của đối tượng (Biến)
- phuowgn thức: Hành động của đối tượng(hàm)

2 các tạo Object 
- Object literal : Tạo 1 object từ funtion  object hoặc dùng ký hiệu {}
- constructor

*/

// // console.dir(Object);
// var user = {
//   name: "Nguyễn Minh Thuận",
//   email: "thuan18092003@gmail.com",
//   getName: function () {
//     return "Minh Thuận";
//   },
//   profile: {
//     age: 32,
//     address: "Hà Nội",
//     "shipping-address": "Sài gòn",
//   },
// };
// console.log(user);
// console.log(user.getName());
// console.log(user.name);
// console.log(user.profile.address);

// console.log(user.profile["shipping-address"]);

// user.email = "thuan@gmail.com";
// delete user.getName;
// console.log(user);

// duyệt các key của object
// for (const key in user) {
//   if (typeof user[key] === "function") {
//     user[key]();
//   } else if (typeof user[key] !== "object" || user[key] === null) {
//     console.log(user[key]);
//   }
// }

// bài tập
// var obj1 = {
//   name: "Minh Thuận",
//   email: "thuan18092003@gmail.com",
// };
// var obj2 = {
//   var: 32,
//   role: "Teacher",
// };

// var obj3 = {};
// for (var i in obj1) {
//   obj3[i] = obj1[i];
// }
// for (var i in obj2) {
//   obj3[i] = obj2[i];
// }
// console.log(obj3);

// // object.keys()==> Trả về 1 array chứa các key của Object
var users = {
  name: "Minh Thuận",
  email: "thuan18092003@gmail.com",
};
// console.log(Object.keys(users));

// if (Object.keys(users).length) {
//   console.log("không rỗng");
// } else {
//   console.log("rỗng");
// }

// Object.values() == > trả về 1 mảng chứa các value của object
console.log(Object.values(users));

// Object.entries(

// Object.fromEntries() ==> Trả về 1 objject từ 1 mảng 2 chiều

// var arr = [
//   ["name", "Minh Thuận"],
//   ["age", 32],
// ];
// console.log(Object.fromEntries(arr));

// var query = {
//   category: 1,
//   keyword: "khóa học Fullstack",
//   status: true,
// };

// // chuyển thành query string: category=1&keyword=Khóa+học+fulltack&status=true

// var queryString = Object.entries(query)
//   .map(function (entryItem) {
//     return entryItem.join("=");
//   })
//   .join("&")
//   .replaceAll(" ", "+");
// console.log(queryString);

// var allowArr = ["true", "false"];
// var _queryString = queryString.split("&").map(function (item) {
//   var arr = item.split("=");
//   if (!isNaN(+arr[1])) {
//     arr[1] = +arr[1];
//   } else if (allowArr.includes(arr[1])) {
//     arr[1] = arr[1] === "true";
//   } else {
//     arr[1] = arr[1].replaceAll("+", " ");
//   }
//   return arr;
// });

// console.log(_queryString);

// obbject.assign(target, cource1,cource2,...,courceN) == > nối các source vào target(thay đổi object ban đầu)
// var user = {
//   name: "minhthuan",
//   Email: "thuan@gmail.com",
// };
// var cource = {
//   name: "minhthuan",
//   courseName: "Fullstack",
// };

// var result = Object.assign({}, user, cource);
// console.log(user);

// console.log(result);
