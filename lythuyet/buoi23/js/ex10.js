var carouseInner = document.querySelector(".carousel-inner");
var nextBtn = document.querySelector(".carousel .next");
var prevBtn = document.querySelector(".carousel .prev");

// tính
var itemWidth = carouseInner.clientWidth;
var position = 0;
var totalWidth = carouseInner.children.length * itemWidth;
console.log(totalWidth);

nextBtn.addEventListener("click", function () {
  if (Math.abs(position) + itemWidth >= totalWidth) {
    return;
  }
  position -= itemWidth;
  carouseInner.style.transform = `translateX(${position}px)`;
});

prevBtn.addEventListener("click", function () {
  if (Math.abs(position) === 0) {
    return;
  }
  position += itemWidth;
  carouseInner.style.transform = `translateX(${position}px)`;
});
