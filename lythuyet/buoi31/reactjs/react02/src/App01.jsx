// import React from "react";
// import Header from "./components/Header";
import Input from "./components/Input";

export default function App() {
  // const handeClick1 = () => {
  //   console.log("Click ME");
  // };
  // const handeClick2 = (value) => {
  //   console.log(value);
  // };
  const handleChangeValue = (e) => {
    const value = e.target.value;
    console.log(value);
  };
  // const user = {
  //   name: "Minh Thuận",
  //   email: "thuan@gmail.com",
  // };
  // return (
  //   <div>
  //     <Header title="f8" {...user} />
  //     <h1>đây là trang chủ</h1>
  //     <button onClick={handeClick1}>click me 1</button>
  //     <button onClick={() => handeClick2("f8")}>click me 2</button>
  //     <input type="text" placeholder="Nhập" onChange={handleChangeValue} />
  //   </div>
  // );
  return (
    <div>
      <Input onChange={handleChangeValue} />
    </div>
  );
}
