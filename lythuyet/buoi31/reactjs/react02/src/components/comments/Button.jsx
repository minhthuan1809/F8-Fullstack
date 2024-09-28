import { forwardRef } from "react";

function Button(prop, ref) {
  return (
    <div>
      <button ref={ref}>ok Chưa</button>
    </div>
  );
}
export default forwardRef(Button);

/*
HOC = higher order component
- Hàm bọc component và nhận vào component ban đầu
- Trả về component mới

// ví dụ : hello(btn)
*/
