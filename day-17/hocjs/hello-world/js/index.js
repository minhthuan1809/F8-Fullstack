console.log("Học Js rất khó");
// comment trong js
/*
comment nhiều dòng 
comment nhiều dòng 
comment nhiều dòng 
comment nhiều dòng 
comment nhiều dòng 

*/

/*
- cú pháp trong lập trình cho phép lưu dữ liệu tạm thời 
-- Biến sẽ được lưu ở ram 
- Biến có thể đặt tên tùy ý theo nguyên tắc sau
+ chứ chữ thường chữ , hoa, số , dấu gạch dưới, $
+ Biến không bắt đầu từ số
+ Không đặt tên biến stheo quy tắc camelCase
+ Nên đặt tên biến tường minh


*/

// khai báo biên
// var userid, customerName, username, userEmail;
// var customer;
// var customerEmail;

var course = "Fullstack";
//   coursePrice = 12000;

// customer = "Nguyễn Minh Thuận";

// Hiện thị dữ liệu
// 1. Hiện thị ở tab console trình duyệt
// console.log(customer);
// console.log(course);
// course.log(userEmail);

// 2. Hiện thị trên giao diện trình duyệt

//2.1 dùng doccument.write()
document.write("thuan");
// 2.2 Dùng Dom (Document Object Model)

document.body.innerHTML = course;

// Lưu ý : giá trị của biến có thể đưa vào cả 1 chuỗi html
// kí hiệu backtick (`)
// var welcome = "<h2> Học " + course + " JS không hóa</h2>";

var welcome = `<h2> Học ${course}  JS không khó</h2>`;
document.write(welcome);

// 8 kiểu dữ liệu js
/*
    1. String : chuỗi
    2. Number:số
    3. BigInt : số nguyên lớn
    4. Boolean: Logic(đúng ,sai)
    5. Undefined : không xác định
    6. Null : Rỗng
    7. Symbol
    8. Object: Đối Tượng

    Chia thành 2 nhóm
    - Kiểu dữ liệu nguyên thủy
    + String 
    + Number
    + BigInt
    + Undefined
    + Null 
    
    Symbol
    - Kiểu dữ liệu tham chiếu
    + Object
*/
