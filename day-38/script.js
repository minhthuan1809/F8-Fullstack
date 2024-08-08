const btnCompleted = document.querySelector(".btn--conpleted");
const boxCompleted = document.querySelector(".box--conpleted");
// const modal = document.querySelector(".modal");
const iconEl = document.querySelector(".icon");
const addEl = document.querySelector(".add");
const numberEl = document.querySelector(".number");

//modal
function getCancel() {
  modal.style.display = "none";
}

// add Todos App
addEl.addEventListener("click", (e) => {
  modal.style.display = "block";
  modal.innerHTML = `
   <span class="overlay" onclick="getCancel()"></span>
          <div class="form">
              <input type="text" placeholder="add Todo">
              <div class="line"></div>
              <div class="btn--modal">
                  <button class="btn--modal__add">Add</button>
                  <button class="btn--modal__Cancel" onclick="getCancel()">Cancel</button>
              </div>
          </div>
  `;
});

btnCompleted.addEventListener("click", () => {
  btnCompleted.classList.toggle("active--btn");
  iconEl.classList.toggle("active--icon");
  setTimeout(() => {
    boxCompleted.classList.toggle("box--conpleted__active");
  }, 400);
});
