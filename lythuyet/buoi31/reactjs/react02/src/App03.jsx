// import React from "react";

// import Counter from "./components/Counter";
// import Form from "./components/Form";
import Posts from "./components/Posts";

function App() {
  return (
    <>
      {/* <Counter /> */}
      {/* <Form></Form> */}
      <Posts />
    </>
  );
}
export default App;
/**
 
react hook : xuất hiện ở phiên phiên bản 16.8
- Hàm bắt đầu bằng từ khóa use 
- chỉ dc  dùng trong  function component
- Bắt buộc phải gọi ở cấp đầu tiền trong functional 
- cho phéo tương tác với các chức năng trong core của React: state, lifecycle,....

State 
- Trang Thái của component 
- Thể hiện dữ liệu của component và có thể thay đổi dc trong chính component 
- Khi state thay đổi thì component sẽ bị re-render ==> Giao diện sẽ được cập nhật (repaint)
- Không được thay đổi trực tiếp giá trị state mà thông qua hàm thay đổi 
- Khi hàm thay đổi state được gọi ==> Ưu tiên re-render ==> cho nên giá trị stata mới sẽ không dc thay đổi ngay
 */
