// console.log(boxEl.style);
// // boxEl.style.color = "red";
// boxEl.style.textAlign = "center";
// boxEl.style.textTransform = "uppercase";
// var css = {
//   color: "red",
//   textAlign: "center",
//   backgroundImage: `url("https://picsum.photos/id/237/536/354")`,
//   width: "500px",
//   height: "500px",

// };
// Object.assign(boxEl.style, css);

// bài tập : thêm thuộc tính các ground
var boxEl = document.querySelector(".box");
var btnIn = document.querySelector(".fadein");
var btnOut = document.querySelector(".FadeOut");

btnOut.addEventListener("click", function () {
  var css = {
    opacity: 0,
    visibility: "hidden",
    transition: "all 0.5s ease",
  };
  Object.assign(boxEl.style, css);

  setTimeout(function () {
    boxEl.style.display = "none";
  }, 500);
});

btnIn.addEventListener("click", function () {
  var css = {
    opacity: 1,
    visibility: "visible",
    transition: "all 0.5s ease",
  };

  boxEl.style.display = "block";

  setTimeout(function () {
    Object.assign(boxEl.style, css);
  }, 500);
});
