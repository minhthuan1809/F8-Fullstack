var a = document.querySelector("a");
console.log(a.href);
console.log(a.title);
console.log(a.id);
console.log(a.target);

a.href =
  "https://fullstack-nodejs.fullstack.edu.vn/?id=8966795b-fbcb-45f9-b860-fa99a0f3dd38#tim-hieu-cac-loai-dom";

// chỉ khả dụng với các thuộc tính hợp lệ thẻ html
// getAttribute(Tên thuốc tính)
// console.log(a.getAttribute("width"));

// setAttribute(tên thuộc tính)
// a.setAttribute("width", "500");
//removeAttribute(tên thuộc tính) xóa thuộc tính
// a.removeAttribute("width");

// trong html , có 1 loại thuộc tính do lập trinhhf viên tự thêm và xử lý bằng js ==> gọi là data attribute
console.log(a.getAttribute("data-width"));
a.setAttribute("data-width", "100");

/// ngoài ra có thể truy cấp vào data attribute bằng data object

// console.log(a.dataset);
// console.log(a.dataset.width);
// a.dataset.height = 100;
// // thêm thuốc tính
// a.dataset.anmaitionDuration = "1s";
// delete a.dataset.width;

// classList
// console.log(a.className);
// a.className = a.className + " text-1";

a.classList.add("text-1", "text-2", "text-3");
a.classList.remove("text-2");
a.classList.replace("text-1", "text-11");
a.classList.toggle("conten"); // không có thì thêm có rồi thì xóa đi
console.log(a.classList.contains("text")); // kiểm tra bên trong có text không
console.log(a.classList);

// gán sự kiện cho danh sách
// var liList = document.querySelectorAll("ul li");
// console.log(liList);
// liList.forEach((li) => {
//   li.addEventListener("click", function () {
//     console.log(this);
//   });
// });
