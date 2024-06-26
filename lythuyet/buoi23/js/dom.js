// DOM = Document Object Model
/*
Mô hình hóa tài liệu html thành các đối tượng 
- cho phép js chỉnh sửa html trên trang web 


Các Loại DOM 
- DOM documen 
- DOM Element
- DOM html
- DOM CSS
- DOM navication
- DOM Event
- DOM Event Listener
- DOM Nodes
Bổ Sùn thêm : Shadow DOM 
Custom Element , Web Component ,Custom Even , ....



*/
// - DOM Element : truy xuất tới các thẻ html để trả về object
// var head = document.head;
// console.log(head);

// var title = document.title;
// var body = document.body;
// console.log(body);

// chọn theo id -- > chỉ trả về 1 elemen đầu tiên
// var h2 = document.getElementById("title");
// chọn theo class => trả về 1 danh sách các element tìm được
// chọn theo tagName ==>Trả về 1 danh sách các element tìm được
// var h2List = document.getElementsByClassName("title");
// console.log(h2List);
// chọn theo css Selector

// - Dùng querySelector ==> trả về  element đầu tin tìm được
// - Dùng querySelectorALL ==> trả về danh sách element đầu tin tìm được
// var h2 = document.querySelector("#title");
// console.log(h2);

//
// var username = document.querySelector('[name="Username"]');
// var username = document.lo
// console.loggin_form.Username;(username);

// var h2box = document.querySelector(".box .title");
// console.log(h2box);
// var h2box = document.querySelector(".box");
// var title = h2box.querySelector(".title");
// console.log(title);
