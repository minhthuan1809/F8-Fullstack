// HTMLElement.prototype.css = function (style) {
//   Object.assign(this.style, style);
// };
// var title = document.querySelector(".title");
// title.css({
//   color: "red",
// });
// web componert
// b1  : Khởi tại class kế thừ từ HTMLElement

// class HelloWorld extends HTMLElement {
//   static observedAttributes = ["color", "size"];
//   constructor() {
//     super();
//   }
//   disconnectedCallback() {
//     console.log(`disconnectedCallback`);
//   }
//   connectedCallback() {
//     console.log(`connectedCallback`);
//     this.innerHTML = `<h1> Hello word <button class = "btn-btn"> click me</button></h1> `;
//     var btn = this.querySelector(".btn-btn");
//     var _this = this;
//     btn.addEventListener("click", function () {
//       _this.setAttribute("color", "red");
//       _this.setAttribute("size", "M");
//     });
//   }
//   attributeChangedCallback(name, oldValue, newValue) {
//     console.log(
//       `Attribute ${name} has changed from ${oldValue} to ${newValue}.`
//     );
//   }
// }
// // b2 : Đăng Ký component
// customElements.define("hello-world", HelloWorld);

// var btn = document.querySelector(".btn");
// var root = document.querySelector("#root");
// var helloworldEl = document.createElement("hello-world");
// var isShow = false;
// btn.addEventListener("click", function () {
//   if (!isShow) {
//     root.append(helloworldEl);
//     isShow = true;
//   } else {
//     helloworldEl.remove();
//     isShow = false;
//   }
// });

/// bài tập sang tối
class TodoApp extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    this.render();
    this.loadStyle();
    this.addEvenChangerTheme();
    this.addEvenChangerList();
  }
  loadStyle() {
    console.log(this);
    var style = document.createElement("style");
    style.textContent = `
    .todo_app{
        border : 1px solid red;
        padding:20px;
    }
    .theme-dark{
    background: black;
    color:white;
    }
    `;
    this.shadowRoot.append(style);
  }
  render() {
    this.shadowRoot.innerHTML = ` <div class="todo_app"> 
    <h1>Todo App</h1>
    <ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>

    </ul>
    <input type = "text" placeholder ="Enter your todo" />
        <button class="add-list">add</button>
        <button class="light-btn">Light theme</button>
        <button class="dark-btn">dark theme</button>
        </div>
        `;
  }
  addEvenChangerList() {
    var inputEl = this.shadowRoot.querySelector("input");
    var btnList = this.shadowRoot.querySelector(".add-list");
    var ul = this.shadowRoot.querySelector("ul");
    btnList.addEventListener("click", () => {
      var textList = inputEl.value;
      ul.innerHTML += ` <li>${textList}</li>`;
      inputEl.value = "";
    });
  }
  addEvenChangerTheme() {
    var toodoAppEl = this.shadowRoot.querySelector(".todo_app");
    var lightBtn = this.shadowRoot.querySelector(".light-btn");
    var darkBtn = this.shadowRoot.querySelector(".dark-btn");
    console.log(darkBtn);
    darkBtn.addEventListener("click", function () {
      toodoAppEl.classList.add("theme-dark");
    });
    lightBtn.addEventListener("click", function () {
      toodoAppEl.classList.remove("theme-dark");
    });
  }
}

var darkBtnEl = document.querySelector(".dark-btn");
customElements.define("todo-app", TodoApp);

// tạo shawdow root
// var boxEl = document.querySelector(".box");
// var shawdowRoot = boxEl.attachShadow({
//   mode: "open",
// });
// shawdowRoot.innerHTML = `<h1>
//             F8 -học lập trình rất
//         </h1>`;
// var style = document.createElement("style");
// style.textContent = `
// h1{
// color: red;}`;
// shawdowRoot.append(style);

// từ boxEl ==> Thay đổi text của h1
// var h1 = boxEl.shawdowRoot.querySelector("h1");
// console.log(h1);

// khi element đã được attachShadow ==> Không loại bỏ shadow, k attach lại được

// boxEl.attachShadow({ mode: "open" });
