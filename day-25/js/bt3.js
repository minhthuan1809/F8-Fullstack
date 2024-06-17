//tạo email
function createAcount(name, password, gmail) {
  return {
    name: name,
    password: password,
    gmail: gmail,
    role: "user",
  };
}

var handleRegister = function (name, password, gmail) {
  if (!name || !password || !gmail) {
    return "Thông tin đăng kí không đầy đủ";
  }
  var _createAcount = createAcount(name, password, gmail);
  data.push(_createAcount);
  return data;
};
var handleLogin = function (gmail, password) {
  var _data = data.filter(function (value) {
    return value.gmail === gmail && value.password === password;
  });
  return _data ? _data : "Gmail hoặc password sai !";
};

const data = [];
const user1 = handleRegister("Nguyen Van A", "123456", "nguyenvana@email.com");
const user2 = handleRegister("Nguyen Van B", "123456", "nguyenvanb@email.com");
const dataLogin = handleLogin("nguyenvanb@email.com", "123456");

console.log("data = ", data);
console.log("dataLogin = ", dataLogin);
