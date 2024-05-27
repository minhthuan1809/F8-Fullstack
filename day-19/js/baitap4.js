var number = 3;
let result = true;
if (number < 0) {
  document.write(number, "Không được nhỏ hơn 1");
} else {
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      result = false;
      break;
    } else {
      result = true;
    }
  }
}
if (result) {
  document.write(number, " Là số nguyên tố");
} else {
  document.write(number, " Không phải là số nguyên tố");
}
