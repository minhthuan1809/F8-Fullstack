function _array(_arr) {
  var result = [];
  _arr.forEach(function (value) {
    if (Array.isArray(value)) {
      result = result.concat(_array(value));
    } else {
      result.push(value);
    }
  });
  return result;
}
var arr = [0, 1, [2, 3], [4, 5, [6, 7]], [8, [9, 10, [11, 12]]]];
document.write(
  ` cho mảng sau : [0, 1, [2, 3], [4, 5, [6, 7]], [8, [9, 10, [11, 12]]]] <br> viết lại mảng  ${_array(
    arr
  )}`
);
