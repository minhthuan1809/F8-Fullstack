// var user = ["user1", "user2", "user3", "user4"];
// kiểm tra số lượng phần tử
// console.log(user.length);
//Kiểm tra 1 biến có phải là mảng ko
// console.log(Array.isArray(user));

// thêm phần tử vào cuối mảng

// user[user.length] = "user5";
// user[user.length] = "user6";
// console.log(user);

// lấy giá trị phần tử
// console.log(user["2"]);
// console.log(user[2]);

// sửa giá trị phần tử user 2 bằng user updates
//user[2] = "User update";

// duyệt mảng : lặp qua từng phần tử của mảng

// console.log(user);
// for (let i = 0; i < user.length; i++) {
//   var value = user[i];
//   console.log(value);
// }

// for (var index in user) {
//   var value = user[index];
//   console.log(value);
// }

// for (var value of user) {
//   console.log(value);
// }

// xóa mảng : tạo ra 1 mảng mới không có phần tử đã xóa

// console.log(user);
// var indexDelete = 2;
// var newUsers = [];
// for (var index in user) {
//   if (+index === indexDelete) {
//     // +index : ép kiểu number
//     continue;
//   }
//   var value = user[index];
//   newUsers[newUsers.length] = value;
// }
// console.log(newUsers);

// bài tập : thêm phần tử mới vào đầu mảng
// var user = ["user1", "user2", "user3", "user4"];

// var newValue = "User 0";

// var newUsers = [newValue];
// for (var value in user) {
//   newUsers[newUsers.length] = user[value];
// }
// console.log(newUsers);

// bài tập xóa các phần tử trong mảng

// var users = [
//   "Tạ Hoàng An",
//   "Nguyễn Tuấn Anh",
//   "Nguyễn Văn Dũng",
//   "Phạm Văn Hiếu",
// ];
// var newUser = [];
// var keyword = "an";
// for (var index in users) {
//   if (users[index].toLowerCase().includes(keyword.toLowerCase())) {
//     continue;
//   } else {
//     newUser[newUser.length] = users[index];
//   }
// }

// console.log(newUser);

// bài tập
var numbers = [5, 2, 6, 4, 6, 9];
// yêu cầu : tìm phần tử lớn nhất và đưa lên đầu tiên của mảng
var numbersMax = 0;

for (var index in numbers) {
  if (numbersMax < numbers[index]) {
    numbersMax = numbers[index];
  }
}
var newArr = [numbersMax];
for (var conver in numbers) {
  if (numbers[conver] === numbersMax) {
    continue;
  } else {
    newArr[newArr.length] = numbers[conver];
  }
}
console.log(newArr);
