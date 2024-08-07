const btnCompleted = document.querySelector(".btn--conpleted");
const iconEl = document.querySelector(".icon");
btnCompleted.addEventListener("click", () => {
  btnCompleted.classList.add("active--btn");
  iconEl.classList.add("active--icon");
  console.log("thuaanj");
});
