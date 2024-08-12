/*
APi (application programing interface )
khi làm việc web API == > học http
client (Front-end) ==> API ==> Sever (back-end)
- để giao tiếp giữa client với sever ==> có 2 cách
+ XHR
+ Fetch

Chuẩn bị server
- Tìm các dịch dụ Fake
- Cài Thư Viện ==> Tự fake trên máy loca

HTTP REQUEST
- url
- mmethod
- header
- body
HTTP RESPONSE
- BODY
- STATUS (CODE,TEXT)
- HEADER
*/

const url = "http://localhost:3000/users";
const usersPromise = fetch(url, {
  method: "GET",
  header: {
    "x-api-key": "ahihi",
  },
});

function main() {
  getApi(getRender);
}

function getApi(callback) {
  usersPromise
    .then((response) => {
      return response.json();
    })
    .then(callback);
}

function getRender(e) {
  var html = e.map((value) => {
    return `<tr>
                    <td>${value.id}</td>
                    <td>${value.name}</td>
                    <td>${value.Gmail}</td>
                    <td><span class="badge bg-${
                      value.status === "active" ? "success" : "warning"
                    }">${
      value.status === "active" ? "Success" : "warning"
    }</span></td>
                    <td>
                        <button class="btn btn-warning btn-sm edit" data--id = "${
                          value.id
                        }" >Sửa</button>
                    </td>
                    <td>
                        <button class="btn btn-danger btn-sm" >xóa</button>
                    </td>
            </tr>`;
  });

  document.querySelector(".table-tbody").innerHTML = html.join("");
}

const addUser = async (data) => {
  const response = await fetch(`${url}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (response.ok) {
    console.log("thêm Thành công");
    main();
  } else {
    console.log("lỗi");
  }
};

var nameEl = document.querySelector(".name");
var emailEl = document.querySelector(".email");
var statusEl = document.querySelector('select[name="status"]');

var form = document.querySelector(".update-form");
form.addEventListener("submit", (e) => {
  e.preventDefault;
  console.log("đang nhấn ");
  addUser({
    name: nameEl.value,
    Gmail: emailEl.value,
    status: statusEl.value,
  });
  form.reset();
});

var getUser = async (id) => {
  try {
    const response = await fetch(`${url}/${id}`);
    if (!response.ok) {
      throw new Error("fecth to failed");
    }
    const users = await response.json();
    console.log(users);
  } catch {
    return false;
  }
};
function handleUpdateUser() {
  const tbody = document.querySelector("table tbody");
  tbody.addEventListener("click", async (e) => {
    const id = e.target.dataset;
    console.log(action);
  });
}

const changeFormUpdate = (user) => {
  const form = document.querySelector(".update-form");
  form.dataset.id = user.id;
  const h3 = form.querySelector("h3");
  h3.innerText = ` Cập nhật người dùng`;
  form. 
};
// getUser(1);
main();
handleUpdateUser();
