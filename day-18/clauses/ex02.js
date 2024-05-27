// switch case
var action = "update";
switch (action) {
  case "create":
  case "add":
  case "insert":
    console.log("thêm mới");
    break;
  case "update":
  case "edit":
    console.log("cập nhật");
    break;
  case "delete":
  case "remove":
  case "destroy":
    console.log("Xóa");
    break;
  default:
    console.log("danh sách");

    break;
}

// if else

if (action === "create" || action === "add" || action === "insert") {
  console.log("thêm mới");
} else if (action === "update" || action === "edit") {
  console.log("cập nhật");
} else if (action === "delete" || action === "remove" || action === "destroy") {
  console.log("Xóa");
} else {
  console.log("danh sách");
}
