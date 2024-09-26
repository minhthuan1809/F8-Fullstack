import { useEffect, useState } from "react";
import { getAdd, getCallApi, getList, getFound } from "../api/TodoApi";
import { Toaster, toast } from "react-hot-toast";

import Todolist from "./Todolist";

export default function Index() {
  const [create, setCreate] = useState("");
  const apikey = localStorage.getItem("API_KEY");
  const [todos, setTodos] = useState([]);
  const [Loading, setLoading] = useState(false);
  const [searchLoading, setSearchLoading] = useState(false);
  const [debouncedValue, setDebouncedValue] = useState(create);

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
  }, []);

  // thêm mới
  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const add = await getAdd(apikey, { todo: create });
      fetchTodos(apikey);
      setCreate("");
      toast.success("Đã thêm thành công !");
    } catch (error) {
      console.error("Error adding todo:", error);
      toast.error("Có lỗi xảy ra khi thêm todo mới. Vui lòng thử lại.");
    } finally {
      setLoading(false);
    }
  };

  // debounce logic
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(create);
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [create]);

  // tìm kiếm
  const handleFount = async () => {
    setSearchLoading(true);
    try {
      const data = await getFound(apikey, debouncedValue);
      if (data.code === 200) {
        setTodos(data.data.listTodo);
        toast.success("Đã được tìm thấy !");
      } else {
        setTodos([]);
      }
    } catch (error) {
      console.log(error);
      toast.error("Có lỗi xảy ra khi tìm kiếm. Vui lòng thử lại.");
    } finally {
      setSearchLoading(false);
    }
  };

  return (
    <div className="container mt-6 max-w-md mx-auto bg-slate-700 p-6 rounded-lg shadow-lg flex flex-col justify-center items-center space-y-4">
      <Toaster position="top-right" reverseOrder={false} />
      <form onSubmit={handleCreate} className="w-full flex space-x-2">
        <input
          value={create}
          maxLength={50}
          onChange={(e) => setCreate(e.target.value)}
          type="text"
          required
          placeholder="Nhập ..."
          className="appearance-none bg-slate-800 border border-slate-600 rounded-lg w-full py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
        />
        <button
          type="submit"
          className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none"
          disabled={Loading}
        >
          {Loading ? "Loading..." : "Thêm mới"}
        </button>
        <button
          onClick={handleFount}
          type="button"
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none"
          disabled={searchLoading}
        >
          {searchLoading ? "Searching..." : "Tìm kiếm"}
        </button>
      </form>
      <Todolist todos={todos} />
    </div>
  );
}
