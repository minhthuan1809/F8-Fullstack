import { addData } from "./callApi.js";
const titleEl = document.querySelector("#title");
const contentEl = document.querySelector("#content");

const userTokenObject = JSON.parse(localStorage.getItem("user_token"));
console.log(userTokenObject);

const newEntry = {
  content: "minthuidsfkjsandf",
  createdAt: "2024-08-26T08:51:45.114Z",
  timeUp: "2024-08-26T08:51:45.114Z",
  title: "kjhdkshdfg",
  userId: { _id: userTokenObject._id, name: userTokenObject.name },
};

document.querySelector("#postForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  console.log(newEntry);
  const data = await addData(newEntry, userTokenObject.accessToken);
});
