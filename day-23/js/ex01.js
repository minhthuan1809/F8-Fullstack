var arrA = [1, 4, 3, 2];
var arrB = [5, 2, 6, 7, 1];

var arr = arrA.filter(function (params) {
  return arrB.includes(params);
});
document.write("arrA = [", arrA, "] <br>");
document.write("arrB = [", arrB, "] <br>");
document.write("Lấy kết quả giao giữa 2 mảng : [", arr, "]");
