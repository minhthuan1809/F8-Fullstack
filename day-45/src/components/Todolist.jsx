/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { getDelete, getUpdate } from "../api/TodoApi";

export default function Todolist({ todos }) {
  const apiKey = localStorage.getItem("API_KEY");
  const [_todos, setTodos] = useState(todos);
  const [editingTodo, setEditingTodo] = useState(null);
  const [newTodoValue, setNewTodoValue] = useState("");

  useEffect(() => {
    setTodos(todos);
  }, [todos]);

  // xóa
  const handleDelete = async (id) => {
    if (confirm("Bạn chắc chắn muốn xóa?")) {
      try {
        const deleteResponse = await getDelete(apiKey, id);
        if (deleteResponse.status_code === "SUCCESS") {
          setTodos(_todos.filter((todo) => todo._id !== id));
        }
      } catch (error) {
        console.error("Lỗi khi xóa:", error);
      }
    }
  };

  const startEdit = (todo) => {
    setEditingTodo(todo._id);
    setNewTodoValue(todo.todo);
  };

  const cancelEdit = () => {
    setEditingTodo(null);
    setNewTodoValue("");
  };

  // sửa
  const handleEdit = async (id) => {
    const value = {
      todo: newTodoValue,
    };
    try {
      const dataUpdate = await getUpdate(apiKey, id, value);
      if (dataUpdate.status_code === "SUCCESS") {
        setTodos(
          _todos.map((todo) =>
            todo._id === id ? { ...todo, todo: newTodoValue } : todo
          )
        );
        setEditingTodo(null);
      }
    } catch (error) {
      console.error("Lỗi khi sửa:", error);
    }
  };

  return (
    <ul className="text-white w-full mt-4 space-y-2 max-w-md m-auto">
      {_todos && _todos.length > 0 ? (
        _todos.map((todo) => (
          <li
            key={todo._id}
            className="flex justify-between items-center bg-slate-800 p-2 rounded-lg text-center"
          >
            {editingTodo === todo._id ? (
              <div className="flex items-center w-full">
                <input
                  value={newTodoValue}
                  onChange={(e) => setNewTodoValue(e.target.value)}
                  className="p-2 flex-1 bg-gray-700 text-white rounded-lg"
                />
                <button
                  onClick={() => handleEdit(todo._id)}
                  className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-2"
                >
                  Lưu
                </button>
                <button
                  onClick={cancelEdit}
                  className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-2"
                >
                  Hủy
                </button>
              </div>
            ) : (
              <>
                <p className="p-2">{todo.todo}</p>
                <div>
                  <button
                    onClick={() => startEdit(todo)}
                    className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
                  >
                    Sửa
                  </button>
                  <button
                    onClick={() => handleDelete(todo._id)}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  >
                    Xóa
                  </button>
                </div>
              </>
            )}
          </li>
        ))
      ) : (
        <li className="bg-slate-800 p-2 rounded-lg text-center">
          Không có nội dung nào
        </li>
      )}
    </ul>
  );
}
