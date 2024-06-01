/* hàm trong  js  
- cú pháp trong lập trình dùng để thể hiện các chức năng (Động từ)
- nhóm các đợn chương trình con dễ dàng gọi lại ==> Tái sử dụng 
- hàm ở trong js có 2 loại 
+ hàm tự ddinjg nghĩa bởi lập trình viên
+ hàm có sẵn (trình duyệt , engine , 

    Cú pháp : 
    function tenham(){
        Nội dung hàm
    }

    funtion tenham(thamso1, thamso2,...){
        nội dung hàm
    }
Đặt tên hàm :
- quy tắc camelCase
-sử dụng động từ
+ get
+set
+ make
+ build
+ call 
+ remove
+ create
+ insert

Định nghĩa hàm == > tham số (parameter)
gọi hàm ==> Đối số (Argument)

- hàm có giá trị trả về (hàm return)
- hàm không có giá trị trả về (hàm void)

- Biến toàn cục  : đặt bên ngoài hàm
- biến cục bộ :  khai báo ở phạm vi trong hàm chỉ được sử dụng trong phạm vi của hàm đó


* Lưu ý : trong js không có khái niệm tham chiếu, tham trị
*/

// function getmessage(msg, type = "success") {
//   console.log("học js không khó");
//   console.log(msg);
//   console.log(type);
//   return "F8";
// }
// getmessage("học js", "erros"); // lời gọi hàm chủ động

// var result = getmessage("học js", "erros");

// console.log(result);

// function division(a, b) {
//   if (b !== 0) {
//     return a / b;
//   }
//   return "không tính được";
// }
// var result = division(10, 30);
// console.log(result);

// var data = "F8";
// function getData() {
//   return data;
// }
// function setData(value) {
//   data = value;
// }
// setData("Fullstack");
// var result = getData();
// console.log(result);

// function getTotal(a, b) {
//   var Total = a + b;
//   return Total;
// }
// var result = getTotal(10, 40);
// console.log(result);
// console.log(Total); // lỗi

// anonymous funtion : hàm không tên , hàm không tên

// muốn thực thi
/*
cách 1 : gán vào 1 biến 
cách 2 : đưa vào 1 hàm khác dưới dạng đối số
*/

// var getMessage = function () {
//   console.log("học js không khó");
// };
// //getMessage(); // hoisting hàm
// var getMsg = getMessage;
// var getMsg2 = getMsg;
// getMsg2();

// var display = function (text) {
//   //   console.log(text);
//   if (typeof text === "function") {
//     text();
//   }
// };

// var handleDisplay = function () {
//   console.log("Học Js để làm gì");
// };
// display(function () {
//   handleDisplay("F8");
// });
// display(handleDisplay);

// Từ khóa arguments
// function max(a, b) {
//   console.log(arguments);
//   console.log(a, b);
// }
//rest Parameter (Tham số còn lại )
// function display(value1, value2, value3, value4) {
//   console.log(value1);
//   console.log(value2);
//   console.log(value3);
//   console.log(value4);
// }
// function max(a, b, ...args) {
//   console.log(a, b);
//   //   console.log(args);
//   display(...args); // spread Operater
// }
// max(5, 6, 4, 3, 4, 56, 4, 3);

// // setTimeout , setInterval
// setTimeout(
//   function (value1, value2) {
//     console.log("Học lập trình không khó");
//   },
//   1000,
//   "F8",
//   "F9"
// );

// var count = 0;
// var id = setInterval(function () {
//   console.log("f9", count++);
//   if (count === 5) {
//     clearInterval(id);
//   }
// }, 1000);

var getA = function (callback) {
  setTimeout(function () {
    console.log("getA");
    if (typeof callback === "function") {
      callback();
    }
  }, 1000);
};

var getB = function (callback) {
  setTimeout(function () {
    console.log("getB");
    if (typeof callback === "function") {
      callback();
    }
  }, 500);
};

var getC = function (callback) {
  setTimeout(function () {
    console.log("getC");
    if (typeof callback === "function") {
      callback();
    }
  }, 1500);
};

getA(function () {
  getB(getC);
});

/*
buổi sau 
- định nghĩa hàm con 
- Closure
- Kỹ thuật Thunk Function
- IIFE
- Giả thuật đệ quy

Tìm hiểu sau 
- Async Function
- Generator
*/
