import React from "react";
import ReactDOM from "react-dom/client";
const isAuth = true;
const status = true;
const users = ["Item 1", "Item 2", "Item 3"];
// const usersJsx = users.map((item) => <h3 key={item}> {item}</h3>);
const getMessage = () => {
  return <h3>F8 -Fullstack</h3>;
};
const Alert = () => {
  return <h3>không ổn rồi</h3>;
};
const title = (
  <>
    <i>Nguyễn mInh Thuận</i>
    <br />
    <b>ok rồi!</b>
  </>
);
class Product extends React.Component {
  render() {
    return <h3>Sản phẩm</h3>;
  }
}
const div = (
  <>
    <div>
      <h1 className={`title ${status ? "active" : ""}`} id="title">
        {title}
      </h1>
      {isAuth ? <h2>minhthuan</h2> : <h2>Bạn là máy</h2>}
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit in id ea
        enim, sequi eligendi corrupti, itaque dolorem provident earum labore
        laborum. Quibusdam at praesentium odit autem, dolores libero
        repellendus.
      </p>
      {users.map((item) => (
        <h3 key={item}> {item}</h3>
      ))}
      {getMessage()}
      <Alert></Alert>
      <Product></Product>
    </div>
  </>
);
const rootEL = document.querySelector("#root");
ReactDOM.createRoot(rootEL).render(div);

// const h1 = React.createElement(
//   "h1",
//   {
//     id: "title",
//     className: "title",
//     onClick: () => {
//       console.log("ok chưa ");
//     },
//   },
//   "Học react không khó ? ",
//   React.createElement(
//     "a",
//     {
//       href: "//youtube.com",
//     },
//     "youtubbe.com"
//   )
// );
// const h2 = React.createElement("h2", null, "học font-end băng reactjs");
// const liArray = Array.from(Array(100).keys()).map((_, index) => {
//   return React.createElement("li", null, `Item ${index + 1}`);
// });
// const ul = React.createElement("ul", { class: "menu" }, ...liArray);
// const div = React.createElement(Fragment, null, h1, ul, h2);
