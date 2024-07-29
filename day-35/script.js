function customSetInterval(callback, delay) {
  let start = performance.now();
  let stop = false;

  function interval() {
    if (stop) return;

    let now = performance.now();
    if (now - start >= delay) {
      callback();
      start = now;
    }
    requestAnimationFrame(interval);
  }

  requestAnimationFrame(interval);

  return {
    clear: () => {
      stop = true;
    },
  };
}

let countdownValue = 30;
const countdownElement = document.querySelector(".countdown");
const btnEL = document.querySelector(".btn");
countdownElement.innerText = countdownValue;
const interval = customSetInterval(() => {
  countdownElement.innerText = countdownValue;
  countdownValue--;

  if (countdownValue < 0) {
    interval.clear();
    btnEL.classList.remove("disable");
  }
}, 1000);
