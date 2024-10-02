/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
// import { ProviderContex } from "../store/StateProvider";
import { useDispatch, useSeletor } from "../store/Hook";
import { decrement, increment } from "../store/action/countAction";

export default function Counter() {
  const dispatch = useDispatch();
  const count = useSeletor((state) => state.count);

  const handleIncrement = () => {
    // cộng
    dispatch(increment());
  };
  const handleDecrement = () => {
    //trừ
    dispatch(decrement());
  };
  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleIncrement}>+</button>
    </div>
  );
}
