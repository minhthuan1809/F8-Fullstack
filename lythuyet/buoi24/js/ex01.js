// // js ==> Tạo nodes ==> update Dom tree
// // tạo element node
var root = document.querySelector("#root");
// var h1 = document.querySelector("h1");
// h1.classList.add("title");
// h1.innerText = `học JS không Khó`;
// var btn = document.createElement("button");
// btn.innerText = `Click me`;

// btn.addEventListener("click", function () {
//   // h1.innerText =`học js Không Khó`;
//   var h2 = document.createElement("h2");
//   h2.innerText = "h2 mới";
// });
// // Thêm nodes vào cây dom
// root.append(h1);
// root.append(btn);

/*
bài tập
- thêm đoạn html dưới đây vào sau nút click me 
- khi click vào nút "ADD" thêm li mới vào tự động tằn số thứ tự
<ul class="menu">
        <li> Item 1</li>
        <li> Item 2</li>
        <li> Item 3</li>
        <li> Item 4</li>
    </ul>
*/
var ul = document.createElement("ul");
ul.classList.add("menu");
for (let i = 0; i < 5; i++) {
  var li = document.createElement("li");
  li.innerText = `Item ${i + 1}`;
  ul.append(li);
}
var addBtn = document.createElement("button");
addBtn.innerText = "Add";
addBtn.addEventListener("click", function () {
  //   var li = document.createElement("li");
  //   li.innerText = `Item ${++i}`;
  //   ul.append(li);

  var h2 = document.createElement("li");
  h2.innerText = `Hello Em`;
  //   root.insertBefore(h2, ul);
  var nextUlEl = ul.nextElementSibling;
  //   if (!nextUlEl) {
  //     return;
  //   }
  root.insertBefore(h2, nextUlEl);
  root.replaceChild(h2, h1);
  root.append(h1);
  root.removeChild(li); // xóa
});

root.append(ul);
root.append(addBtn);
