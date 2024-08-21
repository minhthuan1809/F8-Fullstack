const view = document.querySelector(".container");
var url = "https://run.mocky.io/v3/39784a30-3db6-4b3e-b851-62c3a27a5b8f";
const modal = document.querySelector(".add");
const cancel = document.querySelector("#cancel");
const loading = document.querySelector(".loadingModal");

let currentPage = 0;
const itemsPerPage = 3;
let data = [];

submitForm.addEventListener("click", () => {
  var data = {
    logo: img.value.trim(),
    name: nameEL.value.trim(),
    content: title.value.trim(),
  };
  getCreate(data);
});

modal.addEventListener("click", () => {
  document.querySelector("#modal").classList.remove("hidden");
});

cancel.addEventListener("click", () => {
  document.querySelector("#modal").classList.add("hidden");
});
document.querySelector("#closeModal").addEventListener("click", () => {
  document.querySelector("#modal").classList.add("hidden");
});

async function connectApi() {
  try {
    loading.classList.remove("hidden");
    const response = await fetch(`${url}`);
    if (response.ok) {
      data = await response.json();
      render();
    } else {
      console.log(`Lỗi HTTP: ${response.status}`);
      throw new Error("Lỗi kết nối");
    }
  } catch (e) {
    console.log("Lỗi bắt được:", e);
  } finally {
    loading.classList.add("hidden");
  }
}

const render = function () {
  const start = currentPage * itemsPerPage;
  const end = start + itemsPerPage;
  const itemsToRender = data.data.slice(start, end);
  console.log(itemsToRender);

  let html = itemsToRender.map((e, index) => {
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
        <div class = "text-center mt-10">${start + index + 1}</div>
        <div class="line h-0 w-2/4 border-solid border border-black m-auto "></div>
      `;
  });

  view.innerHTML += html.join("");
  currentPage++;
};

window.addEventListener("scroll", () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    if (currentPage * itemsPerPage < data.data.length) {
      render();
    }
  }
});

connectApi();
