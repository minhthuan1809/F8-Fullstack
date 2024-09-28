/* eslint-disable no-unused-vars */
import React, { useReducer } from "react";
const reducer = (state, acction) => {
  switch (acction.type) {
    case "counter/increment": {
      return { ...state, count: state.count + acction.payload };
    }
    case "counter/decrement": {
      return { ...state, count: state.count - acction.payload };
    }

    default:
      return state;
  }
};
const initialState = {
  count: 0,
};
export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const hanldleIncrement = () => {
    dispatch({
      type: "counter/increment",
      payload: 5,
    });
  };
  const hanldleDecrement = () => {
    dispatch({
      type: "counter/decrement",
      payload: 2,
    });
  };
  console.log("count", state.count);

  return (
    <div>
      <h2>Count : {state.count}</h2>
      <button onClick={hanldleDecrement}>-</button>
      <button onClick={hanldleIncrement}>+</button>
    </div>
  );
}
