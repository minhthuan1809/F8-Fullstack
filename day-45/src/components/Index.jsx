import { useState } from "react";
import { getAdd } from "../api/TodoApi";

export default function Index() {
  const [create, setCreate] = useState("");
  const apikey = localStorage.getItem("API_KEY");

  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      const add = await getAdd(apikey, { todo: create });
      console.log(add);
    } catch (error) {
      console.error("Error adding todo:", error);
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
    </div>
  );
}
