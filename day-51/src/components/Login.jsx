import React, { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import { callApiLogin } from "../service/login";
import { useDispatch, useSelector } from "react-redux";

export default function Login() {
  const [input, setInput] = useState("thuan18092003@gmail.com");
  const [loading, setLoading] = useState(false);
  const regex = /^([\w]*[\w\.]*(?!\.)@gmail.com)/;
  const refInput = useRef();
  const dispatch = useDispatch();
  const dataSelector = useSelector((state) => state.login.apikey);

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!regex.test(input)) {
      toast.error("Bạn cần nhập Gmail hợp lệ!");
      return;
    }
    setLoading(true);
    const data = await callApiLogin(input);
    setLoading(false);
    if (data.code === 200) {
      dispatch({
        type: "login/apikey",
        payload: data.data.apiKey,
      });
      toast.success("Đăng nhập thành công!");
    } else {
      toast.error("Đăng nhập thất bại!");
    }
  };

  useEffect(() => {
    refInput.current.focus();
  });

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <form className="bg-white p-6 rounded shadow-md" onSubmit={handleLogin}>
        <label htmlFor="email" className="block text-lg font-medium mb-2">
          Đăng nhập
        </label>
        <input
          ref={refInput}
          value={input}
          id="email"
          type="email"
          placeholder="Nhập gmail của bạn"
          className="border border-gray-300 p-2 w-full rounded w-[30rem]"
          onChange={(e) => setInput(e.target.value)}
          disabled={loading}
        />
      </form>

      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent border-solid rounded-full animate-spin"></div>
        </div>
      )}
    </div>
  );
}
