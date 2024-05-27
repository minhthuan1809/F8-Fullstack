var triangle = 10;
var total = 1;
for (let i = 1; i < triangle; i++) {
  for (let j = 0; j < i; j++) {
    document.write(total + " ");
    total += 1;
  }
  document.write("<br>");
}
