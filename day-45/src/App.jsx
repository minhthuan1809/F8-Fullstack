import { useState, useEffect } from "react";
import { getCallApi, getList } from "./api/TodoApi";
import Index from "./components/Index";
import Todolist from "./components/Todolist";
import "./index.css";

function App() {
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

  return (
    <div className="mt-5">
      <h1 className="text-2xl font-semibold text-center">
        Welcome to Todo App!
      </h1>
      <Todolist todos={todos} />
    </div>
  );
}

export default App;
