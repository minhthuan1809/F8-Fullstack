import React from "react";
import ReactDOM from "react-dom/client";
const div = (
  <div>
    <h1 className="title" id="title">
      Học react không dễ{" "}
    </h1>
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit in id ea
      enim, sequi eligendi corrupti, itaque dolorem provident earum labore
      laborum. Quibusdam at praesentium odit autem, dolores libero repellendus.
    </p>
  </div>
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
