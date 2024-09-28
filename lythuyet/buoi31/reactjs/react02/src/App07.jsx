/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef, useState } from "react";
import Button from "./components/comments/Button";

export default function App() {
  const myRef = useRef(0);
  const inputRef = useRef();
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
    myRef.current++;
  };
  const buttonRef = useRef();
  useEffect(() => {
    console.log(buttonRef);
    inputRef.current.focus();
  }, []);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleClick}>Click me</button>
      <div>
        <input type="text" placeholder="vui lòng nhập " ref={inputRef} />
        <Button ref={buttonRef} />
      </div>
    </div>
  );
}
