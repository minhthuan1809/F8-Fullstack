class Person {
  //   thuộc tính
  constructor(name, email) {
    this.name = name;
    this.email = this.email;
  }
  // phương thức
  getName() {
    return this.name;
  }
  getEmail() {
    return this.email;
  }
}
// enhanced object literal

class User extends Person {
  constructor(name, email) {
    super(name, email);
  }
  getinfor() {
    return [this.getName(), this.getEmail()];
  }
}
var user = new User("Minh Thuận", "thuan18092003@gmail.com");
console.log(user);
