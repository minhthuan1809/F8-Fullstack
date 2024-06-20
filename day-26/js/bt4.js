Array.prototype.reduce2 = function (callback, initialValue) {
  if (typeof callback !== "function") {
    throw new TypeError(callback + " Không phải hàm");
  }

  if (this.length === 0 && arguments.length < 2) {
    throw new TypeError("Giảm mảng trống không có giá trị ban đầu");
  }

  let accumulator = initialValue;
  let startIndex = 0;

  if (arguments.length < 2) {
    accumulator = this[0];
    startIndex = 1;
  }

  for (let i = startIndex; i < this.length; i++) {
    accumulator = callback(accumulator, this[i], i, this);
  }

  return accumulator;
};
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce2(function (acc, cur) {
  return acc + cur;
}, 0);

console.log(sum);
