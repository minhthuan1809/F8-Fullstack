/*
Authentication - Authorization
- Authentication : đăng nhập => trả về thông tin 
- Authorization : Kiểm tra quyền hạn => Trả về thông tin 
*/
//   https://fakeapi.platzi.com/en/rest/auth-jwt/

import { requestlogin, requestProfile, refreshToken } from "./http.js";
const root = document.querySelector(".root");
console.log("https://fakeapi.platzi.com/en/rest/auth-jwt/");

const render = async () => {
  if (localStorage.getItem("user_token")) {
    const { access_token: accessToken, refresh_token } = JSON.parse(
      localStorage.getItem("user_token")
    );

    root.innerHTML = `
        <div class="profile">
          <h2>Chào mừng bạn đã quay trở lại với f8</h2>
          <ul class="list-unstyled d-flex gap-2">
            <li>Chào mừng bạn : <span class="name"></span></li>
            <li><a href="#">Đăng xuất</a></li>
          </ul>
        </div>`;

    const getProfile = async () => {
      try {
        const profile = await requestProfile(accessToken);
        if (!profile) {
          const newToken = await refreshToken(refresh_token);
          if (!newToken) {
            throw new Error("Lỗi khi làm mới token");
          }
          // Lưu token mới vào localStorage
          localStorage.setItem("user_token", JSON.stringify(newToken));
          await getProfile();
        } else {
          const nameEl = root.querySelector(".profile .name");
          console.log(profile);
          nameEl.innerText = profile.name;
        }
      } catch (e) {
        localStorage.removeItem("user_token");
        console.error(e);
      }
    };

    await getProfile();
    const logoutEl = document.querySelector(".logout");
    if (logoutEl) {
      logoutEl.addEventListener("click", (e) => {
        e.preventDefault();
        localStorage.removeItem("user_token");
        render();
      });
    }
    return;
  }

  root.innerHTML = `
    <h2 class="text-center">Đăng nhập</h2>
    <form action="" class="login">
      <div class="msg"></div>
      <div class="mb-3">
        <label for="">Email</label>
        <input type="email" name="email" class="form-control" placeholder="Email" />
      </div>
      <div class="mb-3">
        <label for="">Mật khẩu</label>
        <input type="password" name="password" class="form-control" placeholder="Password" />
      </div>
      <div class="d-grid">
        <button class="btn btn-primary logout">Đăng nhập</button>
      </div>
    </form>`;
};

const handleLoginFrom = () => {
  root.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (e.target.classList.contains("login")) {
      const msgEl = document.querySelector(".msg");
      msgEl.innerText = ``;
      const dataLogin = Object.fromEntries(new FormData(e.target));
      const btn = e.target.querySelector("button");
      btn.disabled = true;
      btn.innerHTML = `  <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
      <span class="visually-hidden">Loading...</span>`;
      const response = await requestlogin(dataLogin);
      btn.disabled = false;
      btn.innerHTML = ` Đăng nhập `;
      if (!response) {
        msgEl.innerHTML = `<div class = "alert alert-danger text-center" > thông báo lỗi </div>`;
      } else {
        // thành công  ==> lưu vào bộ nhớ trình duyệt
        // chuyển Object ==> json
        localStorage.setItem("user_token", JSON.stringify(response));
        e.target.reset(); // xóa
        render();
      }
    }
  });
};
render();
handleLoginFrom();

/*
trong 1 trang bất kig request nào cần authorization cần phải thực hiện các bước sau

-- lấy token ở lacalStorage hoặc cookie 
- Gọi API cần lấy dữ liệu hoặc các thao tác khác (có truyền token lên)
+ nếu thành công  => trả vveef dữ liệu tương ứng từ api ==> thực hiện update giao diện 
+ thất bại thì gọi api refetch token

++ Thành công : Update token mới vào localStorage ==> Gọi lại Api đã bị failed ở bước trên
++ Thất bại : đăng xuất


request 1 ==> success 
- request 2 ==> failed ==> refresh token ==> request 2
- request 3 ==> failed ==> refresh token ==> request 3
- request 4 ==> failed ==> refresh token ==> request 4

xử lý đang xuất 
- call API đăng xuất do back-end cung cấp ==> lưu token vào black list ở phía back-end
- xóa token ở Storage


xây dựng class/oject httpclient để xử lý http request
*/
