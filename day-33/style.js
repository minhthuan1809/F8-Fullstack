var list = document.querySelector(".list");
var listItem = document.querySelector(".list-item");
var Module = 1;
var moduleTitle = 1;

courseData.forEach((value) => {
  list.innerHTML += `<div class=" active list-item" data-module = "${Module++}">Module: ${Module++}: ${
    value.name
  }</div>`;
  value.lessons.forEach((valueEl) => {
    return (list.innerHTML += `<div class="list-item" data-title = "${moduleTitle++}">Bài ${moduleTitle++}  : ${
      valueEl.title
    }</div>`);
  });
});

document.querySelectorAll(".list-item").forEach((item) => {
  item.setAttribute("draggable", true);

  item.addEventListener("dragstart", (event) => {
    event.dataTransfer.setData(
      "text/plain",
      event.target.dataset.title || event.target.dataset.module
    );
    console.log("Drag started:", event.target);
  });

  item.addEventListener("dragend", (event) => {
    console.log("Drag ended:", event.target);
  });
});

list.addEventListener("dragover", (event) => {
  event.preventDefault();
  console.log("Drag over:", event.target);
});

list.addEventListener("drop", (event) => {
  event.preventDefault();
  const data = event.dataTransfer.getData("text/plain");
  console.log("Dropped:", data);
});
