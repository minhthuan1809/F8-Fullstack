const view = document.querySelector(".container");
const url = "https://vqx63q-8080.csb.app";
const modal = document.querySelector(".add");
const cancel = document.querySelector("#cancel");
const loading = document.querySelector(".loadingModal");
const submitForm = document.querySelector("#submitForm"); // Phần tử form submit
const img = document.querySelector("#img");
const nameEL = document.querySelector("#name");
const title = document.querySelector("#title");

let currentPage = 0;
const itemsPerPage = 3;
let data = [];

// Sự kiện submit form
submitForm.addEventListener("click", () => {
  const formData = {
    logo: img.value.trim(),
    name: nameEL.value.trim(),
    content: title.value.trim(),
  };

  if (formData.logo && formData.name && formData.content) {
    getCreate(formData);
  } else {
    console.log("Vui lòng điền đầy đủ thông tin.");
  }
});

// Sự kiện mở modal
modal.addEventListener("click", () => {
  document.querySelector("#modal").classList.remove("hidden");
});

// Sự kiện đóng modal
cancel.addEventListener("click", () => {
  document.querySelector("#modal").classList.add("hidden");
});

document.querySelector("#closeModal").addEventListener("click", () => {
  document.querySelector("#modal").classList.add("hidden");
});

// Kết nối đến API
async function connectApi() {
  try {
    loading.classList.remove("hidden");
    const response = await fetch(`${url}/data`);

    if (response.ok) {
      data = await response.json();
      render();
    } else {
      console.error(`Lỗi HTTP: ${response.status}`);
      throw new Error("Lỗi kết nối");
    }
  } catch (e) {
    console.error("Lỗi bắt được:", e);
  } finally {
    loading.classList.add("hidden");
  }
}

// Hàm render nội dung
function render() {
  const start = currentPage * itemsPerPage;
  const end = start + itemsPerPage;
  const itemsToRender = data.slice(start, end);

  let html = itemsToRender
    .map((e, index) => {
      return `
      <div class="flex justify-center gap-5 items-center mt-10">
        <div class="img w-14 h-14 rounded-full overflow-hidden">
            <img class="w-full h-full object-cover" src="${e.logo}" alt="">
        </div>
        <h1 class="text-2xl">${e.name}</h1>
      </div>
      <div class="content text-center w-2/4 m-auto mt-5">
         ${e.content}
      </div>
      <div class="text-center mt-10">${start + index + 1}</div>
      <div class="line h-0 w-2/4 border-solid border border-black m-auto"></div>
    `;
    })
    .join("");

  view.innerHTML += html;
  currentPage++;
}

// Sự kiện cuộn trong container
view.addEventListener("scroll", () => {
  if (view.scrollTop + view.clientHeight >= view.scrollHeight) {
    if (currentPage * itemsPerPage < data.length) {
      render();
    }
  }
});

// Gọi hàm kết nối API
connectApi();
