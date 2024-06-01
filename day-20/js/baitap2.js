function reverseNumber(n) {
  let isNegative = n < 0;
  n = Math.abs(n);
  let reversedNumber = 0;

  while (n > 0) {
    let remainder = n % 10;
    reversedNumber = reversedNumber * 10 + remainder;
    n = Math.floor(n / 10);
  }

  return isNegative ? -reversedNumber : reversedNumber;
}

// Ví dụ sử dụng
console.log(reverseNumber(12345)); // Kết quả: 54321
console.log(reverseNumber(-12345)); // Kết quả: -54321
console.log(reverseNumber(0)); // Kết quả: 0
