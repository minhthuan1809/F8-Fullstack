var arr = [3, 4, 5, 6, 7, 2, 3, 45, 5, 67, 8, 9, 5, 4];
var number = [];
for (var index in arr) {
  if (arr[index] < 2) {
    continue;
  } else if (arr[index] % 2 === 0 && arr[index] % 3 === 0) {
    continue;
  } else {
    number[number.length] = arr[index];
  }
}

console.log(number);
