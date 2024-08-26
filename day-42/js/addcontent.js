import { addData } from "./callApi.js";
const titleEl = document.querySelector("#title");
const contentEl = document.querySelector("#content");

const userTokenObject = JSON.parse(localStorage.getItem("user_token"));
console.log(userTokenObject);

const newEntry = {
  content: contentEl.value,
  title: titleEl.value,
  userId: { _id: userTokenObject._id, name: userTokenObject.name },
};

document.querySelector("#postForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const data = await addData(newEntry, userTokenObject.accessToken);
  console.log(data);
});
