var nums1 = [1, 3, 55, 66, 99, 100],
  nums2 = [2, 5];

nums1 = nums1.concat(nums2);
nums1.sort(function (a, b) {
  return a - b;
});

function center(arr) {
  var number = 0;
  var string;
  if (arr.length % 2 === 0) {
    number = (arr.length / 2 - 1) | 0;
    var result = arr.slice(number, number + 2);
    var calculate = (result[0] + result[1]) / 2;
    string = `mảng sau khi hợp nhất = [${nums1}] và trung vị là (${result[0]} + ${result[1]}) /2 =  ${calculate}`;
  } else {
    number = (arr.length / 3 + 1) | 0;
    string = `mảng sau khi hợp nhất = [${nums1}] và trung vị là ${arr[number]}`;
  }
  return string;
}

document.write(center(nums1));
