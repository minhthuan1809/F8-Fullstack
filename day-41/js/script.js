var btnStart = document.querySelector(".btn--start");
var coverBtn = document.querySelector(".cover--btn");
var coverCountdown = document.querySelector(".cover-countdown");
var containerQuiz = document.querySelector(".container-quiz");
var countdownElement = document.querySelector("#countdown");
var questionTimerElement = document.querySelector("#question-timer");
var resultContainer = document.querySelector(".result-container");
var url = "https://c7vf9z-8080.csb.app";
var questionIndex = 0;
var questions = [];
var score = 0;
var correctStreak = 0;
var incorrectStreak = 0;
var timerIntervalId;
var questionTimeoutId;

async function connectApi() {
  try {
    const response = await fetch(`${url}/data`);

    if (response.ok) {
      questions = await response.json();

      // Chỉ lấy 10 câu hỏi đầu tiên
      if (questions.length > 10) {
        questions = questions.slice(0, 10);
      }

      render(questions[questionIndex], questionIndex + 1, questions.length);
      startTimer();
    } else {
      throw new Error("Lỗi kết nối");
    }
  } catch (e) {
    console.log("Lỗi bắt được:", e);
  }
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function render(question, num, totalQuestions) {
  let answered = false;
  const answers = [
    { key: "a", text: question.a, isCorrect: question.correct === "a" },
    { key: "b", text: question.b, isCorrect: question.correct === "b" },
    { key: "c", text: question.c, isCorrect: question.correct === "c" },
    { key: "d", text: question.d, isCorrect: question.correct === "d" },
  ];

  const shuffledAnswers = shuffleArray(answers);

  const html = `
    <div class="absolute top-0 left-0 w-full p-4 flex justify-between items-center bg-black bg-opacity-70">
        <span class="text-xl">${num}/${totalQuestions}</span>
        <span class="text-xl">Thời gian: <span class="text-xl run--time__question">10</span> giây</span>
        <span class="text-xl">Điểm: ${score}</span>
    </div>
    <div class="w-full text-center mb-8">
        <h1 class="text-3xl font-bold bg-black bg-opacity-50 p-4 inline-block">${
          question.question
        }</h1>
    </div>
    <div class="grid grid-cols-2 gap-4 w-3/4 mx-auto">
        ${shuffledAnswers
          .map(
            (answer) => `
          <button class="bg-black bg-opacity-50 p-6 rounded-lg transition answer-btn" data-correct="${answer.isCorrect}">
             ${answer.text}
          </button>
        `
          )
          .join("")}
    </div>`;

  containerQuiz.innerHTML = html;

  document.querySelectorAll(".answer-btn").forEach((button) => {
    button.addEventListener("click", (e) => {
      if (!answered) {
        answered = true;
        const isCorrect = e.target.getAttribute("data-correct") === "true";
        if (isCorrect) {
          e.target.classList.add("bg-green-500");
          correctStreak++;

          if (incorrectStreak >= 3) {
            score += 50;
          } else if (correctStreak > 3) {
            score += 150;
          } else {
            score += 100;
          }
          incorrectStreak = 0;
        } else {
          e.target.classList.add("bg-red-500");
          correctStreak = 0;
          incorrectStreak++;

          document
            .querySelector('[data-correct="true"]')
            .classList.add("bg-green-500");
        }

        document.querySelector(
          ".absolute .text-xl:nth-child(3)"
        ).textContent = `Điểm: ${score}`;

        document.querySelectorAll(".answer-btn").forEach((btn) => {
          btn.disabled = true;
        });

        clearInterval(timerIntervalId);
        clearTimeout(questionTimeoutId);

        setTimeout(() => {
          if (questionIndex + 1 >= questions.length) {
            showResult();
          } else {
            nextQuestion();
          }
        }, 1000);
      }
    });
  });

  questionTimeoutId = setTimeout(() => {
    if (!answered) {
      answered = true;
      document
        .querySelector('[data-correct="true"]')
        .classList.add("bg-green-500");
      document.querySelectorAll(".answer-btn").forEach((btn) => {
        btn.disabled = true;
      });

      incorrectStreak++;
      correctStreak = 0;

      clearInterval(timerIntervalId);

      setTimeout(() => {
        if (questionIndex + 1 >= questions.length) {
          showResult();
        } else {
          nextQuestion();
        }
      }, 1000);
    }
  }, 10000);
}

function nextQuestion() {
  questionIndex++;
  startTimer();
  render(questions[questionIndex], questionIndex + 1, questions.length);
}

function startTimer() {
  let timeLeft = 10;
  document.querySelector(".run--time__question").textContent = `${timeLeft}`;

  timerIntervalId = setInterval(() => {
    timeLeft--;
    document.querySelector(".run--time__question").textContent = `${timeLeft}`;

    if (timeLeft <= 0) {
      clearInterval(timerIntervalId);
    }
  }, 1000);
}

function showResult() {
  containerQuiz.classList.add("hidden");
  resultContainer.classList.remove("hidden");
  resultContainer.innerHTML = `
    <div class="text-center">
      <h2 class="text-4xl font-bold mb-4">Kết quả của bạn</h2>
      <p class="text-2xl mb-6">Tổng điểm: ${score}</p>
      <button class="bg-blue-500 text-white px-6 py-3 rounded-lg mr-4 btn--restart">Chơi lại</button>
      <button class="bg-gray-500 text-white px-6 py-3 rounded-lg btn--exit">Thoát</button>
    </div>
  `;

  document.querySelector(".btn--restart").addEventListener("click", () => {
    resetQuiz();
  });

  document.querySelector(".btn--exit").addEventListener("click", () => {
    location.reload();
  });
}

function resetQuiz() {
  questionIndex = 0;
  score = 0;
  correctStreak = 0;
  incorrectStreak = 0;
  resultContainer.classList.add("hidden");
  containerQuiz.classList.remove("hidden");
  startTimer();
  render(questions[questionIndex], questionIndex + 1, questions.length);
}

btnStart.addEventListener("click", () => {
  coverBtn.classList.add("hidden");
  coverCountdown.classList.remove("hidden");
  startRunTime(3);
});

const startRunTime = (i) => {
  countdownElement.textContent = i;
  const countdownInterval = setInterval(() => {
    i--;
    countdownElement.textContent = i;
    if (i <= 0) {
      clearInterval(countdownInterval);
      coverCountdown.classList.add("hidden");
      containerQuiz.classList.remove("hidden");
      connectApi();
    }
  }, 1000);
};
