// 1 chọn thành phần cha : parentElement
// 2. chọn thành phàn con : children (trả về 1 danh sách các element con)
//3. chọn thành phần kế tiếp : nextElementSibling
//4. chon được phấn phía trước: previousElementSibling
//5, firstElementChild : chọn element đầu tiên
//6, lastElementChild : chọn element đầu tiên
// parentNode
//childNodes
//nextSibling
//previousS

// var items = document.querySelectorAll("ul a");
// items.forEach(function (item) {
//   item.addEventListener("click", function (e) {
//     e.preventDefault();
//     // var li = this.parentElement;
//     // console.log(li);
//     // console.log(this.parentElement.children[1].children);
//     // console.log(this.nextElementSibling);
//   });
// });

// var list = document.querySelector(".lists");
// list.childNodes[0].data = "f9";
// console.log(list.childNodes);

// var listItemEl = document.querySelectorAll(".item a");

// listItemEl.forEach(function (item) {
//   item.addEventListener("click", function (e) {
//     e.preventDefault();
//     var content = this.nextElementSibling;
//     if (content && content.classList.contains("content")) {
//       content.classList.toggle("active");
//     }
//   });
// });
