var url = "http://localhost:3000";
const container = document.querySelector(".container");
async function getMain() {
  const response = await fetch(`${url}/data`);
  try {
    if (!response.ok) {
      throw new Error(`Lỗi: ${response.status}`);
    }
    const json = await response.json();
    getRender(json);
  } catch (err) {
    console.log(err);
  }
}

function getRender(value) {
  // show data
  document.querySelector(".list").innerHTML = "";
  document.querySelector(".box--conpleted").innerHTML = "";
  var count = 0;
  value.map((e) => {
    if (e.supperId === 1) {
      var _html = `<div class="item">
            <div class="text">
              <span>${e.name}</span>
            </div>
            <div class="btn">
              <button class="btn--item delete" data-number="${e.id}"><ion-icon name="trash"></ion-icon></button>
              <button class="btn--item edit" data-edit="${e.id}"><ion-icon name="create"></ion-icon></button>
              <button class="btn--item add-completed"><ion-icon name="cloud-done"></ion-icon></button>
            </div>
          </div>`;
      document.querySelector(".list").innerHTML += _html;
    } else if (e.supperId === 2) {
      var htmls = `    <div class="item">
            <div class="text">
              <span>${e.name}</span>
            </div>
            <div class="btn">
              <button class="btn--item__conpleted delete" data-number="${e.id}"><ion-icon name="trash"></ion-icon></button>
              <button class="btn--item__conpleted edit" data-edit="${e.id}"><ion-icon name="create"></ion-icon></button>
              <button class="btn--item__conpleted remove" data-remove="${e.id}"><ion-icon name="cloud-done"></ion-icon></button>
            </div>
          </div>`;
      document.querySelector(".number").innerText = ++count;
      document.querySelector(".box--conpleted").innerHTML += htmls;
    }
  });
  getDelete();
  getRemove();
}

function addData() {
  // add new data
  var inputEl = document.querySelector(".list--add");
  var btnAdd = document.querySelector(".btn--modal__add");
  btnAdd.addEventListener("click", () => {
    var data = {
      supperId: 1,
      name: inputEl.value,
    };
    console.log("Nội dung input:", data);
    getCreate(data);
  });
}

async function getCreate(_data) {
  // add new data
  const response = await fetch(`${url}/data`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(_data),
  });
  if (response.ok) {
    console.log("thêm Thành công");
    getMain();
    getCancel();
  } else {
    console.log("lỗi");
  }
}
function getDelete() {
  // delete data
  async function deleteItem(dataNumber) {
    try {
      const response = await fetch(`${url}/data/${dataNumber}`, {
        method: "DELETE",
      });

      if (response.ok) {
        console.log("Đã xóa thành công");
        getMain(); // Cập nhật lại danh sách sau khi xóa
      } else {
        console.log(`Không thể xóa: Lỗi ${response.status}`);
      }
    } catch (err) {
      console.error("Đã xảy ra lỗi:", err);
    }
  }
  var removeEl = document.querySelectorAll(".delete");
  removeEl.forEach((value) => {
    value.addEventListener("click", (e) => {
      var dataNumbber = e.target.getAttribute("data-number");
      deleteItem(dataNumbber);
    });
  });
}

//tìm kiếm
var foundEl = document.querySelector("#search");
foundEl.addEventListener("input", (e) => {
  if (foundEl.value.trim() === "") {
    getMain();
  } else {
    getFound(foundEl.value);
  }
});
function getFound(keyword) {
  fetch(`${url}/data`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Lỗi: ${response.status}`);
      }
      return response.json();
    })
    .then((json) => {
      const filteredData = json.filter((item) =>
        item.name.toLowerCase().includes(keyword.toLowerCase())
      );
      getRender(filteredData);
    })
    .catch((err) => {
      console.log(err);
    });
}
//chuyển chỗ
function getRemove() {
  const remove = document.querySelectorAll(".remove");
  remove.forEach((value) => {
    console.log(remove);

    value.addEventListener("click", (e) => {
      var dataRemove = e.target.getAttribute("data-remove");
      console.log(dataRemove);
    });
  });
}
// thực thi
getMain();
