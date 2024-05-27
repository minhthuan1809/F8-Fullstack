let chess = "";
var row = 8;
var col = 8;
for (let i = 0; i < col; i++) {
  for (let j = 0; j < row; j++) {
    if ((i + j) % 2 === 0) {
      chess += "██";
    } else {
      chess += "  ";
    }
  }
  chess += "\n";
}
console.log(chess);
document.write("xem ở của sổ console ---->(F12)");
