import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodo } from "./redux-ToolKit/slices/todoSlice";

export default function App() {
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.todo.todoList);
  console.log(todoList);

  React.useEffect(() => {
    dispatch(getTodo());
  }, []);
  return (
    <div>
      {/* {todoList.map((e, key) => {
        return <p key={key}>{e}</p>;
      })} */}
    </div>
  );
}
