import React, { useEffect, useState } from "react";
import { loginApi } from "../api/shopApi";
import { toast } from "react-toastify";

export default function Login({ onLoginSuccess }) {
  const regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const [input, setInput] = useState("");

  const login = async (e) => {
    e.preventDefault();
    if (!regex.test(input)) {
      toast.error("Gmail không đúng!");
      return;
    }

    try {
      const data = await loginApi(input);
      console.log(data);

      if (data.status_code === "SUCCESS") {
        localStorage.setItem("apikey", data.data.apiKey);
        toast.success("Đăng Nhập Thành công!");
        onLoginSuccess(); // Gọi hàm để cập nhật trạng thái đăng nhập
      } else {
        toast.error("Đăng Nhập thất bại!");
      }
    } catch (error) {
      console.error(error);
      toast.error("Đã xảy ra lỗi!");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form
        onSubmit={login}
        className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full"
      >
        <h2 className="text-2xl font-bold mb-5 text-center">Đăng Nhập</h2>
        <input
          type="text"
          placeholder="Nhập email"
          value={input}
          onChange={(e) => setInput(e.target.value.toLocaleLowerCase())}
          className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Đăng Nhập
        </button>
      </form>
    </div>
  );
}
