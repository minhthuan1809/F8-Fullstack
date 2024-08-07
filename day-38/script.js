const btnCompleted = document.querySelector(".btn--conpleted");
const iconEl = document.querySelector(".icon");
btnCompleted.addEventListener("click", () => {
  btnCompleted.classList.toggle("active--btn");
  iconEl.classList.toggle("active--icon");
});
