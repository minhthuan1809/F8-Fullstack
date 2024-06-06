function filterDuplicates(arr) {
  var uniqueElements = [];
  var result = [];

  for (var i = 0; i < arr.length; i++) {
    if (!uniqueElements[arr[i]]) {
      result.push(arr[i]);
      uniqueElements[arr[i]] = true;
    }
  }

  return result;
}

var arr = [1, 2, 2, 3, 4, 4, 5, 6, 7, 4, 7];
var filteredArray = filterDuplicates(arr);
document.write(
  `Xóa bỏ các kí tự giống nhau từ mảng ${arr} Viết lại mảng : ${filteredArray}`
);
