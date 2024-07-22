const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const audioEl = $("#audio");
const karaokeInner = $(".karaoke__inner");
let requestId = null;

audioEl.addEventListener("play", function () {
  requestId = requestAnimationFrame(handleKaraoke);
});
audioEl.addEventListener("pause", function () {
  cancelAnimationFrame(requestId);
});
const currentLyric = [];
let currentIndex = -1;
function handleKaraoke(e) {
  var currentTime = audioEl.currentTime * 1000;
  fillColorWord(currentTime);
  const lineIndex = lyric.findIndex(function (lyric) {
    var words = lyric.words;
    const firstWord = words[0];
    const lastWord = words[words.length - 1];
    return (
      firstWord.startTime <= currentTime && lastWord.endTime >= currentTime
    );
  });
  if (lineIndex != -1 && currentIndex != lineIndex) {
    const currentLine = getSentence(lineIndex);
    const nextLine = getSentence(lineIndex + 1);
    if (lineIndex === 0) {
      karaokeInner.innerHTML = `<p>${currentLine}</p>
      <p>${nextLine}</p>`;
    } else {
      if (lineIndex % 2 === 0) {
        nextSentence(karaokeInner.children[0], nextLine);
      } else {
        nextSentence(karaokeInner.children[1], nextLine);
      }
    }
    currentIndex = lineIndex;
  }
  requestId = requestAnimationFrame(handleKaraoke);
}
function getSentence(index) {
  return lyric[index].words
    .map(
      (word) => `
        <span class="word" data-startTime=${word.startTime} data-endTime=${word.endTime}>${word.data}
          <span>${word.data}</span>
        </span>
        `
    )
    .join(" ");
}
function fillColorWord(currentTime) {
  var wordsList = karaokeInner.querySelectorAll(".word");

  wordsList.forEach((wordEL) => {
    var startTime = wordEL.getAttribute("data-startTime");
    var endTime = wordEL.getAttribute("data-endTime");
    console.log("startTime", wordEL);
    if (currentTime >= startTime && currentTime <= endTime) {
      var rate = ((currentTime - startTime) / (endTime - startTime)) * 100;
      wordEL.children[0].style.width = `${rate}%`;
    }
    if (currentTime > endTime) {
      wordEL.children[0].style.width = `100%`;
    }
  });
}
function nextSentence(element, sentence) {
  // element: Dong muon an de hien thi tiep
  element.style.transition = "opacity 0.5s linear";
  element.style.opacity = 0;
  setTimeout(function () {
    element.innerHTML = sentence;
    element.style.opacity = 1;
  }, 600);
  // sentence: Cau tiep theo
}

//web component, custom El , shadow dom
