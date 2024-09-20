import { useEffect, useState } from "react";
import { getAdd, getCallApi, getList } from "../api/TodoApi";
import Todolist from "./Todolist";

export default function Index() {
  const [create, setCreate] = useState("");
  const apikey = localStorage.getItem("API_KEY");
  const [todos, setTodos] = useState([]);

  const getEmail = async () => {
    const testEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const enterEmail = prompt("Nhập Gmail của bạn:", "thuan18092003@gmail.com");

    if (testEmail.test(enterEmail.toLowerCase())) {
      try {
        const value = await getCallApi(enterEmail);

        if (value && value.data && value.data.apiKey) {
          localStorage.setItem("API_KEY", value.data.apiKey);
          fetchTodos(value.data.apiKey);
        } else {
          alert(value.message);
        }
      } catch (error) {
        console.error("Error fetching API:", error);
        alert("Có lỗi xảy ra khi lấy API key. Vui lòng thử lại.");
      }
    } else {
      alert("Vui lòng nhập một địa chỉ email hợp lệ.");
    }
  };

  const fetchTodos = async (apiKey) => {
    try {
      const todoData = await getList(apiKey);
      if (todoData && todoData.listTodo) {
        setTodos(todoData.listTodo);
      } else {
        setTodos([]);
      }
    } catch (error) {
      console.error("Lỗi khi lấy danh sách todos:", error);
      if (error.message.includes("401")) {
        localStorage.removeItem("API_KEY");
        alert("Phiên đăng nhập hết hạn. Vui lòng đăng nhập lại.");
        getEmail();
      } else {
        alert("Có lỗi xảy ra khi lấy danh sách todos. Vui lòng thử lại sau.");
      }
    }
  };

  useEffect(() => {
    const key = localStorage.getItem("API_KEY");
    if (key) {
      fetchTodos(key);
    } else {
      getEmail();
    }
  }, []); // Empty dependency array to run only once on mount

  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      const add = await getAdd(apikey, { todo: create });
      console.log(add);
      fetchTodos(apikey);
      setCreate("");
    } catch (error) {
      console.error("Error adding todo:", error);
      alert("Có lỗi xảy ra khi thêm todo mới. Vui lòng thử lại.");
    }
  };

  return (
    <div className="container mt-6 max-w-md mx-auto bg-slate-700 p-6 rounded-lg shadow-lg flex flex-col justify-center items-center space-y-4">
      <form onSubmit={handleCreate} className="w-full flex space-x-2">
        <input
          value={create}
          onChange={(e) => setCreate(e.target.value)}
          type="text"
          placeholder="Nhập ..."
          className="appearance-none bg-slate-800 border border-slate-600 rounded-lg w-full py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
        />
        <button
          type="submit"
          className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none"
        >
          Thêm mới
        </button>
        <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none">
          Tìm kiếm
        </button>
      </form>
      <Todolist todos={todos} />
    </div>
  );
}
