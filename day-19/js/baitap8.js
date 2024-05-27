let N = 6;
let result = 0;

if (N >= 1) {
  result += 1;
}
if (N >= 2) {
  result += 1 / 2;
}
if (N >= 3) {
  result += 1 / 3;
}
if (N >= 4) {
  result += 1 / 4;
}
if (N >= 5) {
  result += 1 / 5;
}
if (N >= 6) {
  result += 1 / 6;
}

document.write("Giá trị của biểu thức: " + result);
