const list = document.querySelector(".list");
let Module = 1;
let moduleTitle = 1;

courseData.forEach((value) => {
  list.innerHTML += `<div class="active list-item" data-module="${Module}">Module: ${Module}: ${value.name}</div>`;
  Module++;
  value.lessons.forEach((valueEl) => {
    list.innerHTML += `<div class="list-item" data-title="${moduleTitle}">Bài ${moduleTitle}  : ${valueEl.title}</div>`;
    moduleTitle++;
  });
});

document.querySelectorAll(".list-item").forEach((item) => {
  item.setAttribute("draggable", true);

  item.addEventListener("dragstart", (event) => {
    event.dataTransfer.setData(
      "text/plain",
      event.target.dataset.title || event.target.dataset.module
    );
    event.dataTransfer.effectAllowed = "move";
    event.target.classList.add("dragging");
  });

  item.addEventListener("dragend", (event) => {
    event.target.classList.remove("dragging");
  });
});

list.addEventListener("dragover", (event) => {
  event.preventDefault();
  event.dataTransfer.dropEffect = "move";
  const draggingItem = document.querySelector(".dragging");
  const elementOver = event.target;

  if (
    elementOver.classList.contains("list-item") &&
    elementOver !== draggingItem
  ) {
    const bounding = elementOver.getBoundingClientRect();
    const offset = bounding.y + bounding.height / 2;

    if (event.clientY - offset > 0) {
      elementOver.insertAdjacentElement("afterend", draggingItem);
    } else {
      elementOver.insertAdjacentElement("beforebegin", draggingItem);
    }
  }
});

list.addEventListener("drop", (event) => {
  event.preventDefault();
  const data = event.dataTransfer.getData("text/plain");
  console.log("Dropped:", data);
});
