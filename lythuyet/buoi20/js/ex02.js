// console.log(Array.prototype);
// var users = ["user1", "user2", "user3", "user4"];
// console.log(users);

//1. at(index) ==> trả vẩ phần tử theo index

// console.log(users.at(2));

// 2. concat() == > nối nhiều mảng thành nhiều mảng

// var arr1 = ["A", "B", "C"];
// var arr2 = [1, 2, 3];
// var arr3 = [8, 9, 0, ["f8"]];
// var arr = arr1.concat(arr2, [5, 6, 7, 8], arr3);
// console.log(arr);
// 3. fill() ==> cập nhật tất cả phần tử mảng thành 1 giá trị
// console.log(users.fill(10));

// 4. includes () ==> kiểm tra 1 phần tử có nằm trong 1 mảng hay không
// console.log(users.includes("user2"));
//5, indexOf() ==> kiểm tra 1 phần tử có nawmg trong 1 mảng hay không ==> trả về index đầu tiên
// console.log(users.indexOf("user2"));

//6 lastIndexOf() ==> kiểm tra 1 phần tử có nằm trong 1 mảng không ? ==> trả về indedx cuối cùng
//7. slice(start, end ) ===> cắt  mảng từ index start đến end-1

// console.log(users.slice(1, 3));
// console.log(users.slice(1));
// console.log(users.slice(-2));

// 8. join(str) == nối mảng thành chuỗi
// console.log(users.join("-"));
// 9. sort() ==> sắp xếp mảng theo thứ tự tăng dần (sắp xếp kí tự)
// var arr = ["Thuận", "Minh", "Anh"];
// console.log(arr.sort());

/* hàm callback
sort(function(a,b))
a: phần tử sau
b: phần tử trước

Nếu hàm callback trả về giá trị am ==> Dổi 
chỗ a và b
*/

// var numbers = [1, 100, 110, 2, 8, 9];
// console.log(numbers);
// numbers.sort(function (a, b) {
//   return a - b;
// });
// console.log(numbers);

// bài tập
var users = [
  "Tạ Hoàng An",
  "Nguyễn Minh Thuận",
  "Đặng Ngọc sơn",
  "Trung Tuyển",
];

// var getFirsName = function (name) {
//   return name.split(" ").slice(-1).join();
// };
// users.sort(function (a, b) {
//   if (getFirsName(a) < getFirsName(b)) {
//     return -1;
//   }
// });

// console.log(users);

//10. reverse() ==> đảo ngược mảng
// users.reverse();
// console.log(users);

//11. push() ==> Thêm phần tử vào cuối mảng
// var count = users.push("Item1", "Item2");
// console.log(users);
// console.log(count);

// 12. unshift() ==> thêm phần tử vào đầu mảng
// var count = users.unshift("Item1", "Item2");
// console.log(users);
// console.log(count);

//13 pop() ==> Xóa phần tử cuối mảng
// var value = users.pop();
// console.log(users);
// console.log(value);

//14. shift() == > xóa phần tử đầu mảng
var value = users.shift();
console.log(users);
console.log(value);
