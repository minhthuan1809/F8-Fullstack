/*
API = Application Programming Interface
Khi làm việc web API ==> Học HTTP

Client (Front-end) ==> API ==> Server (Back-end)

Để giao tiếp giữa Client và Server ==> Có 2 cách: 
- XHR
- Fetch

Chuẩn bị server: 
- Tìm các dịch vụ Fake
- Cài thư viện ==> Tự fake trên máy local

HTTP REQUEST
- URL
- METHOD
- HEADER
- BODY

HTTP RESPONSE
- BODY
- STATUS (Code, Text)
- HEADER

POST, PUT, PATCH
- Body
- Header Content-Type
+ application/json
+ application/x-www-form-urlencoded (name=Hoang+An&email=hoangan.web@gmail.com)
+ multipart/form-data (Text, File)
*/

const serverApi = `http://localhost:3000`;

const getUsers = async (query = {}) => {
  try {
    let queryString = new URLSearchParams(query).toString();
    console.log(queryString);
    if (queryString) {
      queryString = "?" + queryString;
    }
    const response = await fetch(`${serverApi}/users${queryString}`);
    if (!response.ok) {
      throw new Error("Fetch to failed");
    }
    const users = await response.json();
    render(users);

    /// tính số trang = tổng bản ghi / số bản ghi  của 1 trang
    const totalPage = Math.ceil(
      response.headers.get("x-total-count") / query._limit
    );
    console.log(totalPage);

    renderPagination(totalPage);
  } catch (e) {
    console.log(e);
  }
};
const getUser = async (id) => {
  try {
    const response = await fetch(`${serverApi}/users/${id}`);
    if (!response.ok) {
      throw new Error("Fetch to failed");
    }
    return response.json();
  } catch {
    return false;
  }
};
// getUser(1);
const addUser = async (data) => {
  try {
    const response = await fetch(`${serverApi}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response.ok;
  } catch {
    return false;
  }
};
const updateUser = async (id, data) => {
  try {
    const response = await fetch(`${serverApi}/users/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response.ok;
  } catch {
    return false;
  }
};
const deleteUser = async (id) => {
  try {
    const response = await fetch(`${serverApi}/users/${id}`, {
      method: "DELETE",
    });
    return response.ok;
  } catch {
    return false;
  }
};
const render = (users) => {
  const tbody = document.querySelector("table tbody");
  tbody.innerHTML = `${users
    .map(({ id, name, email, status }, index) => {
      return `<tr>
            <td>${index + 1}</td>
            <td>${name}</td>
            <td>${email}</td>
            <td><span class="badge bg-${
              status === "active" ? "success" : "warning"
            }">${
        status === "active" ? "Kích hoạt" : "Chưa kích hoạt"
      }</span></td>
            <td>
              <button class="btn btn-warning btn-sm" data-id="${id}" data-action="update">Sửa</button>
            </td>
            <td>
              <button class=" btn btn-danger btn-sm " data-action="delete">Xóa</button>
            </td>
          </tr>`;
    })
    .join("")}`;
};
function renderPagination(totalPage) {
  const paginationView = document.querySelector(".paginnation-view");
  paginationView.innerHTML = `  <ul class="pagination d-flex justify-content-end">
                <li class="page-item"><a class="page-link" href="#">Previous</a></li>
              ${Array.from(Array(totalPage).keys())
                .map(
                  (_, index) =>
                    `  <li class="page-item"><a class="page-link" href="#">${
                      index + 1
                    }</a></li>`
                )
                .join("")}
                <li class="page-item"><a class="page-link" href="#">Next</a></li>
            </ul>`;
}
const handleAddUser = () => {
  const form = document.querySelector(".update-form");
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(form));
    const id = form.dataset.id;
    if (!id) {
      const status = await addUser(formData);
      if (status) {
        //Thêm thành công
        getUsers();
        form.reset();
      }
    } else {
      const status = await updateUser(id, formData);
      if (status) {
        getUsers();
        switchFormAdd();
      }
    }
  });
};
const switchFormAdd = () => {
  const form = document.querySelector(".update-form");
  form.reset();
  const h3 = form.querySelector("h3");
  h3.innerText = `Thêm người dùng`;
  delete form.dataset.id;
};
const handleUpdateUser = () => {
  const tbody = document.querySelector("table tbody");
  tbody.addEventListener("click", async ({ target }) => {
    const { action, id } = target.dataset;
    if (action === "update") {
      const user = await getUser(id);
      if (!user) {
        alert("Đã có lỗi xảy ra. Vui lòng thử lại sau");
        return;
      }
      changeFormUpdate(user);
    }
  });
};
const changeFormUpdate = (user) => {
  const form = document.querySelector(".update-form");
  form.dataset.id = user.id;
  const h3 = form.querySelector("h3");
  h3.innerText = `Cập nhật người dùng`;
  form.elements.name.value = user.name;
  form.elements.email.value = user.email;
  form.elements.status.value = user.status;
};

const handleDeleteUser = (id) => {
  const tbody = document.querySelector("tbody");
  tbody.addEventListener("click", async ({ target }) => {
    const { action, id } = target.dataset;
    console.log(target);

    if (action === "delete" && confirm("chắc chưa ?")) {
      console.log(id);

      const status = await deleteUser(id);
      if (!status) {
        alert("đã có lỗi");
        return;
      }
      getUsers();
    }
  });
};
const handleSearch = () => {
  const keywordEl = document.querySelector(".keyword");
  keywordEl.addEventListener("input", (e) => {
    const keyword = e.target.value;
    getUsers({ q: keyword });
  });
};
const handleSort = () => {
  var btnSortEl = document.querySelector(".btn-sort");

  const allowed = ["latest", "oldest"];
  btnSortEl.addEventListener("click", (e) => {
    const sortValue = e.target.dataset.sort;
    console.log(e.target.dataset);

    if (allowed.includes(sortValue)) {
      getUsers({
        _sort: "id",
        _order: sortValue === "latest" ? "desc" : "asc",
      });
    }
    const btnActive = document.querySelector(".active");
    if (btnActive) {
      btnActive.classList.remove("active");
    }
    e.target.classList.add("active");
  });
};

const query = {
  _sort: "id",
  _limit: 3,
  _page: 1,
};
getUsers(query);
handleSort();
handleSearch();
handleAddUser();
handleUpdateUser();
handleDeleteUser();
