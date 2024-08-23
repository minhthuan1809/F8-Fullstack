import { requestlogin } from "./auth.js";
console.log(requestlogin);

let htmlLogin = `<div class="bg-gray-100 flex items-center justify-center h-screen">
            <div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <div class="mb-6">
                    <ul class="flex justify-center">
                        <li class="w-1/2">
                            <button
                                class="w-full py-2 text-center font-semibold text-gray-700 border-b-2 border-indigo-500 focus:outline-none"
                                onclick="showLogin()">Login</button>
                        </li>
                        <li class="w-1/2">
                            <button class="w-full py-2 text-center font-semibold text-gray-700 focus:outline-none"
                                onclick="showRegister()">Register</button>
                        </li>
                    </ul>
                </div>
                <div id="login-form">
                    <h2 class="text-2xl font-bold text-center mb-4">Login</h2>
                    <form id="loginForm">
                        <input type="email" id="loginEmail" placeholder="Email"
                            class="UserName w-full p-3 mb-4 bg-gray-100 border border-gray-300 rounded-lg" required>
                        <input type="password" id="loginPassword" placeholder="Password"
                            class=" password w-full p-3 mb-4 bg-gray-100 border border-gray-300 rounded-lg" required>
                        <button
                            class="w-full bg-indigo-500 text-white py-2 rounded-lg hover:bg-indigo-600 transition">Login</button>
                    </form>
                </div>
                <div id="register-form" class="hidden">
                    <h2 class="text-2xl font-bold text-center mb-4">Register</h2>
                    <form id="registerForm">
                        <input type="text" id="registerUsername" placeholder="Username"
                            class="w-full p-3 mb-4 bg-gray-100 border border-gray-300 rounded-lg" required>
                        <input type="email" id="registerEmail" placeholder="Email"
                            class="w-full p-3 mb-4 bg-gray-100 border border-gray-300 rounded-lg" required>
                        <input type="password" id="registerPassword" placeholder="Password"
                            class="w-full p-3 mb-4 bg-gray-100 border border-gray-300 rounded-lg" required>
                        <button type="submit"
                            class="w-full bg-indigo-500 text-white py-2 rounded-lg hover:bg-indigo-600 transition">Register</button>
                    </form>
                </div>
            </div>
        </div>`;

let html = `<header class="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6 shadow-lg">
    <div class="container mx-auto flex justify-between items-center">
        <div>
            <h1 class="text-4xl font-extrabold">My Blog</h1>
            <p class="mt-2 text-lg font-light">Chia sẻ kiến thức, kinh nghiệm và câu chuyện cuộc sống</p>
        </div>

        <div class="btn">
           <button
               class="bg-red-500 text-white font-semibold px-5 py-2 rounded-md hover:bg-red-600 transition" id="logoutButton">
               Đăng xuất
            </button>
        </div>
    </div>
</header>
<main class="container mx-auto p-6">
    <article class="bg-white p-8 rounded-lg shadow-xl mb-8">
        <h2 class="text-3xl font-bold mb-4">Bài viết đầu tiên</h2>
        <p class="text-gray-500 mb-6">Ngày đăng: 23/08/2024</p>
        <p class="text-gray-700 leading-relaxed text-lg">
            Đây là nội dung của bài viết đầu tiên. Trong bài viết này, chúng ta sẽ cùng tìm hiểu về cách sử dụng
            Tailwind CSS để tạo giao diện blog đẹp và chuyên nghiệp.
        </p>
    </article>

    <div class="flex justify-center">
        <a href="#" class="px-5 py-3 mx-2 bg-blue-600 text-white font-semibold rounded-full shadow-md hover:bg-blue-700 transition">1</a>
        <a href="#" class="px-5 py-3 mx-2 bg-gray-300 text-gray-700 font-semibold rounded-full shadow-md hover:bg-gray-400 transition">2</a>
        <a href="#" class="px-5 py-3 mx-2 bg-gray-300 text-gray-700 font-semibold rounded-full shadow-md hover:bg-gray-400 transition">3</a>
    </div>
</main>

<footer class="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6 mt-8">
    <div class="container mx-auto text-center">
        <p class="text-lg">&copy; 2024 My Blog. All rights reserved.</p>
    </div>
</footer>
`;
const userNameEl = document.querySelector(".UserName");
const passEl = document.querySelector(".password");

function showLogin() {
  document.getElementById("login-form").classList.remove("hidden");
  document.getElementById("register-form").classList.add("hidden");
}

function showRegister() {
  document.getElementById("register-form").classList.remove("hidden");
  document.getElementById("login-form").classList.add("hidden");
}

const handleLogin = async (e) => {
  e.preventDefault();

  const dataLogin = {
    email: userNameEl.value.trim(),
    password: passEl.value.trim(),
  };
  console.log(dataLogin);

  const response = await requestlogin(dataLogin);
  console.log(response);

  if (response) {
    console.log(response);

    localStorage.setItem("user_token", JSON.stringify(response.data));
    console.log(response.message);
    if (response.code === 200) {
      document.querySelector("body").innerHTML = html;
      document.getElementById("logoutButton").addEventListener("click", logout);
    }
  } else {
    console.log("Đăng nhập thất bại");
    alert("Đăng nhập thất bại, vui lòng kiểm tra lại thông tin.");
  }
};

document.getElementById("login-form").addEventListener("submit", handleLogin);

// Hàm đăng xuất
const logout = () => {
  localStorage.removeItem("user_token");
  document.querySelector("body").innerHTML = htmlLogin;

  document.getElementById("login-form").addEventListener("submit", handleLogin);
};

// kiểm tra login
if (localStorage.getItem("user_token")) {
  document.querySelector("body").innerHTML = html;
  document.getElementById("logoutButton").addEventListener("click", logout);
}
