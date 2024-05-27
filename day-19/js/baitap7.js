var multiplication = 1;
var division = 1;
var n = 10;
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n; j++) {
    multiplication = i * j;
    document.write(`${i} x ${j} = ${multiplication} <br>`);
  }
  document.write("<br>");
}
// phép chia

for (let _i = 1; _i < n; _i++) {
  for (let _j = 1; _j <= n; _j++) {
    var _multiplication = _i * _j;
    division = _multiplication / _j;
    document.write(`${_multiplication} : ${_j} = ${division} <br>`);
  }
  document.write("<br>");
}
