var progressBar = document.querySelector(".progress-bar");
var progress = document.querySelector(".progress");
var progressSpan = document.querySelector("span");
var initialClinetX = 0;
var moveSpace = 0;
var lastMoveSpace = 0;
var tooltip = document.querySelector(".tooltip");
var rate = 0;
progressBar.addEventListener("mousedown", function (e) {
  if (e.which !== 1) {
    return;
  }
  var width = progressBar.clientWidth;
  var offsetX = e.offsetX;
  rate = (offsetX / width) * 100;
  var time = (rate / 100) * audio.duration;
  console.log("time", time);
  tooltip.style.display = "block";
  tooltip.style.left = `${e.offsetX}px`;
  tooltip.style.top = `${-20}px`; // Adjust as needed
  tooltip.innerText = getTimeFormat(time);
  progress.style.width = `${rate}%`;
  initialClinetX = e.clientX;
  moveSpace = offsetX;
  lastMoveSpace = offsetX;
  audio.currentTime = (rate / 100) * audio.duration;
  document.addEventListener("mousemove", handleDrag);
});

progressSpan.addEventListener("mousedown", function (e) {
  e.stopPropagation();
  document.addEventListener("mousemove", handleDrag);
  initialClinetX = e.clientX;
});
document.addEventListener("mouseup", function (a) {
  document.removeEventListener("mousemove", handleDrag);
  audio.currentTime = (rate / 100) * audio.duration;

  lastMoveSpace = moveSpace;
});
function handleDrag(e) {
  moveSpace = e.clientX - initialClinetX + lastMoveSpace;
  console.log("MoveSpace: ", moveSpace);
  var progresssBaWidth = progressBar.clientWidth;
  var rate = (moveSpace / progresssBaWidth) * 100;
  console.log(rate);
  if (rate < 0) {
    rate = 0;
  } else if (rate > 100) {
    rate = 100;
  }
  progress.style.width = `${rate}%`;
  audio.currentTime = (rate / 100) * audio.duration;
}

/// sử lý audio
var audio = document.querySelector("audio");
var durationEL = progressBar.nextElementSibling;
var currentTimeEL = progressBar.previousElementSibling;
var playAcctionEL = document.querySelector(".play-action i");
var getTimeFormat = function (seconds) {
  var mins = Math.floor(seconds / 60);
  seconds = Math.floor(seconds - mins * 60);
  return `${mins < 10 ? "0" + mins : mins}:${
    seconds < 10 ? "0" + seconds : seconds
  }`;
};
playAcctionEL.addEventListener("click", function () {
  // audio.paused ==> kiểm tra xem nhạc có đang dừng hay không
  // audio.play ==> phát nhạc
  // audio.pause ==> dừng  nhạc
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
});
audio.addEventListener("play", function () {
  console.log("đang phát");
  playAcctionEL.classList.replace("fa-play", "fa-pause");
});
audio.addEventListener("pause", function () {
  console.log("đang dừng");
  playAcctionEL.classList.replace("fa-pause", "fa-play");
});
audio.addEventListener("timeupdate", function () {
  var currenTime = audio.currentTime;
  currentTimeEL.innerText = getTimeFormat(currenTime);
  var rate = (audio.currentTime / audio.duration) * 100;
  progress.style.width = `${rate}%`;
});
window.addEventListener("load", function () {
  durationEL.innerText = getTimeFormat(audio.duration);
});

progressBar.addEventListener("mousemove", function (e) {
  var width = progressBar.clientWidth;
  var offsetX = e.offsetX;
  var rate = (offsetX / width) * 100;
  var time = (rate / 100) * audio.duration;
  tooltip.style.display = "block";
  tooltip.style.left = `${e.offsetX}px`;
  tooltip.style.top = `${-20}px`;
  tooltip.innerText = getTimeFormat(time);
});

progressBar.addEventListener("mouseleave", function () {
  tooltip.style.display = "none";
});

// dom karaoke
var btnKaraoke = document.querySelector(".btn-Karaoke");
var lyricEL = document.querySelector(".lyric");
function clickKaraoke() {
  lyricEL.style.display = "block";
  setTimeout(() => {
    lyricEL.style.transform = "translate(0, 0)";
  }, 100);
}
function backKaraoke() {
  lyricEL.style.display = "block";
  lyricEL.style.transform = "translate(0, 1000px)";
  setTimeout(() => {
    lyricEL.style.display = "none";
  }, 100);
}
