// envent object
// duối tượng chứa toàn bộ  thông tin của sự kiện

// // btn.addEventListener("mousedown", function (e) {
// //   console.log(e.offsetX);
// // });

// document.addEventListener("mousemove", function (e) {
//   console.log(e.clientX, e.clientY);
//   btn.style.translate = `${e.clientX}px ${e.clientY}px `;
// });

var btn = document.querySelector(".btn");
var body = document.querySelector("body").clientWidth;
var bodyHeight = document.querySelector("body").clientHeight;
console.log(bodyHeight);
var right = document.querySelector(".right");
btn.addEventListener("mousedown", function () {
  document.addEventListener("mousemove", handleDrag);

  btn.addEventListener("mouseup", function (a) {
    document.removeEventListener("mousemove", handleDrag);
    if (a.clientX >= body / 2) {
      btn.style.translate = `${body - 140}px ${bodyHeight - 150}px `;
    } else {
      btn.style.translate = `${e.clientX - 72}px ${e.clientY - 88}px `;
    }
    console.log("thả");
  });
});

var handleDrag = function (e) {
  console.log("clickX", e.clientX);
  btn.style.translate = `${e.clientX - 72}px ${e.clientY - 88}px `;
  console.log("kéo");
  if (e.clientX >= body / 2) {
    right.style.backgroundColor = "red";
  } else {
    right.style.backgroundColor = "white";
  }
};
