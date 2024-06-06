var numbers = [10, 2, 4, 6, 7, 4, 7, 3, 67, 8, 5, 43, 3, 0, 6];
var maxs = 0,
  locationMax = 1;
var min = numbers[0],
  locationMin = 0;

for (var index in numbers) {
  if (maxs < numbers[index]) {
    maxs = numbers[index];
    locationMax = index;
  }
  if (min > numbers[index]) {
    min = numbers[index];
    locationMin = index;
  }
}
document.write(
  `Số lớn nhất trong mảng [ ${numbers} ] là  : ${maxs} và nằm ở vị trí : ${locationMax} <br>`
);

document.write(
  `Số bé nhất trong mảng [ ${numbers} ] là  : ${min} và nằm ở vị trí : ${locationMin}`
);
