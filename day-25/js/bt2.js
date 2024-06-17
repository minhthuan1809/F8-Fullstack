var customers = [
  { name: "Nguyễn Văn A", age: 11, address: "Ha Noi" },
  { name: "Nguyễn Văn B", age: 2, address: "Hai Phong" },
  { name: "Nguyễn Văn C", age: 12, address: "TP.HCM" },
];

function createCustomers(_customers) {
  _customers = _customers.map(function (value) {
    _value = value.name.split(" ");
    var shortName = _value[0].trim() + " " + _value[_value.length - 1].trim();
    value.shortName = shortName;
    return value;
  });
  _customers.sort(function (a, b) {
    return a.age - b.age;
  });
  return _customers;
}

var result = createCustomers(customers);

console.log(result);
