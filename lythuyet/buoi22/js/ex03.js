// Contructor
/*
Tình Huống :
- Xây dựng object user 
+ name
+ email
+ phone
+ password
+ login()
- Xây dựng partner
+ name
+ email
+ phone
+ password
+ login()


==> cấu trúc object giống nhau
==> Giải pháp : Tạo ra 1 bản thiết kế --> tạo các object từ bản thiết kế đó
*/

// // sử dụng quy tắc đặt tên PasscalCase
// // Sử dụng danh từ

// var user = new User("Minh Thuận", "Thuan@gmail.com", "1234567");
// // console.log(user);
// // console.log(user.getInfo());

// var partner = new User("thuan", "thuan@gmail.com", "123324234235");
// console.log(partner);

// var product = {
//   name: "Sản phẩm 1",
//   price: 1200,
// };
// console.log(user);
// kiểm tra q Object thuộc constructor nào ?

// console.log(user.constructor.name);
// if (
//   product !== null &&
//   product !== undefined &&
//   product.constructor.name === "Object"
// ) {
//   console.log("constructor Object");
// }

// if (user instanceof User) {
//   console.log("constructor Object");
// }
// class / constracter ==> Object ==> Instanceof

// Phương thức tính , Thuộc tính tĩnh (static , method,static property)
// ==> không phụ thuộc vào Object / instanceof
// ==> Phụ thuộc : Constructor

function User(name, email, pass) {
  this.name = name;
  this.email = email;
  this.pass = pass;

  this.getInfo = function () {
    return "Name : " + this.name + ", Email:" + this.email;
  };
}

User.getMessage = function () {
  console.log(new this().a);
  return "Học lập trình rất khó";
};

User.message = "Học Lập trình không khó!";

User.prototype.getMessage = function () {
  return "Học lập trình không khó";
};
User.prototype.a = "Xin Chào các Bạn";
// var user = new User();
// user.getMessage();
User.getMessage();

function Person() {
  this.data = ["Item 1", "Item 2", "Item 3"];
}

Object.defineProperties(Person.prototype, {
  latest: {
    get: function () {
      return this.data[this.data.length - 1];
    },
    set: function (value) {
      this.data.push(value);
    },
  },
});

var person = new Person();

person.latest = "Item 4";
console.log(person.data);
