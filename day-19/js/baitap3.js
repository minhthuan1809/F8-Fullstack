let n = 10;
let sum = 0;
let print = "";
for (let i = 1; i <= n; i++) {
  sum += i * (i + 1);
  print += `${i} * ${i + 1} + `;
}
// Remove the last " + " from the string
print = print.slice(0, -3);
document.write(print, "=", sum);
