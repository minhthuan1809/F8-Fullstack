class Person {
  // khai báo
  name;
  email;
  #income = 10000; // private property
  static message = "Thuan"; // static property
  #data = ["user 1", "user 2", "user 3"];
  constructor(name, email) {
    console.log("Phương thức khởi tạo");
    ///Khởi tao giá trị mặc định
    this.name = name;
    this.email = email;
  }
  getIncome() {
    return this.#income;
  }
  #getName() {
    return this.name;
  }
  #getEmail() {
    return this.email;
  }
  getInfor() {
    return [this.#getName(), this.#getEmail()];
  }
  static getMessage() {
    return this.message;
  }
  get latest() {
    return this.#data[this.#data.length - 1];
  }
  set latest(value) {
    this.#data.push(value);
  }
}
const person = new Person("minh Thuận", "thuan@gmail.com"); // instance
// console.log(person.getIncome());
// console.log(person.getInfor());
// console.log(Person.getMessage());
person.latest = "user 5";
console.log(person.latest);
