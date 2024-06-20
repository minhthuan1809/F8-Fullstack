// function User() {
//   this.name = "Minh Thuận";
//   this.email = "Thuan@gmail.com";
//   this.find = function () {
//     console.log(this);
//     return {
//       name: this.name,
//       email: this.email,
//     };
//   };
// }

// function Authentication() {
//   User.call(this); // thay đỏi this của user thành đối tượng của Authentication(this)
//   this.getProfile = function () {
//     return this.find();
//   };
// }
// var auth = new Authentication();
// console.log(auth.find());

// bài tập
var users = [
  {
    id: 1,
    name: "User 1",
    email: "user1@gmail.com",
    status: true,
    createdAt: "2024-06-18 00:00:00",
    updatedAT: "2024-06-18 00:00:00",
  },
  {
    id: 2,
    name: "User 2",
    email: "user2@gmail.com",
    status: true,
    createdAt: "2024-06-18 00:00:00",
    updatedAT: "2024-06-18 00:00:00",
  },
  {
    id: 3,
    name: "User 3",
    email: "user3@gmail.com",
    status: true,
    createdAt: "2024-06-18 00:00:00",
    updatedAT: "2024-06-18 00:00:00",
  },
];

// console.log(users);

function BaseTransformer(data) {
  var _this = this;
  return data.map(function (item) {
    return _this.response(item);
  });
}

// xây dụng tầng Transformer
function UserTransformer(data) {
  this.response = function (resource) {
    return {
      UID: resource.id,
      fullname: resource.name,
      email: resource.email,
      status: resource.status,
      statustext: resource.status ? "Active" : "Inactive",
      created_at: resource.createdAt,
      updated_at: resource.updatedAT,
    };
  };
  return BaseTransformer.call(this, data);
}
var output = new UserTransformer(users);
console.log(output);

// toán tử optinal chaning (?.) user?.length nếu user là mảng thi chạy .length
// var user = {};
// console.log(user?.message.a);

// var user = {};
// console.log(user.getName?.());

var user = [];
if (user?.length) {
  user.forEach?.(function (user) {
    console.log(user);
  });
}

// tham chiếu
var a = {
  name: "Minh Thuận",
  Email: "thuan@gmail.com",
};
// var b = Object.assign({}, a);
// var b = { ...a };
var b = JSON.parse(JSON.stringify(a));
b.name = "Nguyễn Minh Thuận";
console.log(a);
console.log(b);

var data = {
  name: "Minh Thuận",
};
function getNewData() {
  var value = Object.assign({}, data);
  value.message = "Hello";
  return value;
}
console.log(getNewData());
console.log(data);
