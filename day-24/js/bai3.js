var nums = [1, 2, 3, 4, 5, 6, 2, 9, 7, 0, 100];

function number(arr) {
  var _number = 1;
  for (let i = 0; i < arr.length; i++) {
    if (arr.includes(_number)) {
      _number++;
    }
  }
  return `Số nguyên dương nhỏ nhất không có trong mảng : ${_number} `;
}

// run
document.write(`nums = [${nums}] <br>`);
document.write(number(nums));
