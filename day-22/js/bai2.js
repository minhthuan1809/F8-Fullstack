function isNumber(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 1) {
      continue;
    }
    if (arr[i] === 2 || arr[i] === 3) {
      Sum[Sum.length] = arr[i];
    }
    if (arr[i] % 2 === 0 || arr[i] % 3 === 0) {
      continue;
    } else {
      Sum[Sum.length] = arr[i];
    }
  }
}
function isSum() {
  var Total = 0;
  isNumber(_arr);
  for (var index in Sum) {
    Total += Sum[index];
  }
  return Total;
}
var _arr = [3, 4, 5, 6, 7, 2, 3, 45, 5, 67, 8, 9, 5, 4];
var Sum = [];

document.write(`Tổng các số nguyên tố trong mảng là :  ${isSum()}`);
