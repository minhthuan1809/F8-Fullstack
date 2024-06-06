var numbers = [5, 1, 9, 8, 10];
var element = 4;
numbers[numbers.length] = element;
for (var i in numbers) {
  for (var j in numbers) {
    if (numbers[i] <= numbers[j]) {
      var temp = numbers[i];
      numbers[i] = numbers[j];
      numbers[j] = temp;
    }
  }
}
document.write(`Sắp xếp mảng  ${numbers}`);
