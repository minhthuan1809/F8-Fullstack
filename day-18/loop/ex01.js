/*
Vòng lặp : 
- Cú pháp trong lập trình cho phép 1 đoạn chương trình có thể lặp đi lặp lại theo số lần nhất định 
- 2 loại vòng lăp
+ Biết trước số lần lặp : for
+ không biết trước số lần lặp : while , do while
Lưu ý : Các vòng lặp áp dụng riêng cho các kiểu dữ liệu 
*/

// vòng lặp for

/*
for( giá trị khởi tạo; điều kiện dừng; bước nhảy)
    {

    }
    */
// for (let i = 0; i <= 10; i++) {
//   console.log("Lần lặp thứ ", i);
// }

// for (let i = 10; i >= 1; i--) {
//   console.log("Lần lặp thứ ", i);
// }

// for (let i = 0; i < 5; i++) {
//   for (let j = 0; j <= 5; j++) {
//     console.log(`i = ${i} - j = ${j}`);
//   }
// }

// var n = 10;
// var x = 0;
// for (let i = 0; i <= n; i++) {
//   x += i;
// }
// console.log(x);

// bài tập : tính n!
// var factorial = 1;
// var n = 10;
// for (var i = 2; i <= n; i++) {
//   factorial *= i;
// }
// console.log(factorial);

//  bài tập tính giá trị biểu thức
// var total = 0;
// var n = 5;
// var factorial = 1;

// for (let i = 1; i <= 5; i++) {
//   for (var j = 1; j <= i; j++) {
//     factorial *= j;
//   }
//   total += factorial;
//   factorial = 1;
// }

// console.log(total);

// số nguyên tố
/*
- >1
- chỉ chia hết chia 1 và chính nó

*/

n = 3;

var check = true;

if (n % 1 !== 0 || n <= 1) {
  check == false;
} else {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      check = false;
      break;
    }
  }
}

if (check) {
  console.log("Đây là số nguyên tố");
} else {
  console.log("Đây không phải là số nguyên tố");
}

for (var i = 1; i < 10; i++) {
  if (i === 5) {
    continue;
  }
  console.log(`i = ${i}`);
}
