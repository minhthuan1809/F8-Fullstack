var aEl = document.querySelector("a");
aEl.addEventListener("click", function (e) {
  e.preventDefault();
  var link = this.href;
  console.log(link);
});

var menu = document.querySelector(".menu");

document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
  var clientX = e.clientX;
  var clientY = e.clientY;
  Object.assign(menu.style, {
    top: clientX + "px",
    left: clientY + "px",
    display: "block",
  });
});

document.addEventListener("click", function () {
  menu.style.display = null;
});
menu.addEventListener("click", function (e) {
  e.stopPropagation();
  menu.style.background = "black";
});
