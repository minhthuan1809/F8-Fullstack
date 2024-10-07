/* eslint-disable no-unused-vars */
import React, { useRef } from "react";
import Counter from "./components/Counter";
import MonyetTransfer from "./components/MonyetTransfer";
import Input from "./components/Input";

export default function App() {
  const inputFocus = useRef();
  const handleClike = () => {
    inputFocus.current.focus();
    inputFocus.current.value = "thuan";
  };
  return (
    <div>
      {/* <Counter /> */}
      {/* <MonyetTransfer></MonyetTransfer> */}
      <Input ref={inputFocus}></Input>
      <button onClick={handleClike}>Focus</button>
    </div>
  );
}
