var arr = [
  ["a", 1, true],
  ["b", 2, false],
];

var _arr = arr.filter(function (value, index) {
  for (let i = 0; i < index; i++) {}
});
console.log(typeof arr[1][1]);
