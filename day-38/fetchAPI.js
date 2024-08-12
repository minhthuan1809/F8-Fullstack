const userEl = document.querySelector(".container .list");
const foundEl = document.querySelector("#search");
const modal = document.querySelector(".modal");

let counts = 0;
let dataDele = 0;
let cachedData = null;
const url = "http://localhost:3000/data";

class User {
  constructor(id, supperId, name) {
    this.id = id;
    this.supperId = supperId;
    this.name = name;
  }

  getId() {
    return this.id;
  }

  getName() {
    return this.name;
  }
  getSupperId() {
    return this.supperId;
  }
}

function fetchData() {
  dataDele = 0;
  return fetch(url, {
    method: "GET",
    headers: {
      "x-api-key": "f8",
    },
  }).then((response) => response.json());
}

function getDelete(userId) {
  fetch(`${url}/${userId}`, {
    method: "DELETE",
  })
    .then((response) => {
      if (response.ok) {
        fetchData().then((data) => {
          cachedData = data;
          render(cachedData);
        });
      } else {
        console.error("Failed to delete");
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

function render(data) {
  userEl.innerHTML = "";
  boxCompleted.innerHTML = "";
  counts = 0;

  const userObjects = data.map(
    (user) => new User(user.id, user.supperId, user.name)
  );
  userObjects.forEach((user) => {
    if (user.getSupperId() === 1) {
      userEl.innerHTML += `
        <div class="item">
          <div class="text">
            <span>${user.getName()}</span>
          </div>
          <div class="btn">
            <button class="btn--item delete" data-number="${user.getId()}"><ion-icon name="trash"></ion-icon></button>
            <button class="btn--item edit"><ion-icon name="create"></ion-icon></button>
            <button class="btn--item add-completed"><ion-icon name="cloud-done"></ion-icon></button>
          </div>
        </div>
      `;
    } else if (user.getSupperId() === 2) {
      boxCompleted.innerHTML += `
        <div class="item">
          <div class="text">
            <span>${user.getName()}</span>
          </div>
          <div class="btn">
            <button class="btn--item__conpleted delete" data-number="${user.getId()}"><ion-icon name="trash"></ion-icon></button>
            <button class="btn--item__conpleted edit"><ion-icon name="create"></ion-icon></button>
            <button class="btn--item__conpleted remove"><ion-icon name="cloud-done"></ion-icon></button>
          </div>
        </div>
      `;
      if (numberEl) {
        numberEl.innerText = ++counts;
      }
    }
  });

  addDeleteEventListeners();
  addEditEventListeners();
}

function getFound(data) {
  const searchTerm = foundEl.value.trim().toLowerCase();
  userEl.innerHTML = "";
  boxCompleted.innerHTML = "";
  counts = 0;

  const userObjects = data.map(
    (user) => new User(user.id, user.supperId, user.name)
  );
  userObjects.forEach((user) => {
    if (user.getName().toLowerCase().includes(searchTerm)) {
      if (user.getSupperId() === 1) {
        userEl.innerHTML += `
          <div class="item">
            <div class="text">
              <span>${user.getName()}</span>
            </div>
            <div class="btn">
              <button class="btn--item delete" data-number="${user.getId()}"><ion-icon name="trash"></ion-icon></button>
              <button class="btn--item edit"><ion-icon name="create"></ion-icon></button>
              <button class="btn--item add-completed"><ion-icon name="cloud-done"></ion-icon></button>
            </div>
          </div>
        `;
      } else if (user.getSupperId() === 2) {
        boxCompleted.innerHTML += `
          <div class="item">
            <div class="text">
              <span>${user.getName()}</span>
            </div>
            <div class="btn">
              <button class="btn--item__conpleted delete" data-number="${user.getId()}"><ion-icon name="trash"></ion-icon></button>
              <button class="btn--item__conpleted edit"><ion-icon name="create"></ion-icon></button>
              <button class="btn--item__conpleted remove"><ion-icon name="cloud-done"></ion-icon></button>
            </div>
          </div>
        `;
        numberEl.innerText = ++counts;
      }
    }
  });
}

function getEdit(userId, newName) {
  fetch(`${url}/${userId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": "f8",
    },
    body: JSON.stringify({ name: newName }),
  })
    .then((response) => {
      if (response.ok) {
        // Chỉnh sửa thành công, cập nhật lại giao diện
        fetchData().then((data) => {
          cachedData = data;
          render(cachedData);
        });
      } else {
        // Chỉnh sửa không thành công, hiển thị thông báo lỗi
        console.error("Failed to update");
      }
    })
    .catch((error) => {
      // Xử lý lỗi
      console.error("Error:", error);
    });
}

function addDeleteEventListeners() {
  const deleteButtons = document.querySelectorAll(".delete");
  deleteButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const dataNumber = event.currentTarget.dataset.number;
      getDelete(dataNumber);
    });
  });
}

function addEditEventListeners() {
  const editButtons = document.querySelectorAll(".edit");
  editButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const userId = event.currentTarget
        .closest(".item")
        .querySelector(".delete").dataset.number;
      const userName = event.currentTarget
        .closest(".item")
        .querySelector(".text span").textContent;
      modal.style.display = "block";
      modal.innerHTML = `
        <span class="overlay" onclick="getCancel()"></span>
        <div class="form">
          <input type="text" id="editInput" value="${userName}">
          <div class="line"></div>
          <div class="btn--modal">
            <button class="btn--modal__add" onclick="handleEdit(${userId})">Save</button>
            <button class="btn--modal__Cancel" onclick="getCancel()">Cancel</button>
          </div>
        </div>
      `;
    });
  });
}

function handleEdit(userId) {
  const editInput = document.getElementById("editInput");
  const newName = editInput.value.trim();
  if (newName !== "") {
    getEdit(userId, newName);
    getCancel();
  }
}

function getCancel() {
  modal.style.display = "none";
}

foundEl.addEventListener("input", () => {
  if (foundEl.value.trim() === "") {
    if (cachedData) {
      render(cachedData);
    } else {
      fetchData()
        .then((data) => {
          cachedData = data;
          render(cachedData);
        })
        .catch((err) => {
          console.error("Error:", err);
        });
    }
  } else {
    if (cachedData) {
      getFound(cachedData);
    } else {
      fetchData()
        .then((data) => {
          cachedData = data;
          getFound(cachedData);
        })
        .catch((err) => {
          console.error("Error:", err);
        });
    }
  }
});

// Khởi chạy lần đầu tiên
fetchData()
  .then((data) => {
    cachedData = data;
    render(cachedData);
  })
  .catch((err) => {
    console.error("Error:", err);
  });
