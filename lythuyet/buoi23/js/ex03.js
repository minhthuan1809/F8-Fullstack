//DOM HTML giúp bạn thao tác với html
/*
- nội Dung 
- Thuộc tính
- xóa
- class
*/
var contentEL = document.querySelector(".content");

// lấy nội dung thẻ html
// innerHTML
// console.log(contentEL.innerHTML);
// contentEL.innerHTML = `<h2> Học lập trình không khó </h2>`;

// // innerText
// console.log(contentEL.innerText);
// contentEL.innerText = `<h2> Học lập trình không khó </h2>`;

//textContent
// console.log(contentEL.textContent);
// contentEL.textContent = `<h2> Học lập trình là gì </h2>`;

// outerHTML
// console.log(contentEL.outerHTML);
// contentEL.outerHTML = `<h2> minhh thuận</h2>`;
// innerHTML
console.log(contentEL.outerHTML);
// contentEL.innerHTML = `<h2> minhh thuận</h2>`;

var minus_btn = document.querySelector(".minus-btn");
var plus_btn = document.querySelector(".plus-btn");

var count = 0;
console.log(count);
minus_btn.addEventListener("click", function () {
  console.log(++count);
});
