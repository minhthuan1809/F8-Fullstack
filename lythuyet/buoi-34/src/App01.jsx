import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Counter from "./Counter";
import { getTodos } from "./redux/middlewares/todoMiddleware";

export default function App() {
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.todo.todoList);
  const status = useSelector((state) => state.todo.status);
  useEffect(() => {
    dispatch(getTodos());
  }, []);
  console.log(todoList);
  if (status === "error") {
    return <h3>Đã có lỗi xảy ra </h3>;
  }
  return (
    <div>
      {status === "pending" && (
        <div>
          <h2>Todolist</h2>
          <ul>
            {todoList.map((e, index) => {
              return <li key={index}>{e.title}</li>;
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
