// Mảng lưu trữ thông tin các người dùng đã đăng ký
const data = [];

// Hàm đăng ký người dùng mới
function handleRegister(name, password, email) {
  // Kiểm tra thông tin đầy đủ
  if (!name || !password || !email) {
    throw new Error("Thông tin không đầy đủ");
  }

  // Kiểm tra xem email đã tồn tại hay chưa
  for (let user of data) {
    if (user.email === email) {
      throw new Error("Email đã tồn tại");
    }
  }

  // Thêm người dùng mới vào mảng data
  const newUser = { name, password, email, role: "user" };
  data.push(newUser);

  // Trả về mảng data chứa tất cả người dùng đã đăng ký
  return data;
}

// Hàm đăng nhập
function handleLogin(email, password) {
  for (let user of data) {
    if (user.email === email && user.password === password) {
      return user;
    }
  }
  throw new Error("Thông tin đăng nhập không hợp lệ");
}

// Input đăng ký người dùng
try {
  const dataRegister1 = handleRegister(
    "Nguyen Van A",
    "123456",
    "nguyenvana@email.com"
  );
  const dataRegister2 = handleRegister(
    "Nguyen Van B",
    "1234567",
    "nguyenvanb@email.com"
  );
  console.log("Registered Users:", data);

  // Input đăng nhập
  const dataLogin = handleLogin("nguyenvanb@email.com", "1234567");
  console.log("Logged in User:", dataLogin);
} catch (error) {
  console.error(error.message);
}
