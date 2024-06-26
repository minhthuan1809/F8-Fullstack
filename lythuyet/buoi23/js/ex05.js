var inputEl = document.querySelector("input");
var btn = document.querySelector("button");
var count = 0;
btn.addEventListener("click", function () {
  if (inputEl.value === "") {
    document.querySelector("span").innerHTML = " <br> bạn đang để trống !";
    document.querySelector("span").classList.add("err");
  } else {
    document.querySelector("span").innerText = "";
    var liList = document.querySelector("ul");

    liList.innerHTML += `<li><input type="checkbox">${inputEl.value} </li>`;
    var li = document.querySelector("input[type=checkbox]");
    var _li = li.querySelectorAll();
  }
});
