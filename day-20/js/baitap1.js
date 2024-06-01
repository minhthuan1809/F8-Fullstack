function fibonacci(n) {
  if (n <= 0) {
    return "N không được bé hơn 0";
  } else if (n === 1) {
    return [0];
  } else if (n === 2) {
    return [0, 1];
  } else {
    const fibList = fibonacci(n - 1);
    fibList.push(fibList[fibList.length - 1] + fibList[fibList.length - 2]);
    return fibList;
  }
}

// Sử dụng hàm
const n = 10;
document.write(fibonacci(n));
