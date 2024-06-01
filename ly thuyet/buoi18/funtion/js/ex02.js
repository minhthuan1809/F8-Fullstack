// var a = 10;
// console.log(a);
// var getA = function () {
//   console.log("getA");
// };
// console.log(a);
// getA;
// console.log(window.a);
// window.getA;
// window.console.log("F8");

// Mọi thứ được tạo ra trong js đều nằm trong windown (Chỉ áp dụng cho client)
// Cú pháp tuy try cập: tenObject.tenHam() hoặc tenObject.tenbien

// Hàm con
// function display() {
//   function showUser() {
//     console.log("minhthuan");
//   }
//   showUser();
// }
// display();

/*
định nghĩa 1 hàm bên trong 1 hàm khác , có thể: 
- Chỉ được gọi hàm đó bên trong hàm khác (Closure)
+ Được phép sử dụng biến toàn cục 
+ Tham số của hàm cha 
+ biến cục bộ cuẩ hàm cha
+ Tham số của chính nó
*/

// function display() {
//   function showUser() {
//     console.log("F9");
//   }
//   return showUser;
// }

// // ==> chủ động gọi hàm con ở bên ngoài phạm vi
// var showUser = display();
// showUser();

// var sum = function (a) {
//   return function (b) {
//     return a + b;
//   };
// };

// bước 1  : Tạo hàm con

// var add = sum(10);
// var result1 = add(20);
// console.log(result1);

// IIFE (Immediately Invoked Function Expression)
// (function (a) {
//   console.log("học JS Không khó ,", a);
// })("F8");

// Giải Thuật đệ quy
// function showNumber(n) {
//   console.log(n);
//   if (n > 1) {
//     showNumber(n - 1);
//   }
// }
// showNumber(10);

// S = 1+2+3+4+..N
// // Tính Tổng bằng các sử dụng đệ quy
// var Total = 0;
// function getTotal(n) {
//   if (1 <= n) {
//     Total += n;
//     getTotal(n - 1);
//     return Total;
//   }
// }
// var result = getTotal(10);
// console.log(result);

function fibonacci(n) {
  if (n == 1 || n == 2) {
    return 1;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(50));
