function Parameters(...number) {
  var sum = 0;
  for (const i of number) {
    if (typeof i !== "number") {
      return "lỗi: Tất cả các tham số phải là số.";
    }
    sum += i;
  }
  return sum;
}

console.log(Parameters(1, 2, 3, 4, 5));
