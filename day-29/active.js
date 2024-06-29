const input = document.querySelector("input");
const listEl = document.querySelector(".list");
let countRandom = 0;

function addTask(event) {
  event.preventDefault();

  if (input.value.length >= 1) {
    countRandom++;

    var text = `<div class="Todo" data-number="${countRandom}">
            <p class="text">${input.value}</p>
            <div class="icon">
                <i class="fa-solid fa-wrench" data-number="${countRandom}"></i>
                <i class="fa-solid fa-trash" data-number="${countRandom}"></i>
            </div>
        </div>`;
    listEl.innerHTML += text;

    console.log("Thêm thành công -->", input.value);
    input.value = "";
  } else {
    console.log("Bạn đang để trống!");
  }
}

function handleDelete(event) {
  if (event.target.classList.contains("fa-trash")) {
    var _number = event.target.getAttribute("data-number");
    console.log(`Xóa ${_number}`);
    document.querySelector(`.Todo[data-number="${_number}"]`).remove();
  }
}

function handleEdit(event) {
  if (event.target.classList.contains("fa-wrench")) {
    var number = event.target.getAttribute("data-number");
    var todoDiv = event.target.closest(".Todo");
    var pText = todoDiv.querySelector(".text").textContent;
    var editForm = `
                  <div class="edit">
                <input type="text" placeholder="What is the task today?" value= "${pText}">
                <button class = "btnEdit">Add Task</button>
                    </div>`;

    todoDiv.innerHTML = editForm;
    var textEdit = todoDiv.querySelector("input");
    todoDiv.querySelector(".btnEdit").addEventListener("click", function () {
      editForm = `
            <p class="text">${textEdit.value}</p>
            <div class="icon">
                <i class="fa-solid fa-wrench" data-number="${number}"></i>
                <i class="fa-solid fa-trash" data-number="${number}"></i>
            </div>
        `;
      todoDiv.innerHTML = editForm;
    });
  }
}

listEl.addEventListener("click", function (e) {
  handleDelete(e);
  handleEdit(e);
});
window.onload = function () {
  var form = document.querySelector("form");
  form.onsubmit = addTask;
};
