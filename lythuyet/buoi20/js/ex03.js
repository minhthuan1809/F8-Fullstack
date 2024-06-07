// vòng lặp
// var users = ["user 1", "user 2", "user 3"];
// // xóa phần tử trong mảng splice(index, number)
// var result = users.splice(1, 2, "Item 1", "Item 2");
// console.log(users);
// console.log(result);
//15.  forEach(callback)

// users.forEach(function (value, index) {
//   console.log(value, index);
// });

//16. map(callback) ==> duyệt quâ  từ phần tử của mảng ban đầu
// - trả về 1 mảng mới có số phần tử bằng số phần tử mảng ban đầu
// - Giá trị các phần tử của mảng mới là giá trị của callback (callback return về giá trị gì, lưu vào mảng mới)

// var newArr = users.map(function (value, index) {
//   console.log(value, index);
//   return `${index + 1} - ${value}`;
// });
// console.log(newArr);

//17. filter(callback)
//-- duyệt qua từ phần tử của mảng ban đầu
// -trả về giá 1 mảng mới, giá trị phần tử của mảng mới se là các phần tử của mảng ban đầu nếu callback trả về truthy

// var result = users.filter(function (value, index) {
//   return index > 1;
// });
// console.log(result);

// bài tập
// var customers = [
//   ["Customers 1", "Customers1@gmail.com", 31],
//   ["Customers 2", "Customers2@gmail.com", 30],
//   ["Customers 3", "Customers3@gmail.com", 20],
//   ["Customers 4", "Customers4@gmail.com", 10],
// ];

// var _customers = customers.filter(function (customers) {
//   return !customers.includes("Customers2@gmail.com");

// });

// customers = customers.map(function (customer) {
//   if (customer.includes("Customers2@gmail.com")) {
//     customer[2] += 2;
//   }
//   return customer;
// });

// console.log(customers);

var data = [];

var addData = function (value, status) {
  if (status === true && !data.includes(value)) {
    data[data.length] = value;
  }
  if (status === false) {
    data = data.filter(function (_value) {
      return _value !== value;
    });
  }
};
addData("Thuận", true);
addData("An", true);
addData("An", false);
console.log(data);

/*
Giải thích nếu status = true thì thêm value vào mảng
(Kiểm tra trùng)
*/
