// Biều thức = Toán tử + Toán Hạng
// total = a + b * c
// 1. Toán tử số học
// + , - , * , / , %, **

// var a = 10,
//   b = "0";

// var c = a + b;
// console.log(c);
// var a = 10,
//   b = 2;
// // var c = a ** b;

// a++;

// console.log(a);
// ++a;
// console.log(a);

/*
Phận Biệt a++ vvad ++a 
1. giống nhau đều tăng biến a lên 1 đơn vị 
2. khác nhau 
- a++ ==> giá trị biểu thức sẽ trả về trước khi biến anh được tăng
- ++a ==> Giá trị biểu thức sẽ được trả về sau khi  biến a được tăng
*/

// var a = 1;
// var b = a++;
// console.log(`a=${a}`, `b=${b}`);

// var a = 1;
// var b = ++a;
// console.log(`a = ${a}`, `b = ${b}`);
// bài tập
// var count = 1;
// var total = count + count + 5 + count++ + ++count;
// 1, 3, 5, 3, 5;

// 2 . Toán Tử so sánh
// > , < >= ,<= ,==,===,!= , !==
// Lưu ý : kết quả khi sử dụng toán tử so sánh ==> Trả về dữ liệu boolean (True , false)
// === so sanh cả kiểu dữ liệu
// == tự ép kiểu và so sánh
// var a = 10,
//   b = 10;
// var c = a === b;
// console.log(c);

//3. toán tử gán (=)
// var a = 10;
// a += 5;
// a -= 5;
// a *= 5;
// a %= 5;
// a /= 5;
// a = 5;
// console.log(a);

// 4. Toán tử lý luận
// - and (&&)
// -or (||)
// -not (!)

// var a = 10;
// // var b = a >= 5 && a <= 15;
// var b = a < 0 || a >= 10;
// // var b = !(a < 0 || a >= 10);

// console.log(b);

// 5. Toán tử 3 ngôi
// điều kiện ? giá trị đúng : giá trị sai
// var a = 5;
// var b = a >= 10 ? 20 : 0;
// console.log(b);

// var a = 10;
// var b = 1 + 2 + 3 + a >= 15 ? 20 : 10 + 5 + 2;
// console.log(b);

// 6. Toán tử nullish (??)
// thực hiện kiểm tra xem giá trị có băng null hoặc undefined  ==> nếu bằng 1 trong 2 giá trị trên ==> lấy phía sau ??
// ngược lại lấy phía trước

// bài tập  : thể hiện toán tử nullise bằng toán tử 3 ngôi

// var a = 1;
// var b = a ?? "F8";
// // var b = a == null || b == undefined ? "F8" : "err";

// console.log(b);

// 7. Truthy và Falsy
/*\
Trong điều kiện ép kiểu dữ liệu cần phải ép kiểu dữ liệu sang Boolean mà trả về true ==> Falsy
- 0
- undefined
- null
- false
- ""
- NaN
*/

// ví dụ : minh họa lại toán tử 3 ngôi
var a = 0;
// nếu a là truthy gán b =20 , ngược lại là 30
// var b = a ? 20 : 30;
// console.log(b);
var b = a ? 20 : 30;
console.log(b);
