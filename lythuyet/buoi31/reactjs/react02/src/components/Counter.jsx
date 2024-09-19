// import React from "react";

import { useEffect, useState } from "react";

//
export default function Counter() {
  // coust [tenState , temHamThayDoi] = useState(giatrimacdinh)
  // eslint-disable-next-line no-unused-vars

  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    setCount((prevCount) => {
      console.log(prevCount);

      return prevCount - 1;
    });
  };
  useEffect(() => {
    console.log("Mounting");
    return () => {
      console.log("Unmounting");
    };
  }, []);
  useEffect(() => {
    console.log("count Update", count);
  }, [count]);
  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
      <p>{count === 10 && "thành công"}</p>
    </div>
  );
}
