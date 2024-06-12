// findIndex : tìm index đầu tiên dựa vào điệu kiện trong callback
// findLastIndex : tìm index cuối cùng dựa vào điệu kiện trong callback

// var user = [
//   ["user 1", "user1@gmail.com"],
//   ["user 2", "user2@gmail.com"],
//   ["user 3", "user3@gmail.com"],
//   ["user 4", "user4@gmail.com"],
//   ["user 5", "user2@gmail.com"],
// ];
// console.log(user);
// var index = user.findIndex(function (user) {
//   return user.includes("user2@gmail.com");
// });
// console.log(index);

// var index = user.findLastIndex(function (user) {
//   return user.includes("user2@gmail.com");
// });
// console.log(index);

// reduce(callback , initialValue)
/*
callback có 4 tham số 
- prevValue
- index 
- array ==> Mảng ban đầu 


iitialValue : giá trị khởi tạo 

Cách hoạt động : 
1. không có initaValue 
- Vòng lặp reduce chạy từ phần tử thứ 2 cho đến 2 
- prevValue của lần lặp đầu tiên chính là phầ tử đầu của mảng 
- currentValue : là giá trị từng phàn tử của mảng khi lặp 
- prevValue của lần lặp sau sẽ là return của lần lặp trước 
- Giá trị của hàm reduce là lần return cuối cùng của callback 


2. có initialValue 
- Vòng lặp reduce chạy từ phần tử dầu tiên 
- prevValue của lần lặp đầu tiên chính là initialValue
- currentValue : là giá trị từng phàn tử của mảng khi lặp 
- prevValue của lần lặp sau sẽ là return của lần lặp trước 
- Giá trị của hàm reduce là lần return cuối cùng của callback 
*/

// var numbers = [5, 25, 35, 5, 3, 5345, 33, 345, 345, 34, 45, 5];
// var result = numbers.reduce(function (prev, curren, index) {
//   console.log(`prev: ${prev},curren : ${curren},index : ${index} `);
//   return curren;
// });

// console.log(result);

// var number = [2, 9, 5, 1, -5];
// // tìm phần tử lớn nhất
// var result = number.reduce(function (prev, current) {
//   if (current > prev) {
//     return current;
//   }
//   return prev;
// });

// console.log(result);

// var users = ["An", "Tùng", "Đạt", "Quân", "Tùng", "Nam"];
// var newArr = [];
// var result = users.reduce(function (prev, current, index) {
//   if (!prev.includes(current)) {
//     prev.push(current);
//   }
//   // return ["An"]

//   return prev;
// }, []);
// console.log(result);

// var arr1 = [5, 2, 1, 6, 9];
// var arr2 = [2, 1, 6];

// var result = arr1.reduce(function (prev, current) {
//   if (!arr2.includes(current)) {
//     prev.push(current);
//   }
//   return prev;
// }, []);
// console.log(result);

// var numbers = [1, [2, 3], [4], 5, [[6, 7]], [[[[8]], 9]]];
// var flatArray = function (arr) {
//   return arr.reduce(function (prev, current) {
//     if (!Array.isArray(current)) {
//       return prev.concat(current);
//     }
//     return prev.concat(flatArray(current));
//   }, []);
// };
// numbers = flatArray(numbers);
// console.log(numbers);

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var size = 3;

var result = numbers.reduce(
  function (prev, current, index) {
    if (prev[prev.length - 1].length < size) {
      prev[prev.length - 1].push(current);
    } else {
      prev.push([current]);
    }

    return prev;
  },
  [[]]
);
console.log(result);
