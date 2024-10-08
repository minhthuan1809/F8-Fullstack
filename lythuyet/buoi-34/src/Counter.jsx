// import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./redux/action/counterAction";

export default function Counter() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const handleIncrement = () => {
    dispatch(increment());
  };
  const handledecrement = () => {
    dispatch(decrement());
  };
  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={handledecrement}>-</button>
      <button onClick={handleIncrement}>+</button>
    </div>
  );
}
