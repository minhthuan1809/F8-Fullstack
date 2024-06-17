function getError(field) {
  var errors = {
    name: {
      required: "Vui lòng nhập họ tên",
      min: "Họ tên phải từ 5 ký tự",
    },
    email: {
      email: "Định dạng email không hợp lệ",
      unique: "Email đã có người sử dụng",
      required: "Vui lòng nhập địa chỉ email",
    },
    password: {
      required: "Vui lòng nhập mật khẩu",
      same: "Mật khẩu phải khớp với mật khẩu nhập lại",
    },
  };
  if (field.includes(".")) {
    field = field.split(".");
    document.write(errors[field[0]][field[1]], "<br>");
  } else {
    document.write(errors[field].required, "<br>");
  }
}

getError("name"); //Vui lòng nhập họ tên
getError("name.min"); //Họ tên phải từ 5 ký tự

getError("email"); //Vui lòng nhập địa chỉ email
getError("email.unique"); //Email đã có người sử dụng
