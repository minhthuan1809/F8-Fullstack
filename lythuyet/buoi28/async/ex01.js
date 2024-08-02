// setTimeout(function () {
//   console.log("lập trình");
// }, 0);
// console.log("để đi làm");
// xử lý bất đồng bộ
// 1. callback
//2.promise
// async await

// const getUsers = (callback) => {
//   setTimeout(() => {
//     const user = ["user 1", "user 2", "user 3"];
//     if (typeof callback === "function") {
//       callback(user);
//     }
//   }, 1000);
// };
// getUsers((user) => {
//   console.log(user);
// });

// promise ==> Xử lý các tác vụ bất đồng bộ theo cách viết chaining
// a.getB().getC().getD();
// trạng thái promise
// - pending
// - fulfilled
// - rejected

//B1: Định nghĩa object promise
//B2: Hiện thị kết quả

// const getUsers = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const users = ["user 1", "user 2", "user 3"];
//       //   resolve(user);
//       //   reject("lỗi");
//       // nếu xử lý thành công thì gọi hàm resolve và truyền về user để trả về kết quả
//       // nếu thất bị thì gọi hàm reject để trả về thông báo lỗi
//     }, 1000);
//   });
// };
// console.log(getUsers());

// getUsers()
//   .then((user) => {
//     console.log(user);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("xong");
//   });

const getUsers = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const users = ["user 1", "user 2", "user 3"];
      resolve(users); // Gọi hàm resolve để trả về kết quả
      // reject("lỗi"); // Hoặc gọi hàm reject để trả về thông báo lỗi
    }, 1000);
  });
};

const getImage = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("demo");
    }, 1000);
  });
};

const reject = getUsers()
  .then((users) => {
    console.log(users); // Log kết quả của getUsers
    return getImage();
  })
  .then((response) => {
    console.log(response); // Log kết quả của getImage
    // return "b";
  })
  .catch((error) => {
    console.error(error); // Bắt và log lỗi nếu có
  })
  .finally(() => {
    console.log("xong"); // Được gọi sau khi tất cả các then và catch hoàn thành
  });
