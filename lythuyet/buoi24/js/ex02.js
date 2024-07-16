var root = document.querySelector("#root");
// var h1 = document.createElement("h1");
// h1.innerText = `count : `;

// var countnumber = document.createTextNode(0);
// h1.append(countnumber);
// var plusBtn = document.createElement("button");
// plusBtn.addEventListener("click", function () {
//   countnumber.data++;
//   if (countnumber.data >= 10) {
//     countnumber.remove();
//   }
// });
// plusBtn.innerText = `+`;
// root.append(h1);
// root.append(plusBtn);
// // node commnet
// var comment = document.createComment("đây là commnet ");
// document.body.append(comment);

// setTimeout(() => {
//   var commentLive = Array.from(document.body.childNodes).find((node) => {
//     return (
//       node.nodeName === "#comment" && node.nodeValue.includes("live-sever")
//     );
//   });
//   if (commentLive) {
//     commentLive.data = "code by F8";
//   }
// });

// // cloneNode() ==> sao chép 1 node
// var h1 = document.createElement("h1");
// h1.innerText = "Minhh Thuận";
// for (let i = 0; i < 10; i++) {
//   var h1 = h1.cloneNode(true);
//   root.append(h1);
// }

// var root = document.createElement("#root");
var ul = document.createElement("ul");
// li.innerText = `Tên Công việc `;
// ul.append(li);
var input = document.createElement("input");
input.placeholder = `Name...`;
input.addEventListener("keyup", function (e) {
  if (e.key === "enter") {
    var name = e.target.value;
    var todo = li.cloneNode(true);
    todo.innerText = `${name}`;
    var _li = li.cloneNode(True);

    e.target.value = "";
  }
});
root.append(ul);
root.append(input);
