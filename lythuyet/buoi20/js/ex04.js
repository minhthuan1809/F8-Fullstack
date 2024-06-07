// some(callback)
// - Duyệt qua từng phần tử của mảng ban đầu
// - trả về giá trị true / false
// trả về giá trị true có ít nhất 1 lần return trong callback là truthy
// var numbers = [1, 2, 3, 5, 7, 9];
// // kiểm tra trong mảng numbers có số chẵn hay không
// var check = numbers.some(function (value) {
//   return value % 2 === 0;
// });
// console.log(check);

//every(callback)
// - Duyệt qua từng phần tử của mảng ban đầu
// - trả về giá trị true / false
// trả về  giá trị true nếu tất cả các phần tử đều return về truthy

// var numbers = [1, 2, 3, 5, 7, 9];
// //kiểm tra trong mảng number có phải số lẻ không

// var check = numbers.every(function (value) {
//   return value % 2 !== 0;
// });
// console.log(check);

// find(callback)
// - cách hoạt động giống filter
// - khác: trả về phần tử đầu tiên tìm được

// findlast(callback)
// - cách hoạt động giống filter
// - khác: trả về phần tử cuối cùng tìm được

// var users = ["user1", "user2", "user3"];

// var result = users.find(function (value, index) {
//   return index >= 1;
// });

// console.log(result);
// var result = users.filter(function (value, index) {
//   return index >= 1;
// });
// console.log(result);

// var result = users.findLast(function (value, index) {
//   return index >= 1;
// });
// console.log(result);

// bài tập
var arrA = [1, 4, 3, 2];
var arrB = [5, 2, 6, 7, 1];

var arr = arrA.filter(function (value, index) {
  return arrB.includes(value);
});

console.log(arr);
