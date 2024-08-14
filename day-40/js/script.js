const view = document.querySelector(".container");
var url = "https://vqx63q-8080.csb.app";
// var url = "http://localhost:3000";

async function connectApi() {
  try {
    const response = await fetch(`${url}/data`);
    if (response.ok) {
      //   console.log(response.json());
      render(await response.json());
    } else {
      console.log(`Lỗi HTTP: ${response.status}`);
      throw new Error("Lỗi kết nối");
    }
  } catch (e) {
    console.log("Lỗi bắt được:", e);
  }
}

const render = function (value) {
  let count = 0;
  var html = value.map((e) => {
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
        <div class = "text-center mt-10">${count++}</div>
        <div class="line h-0 w-2/4 border-solid border border-black m-auto "></div>
  
      `;
  });
  view.innerHTML = html.join("");
};

connectApi();
