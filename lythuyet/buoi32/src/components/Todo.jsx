// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { useDispatch, useSeletor } from "../store/Hook";

export default function Todo() {
  const [title, setTitle] = useState("");
  const todoList = useSeletor((state) => state.todoList);
  const dispatch = useDispatch();
  const hanleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "todo/add",
      payload: title,
    });
    setTitle("");
  };
  return (
    <>
      <div>
        <form action="" onSubmit={hanleSubmit}>
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
          <button>add</button>
        </form>
      </div>
      <ul>
        {todoList?.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
}
