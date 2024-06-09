var arr = [
  ["a", 1, true],
  ["b", 2, false],
];

var string = [];
var number = [];
var boolean = [];
var newArr = [];
var _arr = arr.filter(function (value, index) {
  value.forEach(function (params) {
    if (typeof params === "string") {
      return (string[string.length] = params);
    } else if (typeof params === "boolean") {
      return (boolean[boolean.length] = params);
    } else if (typeof params === "number") {
      return (number[number.length] = params);
    }
  });
});
newArr = newArr.concat(string, number, boolean);
document.write(`var arr = [["a", 1, true], ["b", 2, false]] <br>`);
document.write(`Kết quả :[${newArr}]`);
