// arrow function
// const getMessage = (msg) => {
//   console.log("hello", msg);
// };
// getMessage("F9");

// const getTotal = (a, b) => a + b;
// console.log(getTotal);

// const getUse = () => ({
//   email: "minhthuan@gmail.com",
// });
// console.log(getUse());

// const getFullName = () => ["minh Thuận"];
// console.log(getFullName());

// const users = [
//   {
//     id: 1,
//     name: "user 1",
//   },
//   {
//     id: 2,
//     name: "user 2",
//   },
//   {
//     id: 3,
//     name: "user 3",
//   },
// ];

// const getUser = (userId) => users.filter(({ id }) => userId === id);
// console.log(getUser(2));

// Từ Khóa This ==> nhận từ khóa this của function cha
// Không có từ kháo arguments
// không dùng làm function constructor
// không có object prototype
// không có hoisting

const contentEl = document.querySelector(".content");
const btn = document.querySelector(".btn");

btn.addEventListener("click", (e) => {
  console.log(e);
  const h1 = document.createElement("h1");
  h1.innerText = "Học js";
  contentEl.append(h1);
  h1.addEventListener("click", () => {
    console.log(this);
  });
});
