var content = `<h1>Học lập trình không khó tại F8. Học lập trình không khó tại F8. Học lập trình không khó tại F8. Học lập trình không khó tại F8</h1>`;
var keyword = "trình";
var position = content.toLowerCase().indexOf(keyword.toLowerCase());
var newContent = "";
while (position !== -1) {
  newContent +=
    content.slice(0, position) +
    "<span>" +
    content.slice(position, position + keyword.length) +
    "</span>";
  content = content.slice(position + keyword.length);
  position = content.toLowerCase().indexOf(keyword.toLowerCase());
}
newContent = newContent + content;

document.write(newContent);
