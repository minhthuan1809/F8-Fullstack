// console.log(String.prototype);
// var str = "Học lập trình không khó F8";
// // // 1. length : lấy độ dai của chuỗi
// // console.log(str.length);
// // console.log(str);

// // // 2. charAt(index) : lấy kí tự theo index
// // console.log(str.charAt(5));
// // // console.log(str[5]);

// // // 3. charCodeAt(index): lấy kí tự theo index và trả mã ASCII

// // console.log(str.charCodeAt(0));

// // //4. concat(): nỗi chuối
// // console.log(str.concat(" minhthaun"));
// // //5. includes(substring) :Kiểm tra chuỗi substring có ở cha hay không ? nếu có trả về true ngược lại trả về false
// // console.log(str.includes("học"));

// //6. indexOf(substring): kiểm tra chuỗi substring có ở trong chuỗi cha hay không ? nếu có trả về index đầu tiên được tìm, ko có trả về -1
// // console.log(str.indexOf("học"));
// //7. lastIndexOf(substring): kiểm tra chuỗi substring có ở trong chuỗi cha hay không ? nếu có trả về index đầu tiên được tìm, ko có trả về -1
// console.log(str.lastIndexOf("học"));
// // 8.slice(start,end ) : cắt chuỗi từ vị trí start đến end-1
// // console.log(str.slice(5, 10));
// // console.log(str.slice(5));
// // console.log(str.slice(-5));

// //9. replace(str1,str2) thay thế chuỗi str1 = str2 (thay thế ddaauff tiên)
// // console.log(str.replace("F8", "F88"));

// // 10.repaceAll:thay thế tất cả
// console.log(str.replaceAll("F8", "F88"));

// //11 repeat(): Lặp chuỗi theo số lần xác định
// console.log(str.repeat(5));

// //12 split(): tách chuỗi thành mảng
// console.log(str.split(" "));

// //13. toUpperCase(): chuyển thàn chữ hoa
// // 14 . toLowerCase() : chuyển về chữ thường
// console.log(str.toUpperCase());
// //15. trim() : xóa khoảng trăng đầu và cuối chuỗi

// var str = "  minh thuận ";
// console.log(str);
// console.log(str.trim());

// // 16. trimStart(): xóa khoảng trắng đầu chuỗi
// // 17. trimEnd(): xóa khoảng trắng cuối chuỗi

// //18. startsWith(substring): Kiểm tra chuỗi substring có ở đầu chuỗi không

// var path = "/khoa-hoc/fullstack";
// console.log(path.startsWith("/khoa-hoc"));
// //19. endsWith(substring): Kiểm tra chuỗi substring có ở cuỗi chuỗi không
// console.log(path.endsWith("fullstack"));
// //20. match(pattern): cắt chuỗi dựa vào biều thức chính quy (Regex)
// var str = `Hello anh em, so diện thoại của toi: 03456465456 va so tiếp theo 0363463453`;
// var pathtern = /(0|\+84)\d{9}/g;
// console.log(str.match(pathtern));

// bài tập
// lấy username cảu email

// var email = "hoangan@fullstack.edu.vn";
// // var name = email.split("@");
// // console.log(name[0]);
// var position = email.indexOf("@");
// // console.log(position);
// var username = email.slice(0, position);
// console.log(username);

// var fullname = "Nguyễn Minh Thuận";
// // KIỂM TRA CHỮ HOA
// if (fullname === fullname.toLocaleUpperCase) {
//   console.log("viết hoa");
// } else {
//   console.log("không phải chữ hoa");
// }
