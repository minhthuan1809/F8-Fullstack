/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Contens from "./Contens";

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
      <Contens />
    </div>
  );
}
