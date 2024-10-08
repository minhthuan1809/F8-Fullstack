import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./redux-ToolKit/slices/counterSlice";

export default function App() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>count :{count} </h1>
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button
        onClick={() => {
          dispatch(decrement(3));
        }}
      >
        -
      </button>
    </div>
  );
}
