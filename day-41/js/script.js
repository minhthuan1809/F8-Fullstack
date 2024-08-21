var btnStart = document.querySelector(".btn--start");
var coverBtn = document.querySelector(".cover--btn");
var coverCountdown = document.querySelector(".cover-countdown");
var containerQuiz = document.querySelector(".container-quiz");
var countdownElement = document.querySelector("#countdown");
var questionTimerElement = document.querySelector("#question-timer");
var resultContainer = document.querySelector(".result-container"); // Thêm phần tử hiển thị kết quả
var url = "https://c7vf9z-8080.csb.app";
// var url = "http://localhost:3000";
var questionIndex = 0;
var questions = [];
var score = 0; // Điểm khởi đầu
var correctStreak = 0; // Đếm số câu trả lời đúng liên tiếp
var incorrectStreak = 0; // Đếm số câu trả lời sai liên tiếp
var timerIntervalId;
var questionTimeoutId;

async function connectApi() {
  try {
    const response = await fetch(`${url}/data`);

    if (response.ok) {
      questions = await response.json();
      console.log(questions);

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
  let answered = false; // Biến kiểm tra xem câu hỏi đã được trả lời chưa
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

  // Thêm sự kiện click cho các nút câu trả lời
  document.querySelectorAll(".answer-btn").forEach((button) => {
    button.addEventListener("click", (e) => {
      if (!answered) {
        answered = true; // Đánh dấu là đã trả lời
        const isCorrect = e.target.getAttribute("data-correct") === "true";
        if (isCorrect) {
          e.target.classList.add("bg-green-500");
          correctStreak++;

          // Điều chỉnh điểm khi trả lời đúng
          if (incorrectStreak >= 3) {
            score += 50; // Cộng 50 điểm nếu đã sai 3 câu trước đó
          } else if (correctStreak > 3) {
            score += 150;
          } else {
            score += 100;
          }
          incorrectStreak = 0; // Reset chuỗi câu sai liên tiếp
        } else {
          e.target.classList.add("bg-red-500");
          correctStreak = 0; // Reset chuỗi câu đúng liên tiếp
          incorrectStreak++;

          // Tìm và hiển thị câu trả lời đúng
          document
            .querySelector('[data-correct="true"]')
            .classList.add("bg-green-500");
        }
        // Cập nhật điểm trên giao diện
        document.querySelector(
          ".absolute .text-xl:nth-child(3)"
        ).textContent = `Điểm: ${score}`;

        // Vô hiệu hóa các nút sau khi chọn
        document.querySelectorAll(".answer-btn").forEach((btn) => {
          btn.disabled = true;
        });

        // Dừng đếm thời gian nếu đã trả lời
        clearInterval(timerIntervalId);
        clearTimeout(questionTimeoutId);

        // Dừng lại 1 giây trước khi chuyển câu hỏi mới hoặc kết thúc
        setTimeout(() => {
          if (questionIndex + 1 >= 10) {
            showResult(); // Hiển thị kết quả tổng điểm sau 10 câu
          } else {
            nextQuestion();
          }
        }, 1000); // Dừng 1 giây trước khi chuyển câu hỏi mới
      }
    });
  });

  // Đặt timeout để kiểm tra nếu hết thời gian mà chưa trả lời
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
      correctStreak = 0; // Reset chuỗi câu đúng liên tiếp

      // Dừng đếm thời gian
      clearInterval(timerIntervalId);

      setTimeout(() => {
        if (questionIndex + 1 >= 10) {
          showResult(); // Hiển thị kết quả tổng điểm sau 10 câu
        } else {
          nextQuestion();
        }
      }, 1000); // Dừng 1 giây trước khi chuyển câu hỏi mới
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
    location.reload(); // Tải lại trang hoặc chuyển hướng theo nhu cầu của bạn
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
