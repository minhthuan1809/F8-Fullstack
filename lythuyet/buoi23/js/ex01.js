// Number là kiểu dữu liệu nguyên thủy thể hiện hết các giá trị là số

console.dir(Number);
var a = 12;
// console.log(typeof a);
/*
Kiểm tra 1 biến có phải number không 
- typeof = number
- không phải NaN (Not A number )
- Không phải infiniti
*/
// ép kiểu :
/*cách 1:  Dùng hàm number
 */
// var a = "12";
// a = Number(a);
// console.log(a);

// cách 2 : dùng hàm parseInt,parseFloat
// a = "12.5";
// a = parseInt(a);
// a = parseFloat(asserts);
// console.log(a);
// tự động ép kiểu : Gặp các toán tử số học(Trừ phép +)
// var a = 10,
//   b = "5";
// console.log(a + b);
// console.log(a - b);
// Số NaN (Not a Number) ==> giá trị khi tính toán thất bại

// var a = NaN;
// if (isNaN(a)) {
//   console.log("Số NaN");
// }

//Số Infinity ==> Vựt quá khả năng lưu trữ
// var a = 1000 ** 1000;
// var b = 2000 ** 2000;
// console.log(a);
// console.log(b);

//toFixed(number) == > lấy số chữ số phần thập phân và tự động là tròn
var price = 122354.789;
// console.log(price.toFixed(2));

console.log(price.toPrecision(8));
// khi dùng hàm tofixed vaf toPrecision ==> tra ve chuỗi
// // toLocaleSrtring() ==> Định Dạng số theo quốc gia khu vực
// var price = 120000000000000;
// console.log(price.toLocaleString("en-US"));

// console.log(Math);
//viết hàm trả về số ngẫu nhiên từ min đến max
