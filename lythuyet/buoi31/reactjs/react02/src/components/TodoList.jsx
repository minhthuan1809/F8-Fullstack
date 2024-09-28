/* eslint-disable no-unused-vars */
import { useReducer, useState } from "react";
import { reducer, initialState } from "./utils/reducer";

export default function TodoList() {
  // eslint-disable-next-line no-undef, no-unused-vars
  const [state, dispatch] = useReducer(reducer, initialState);
  const [title, setTitle] = useState("");
  const hanldleSumit = (value) => {
    value.preventDefault();
    if (!value) {
      return alert("vui lòng nhập !");
    }
    dispatch({
      type: "todo/add",
      payload: title,
    });
  };
  return (
    <div>
      <h1>TodoList</h1>
      <form action="" onSubmit={hanldleSumit}>
        <input
          type="text"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <button>Add</button>
      </form>
      <ul>
        {state.TodoList.map((e, index) => {
          return (
            <li key={index}>
              <input type="checkbox" /> {e} <button>&times;</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
