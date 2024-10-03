import React, { useEffect, useState, useRef } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import ReactLoading from "react-loading";
import { sendEmail } from "./util/SentEmail";
import { toast } from "react-toastify";

export default function Auth0() {
  const { user, logout, isLoading } = useAuth0();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const form = useRef();
  const regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const handleSendEmail = async (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      toast.error("Vui lòng điền đầy đủ thông tin!");
      return;
    }

    if (!regex.test(email)) {
      toast.error("Email không hợp lệ!");
      return;
    }

    if (confirm("Bạn chắn chắn muốn gửi?")) {
      console.log(email);

      const value = {
        user_name: name,
        to_email: email,
        message: message,
      };

      try {
        const data = await sendEmail(value); // Gọi hàm sendEmail

        if (data && data.status === 200) {
          toast.success("Gửi Gmail Thành Công!");
          setMessage("");
        } else {
          toast.error("Có lỗi xảy ra khi gửi email.");
        }
      } catch (error) {
        console.error("Lỗi:", error); // Ghi log lỗi
        toast.error("Có lỗi xảy ra khi gửi email.");
      }
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <ReactLoading type="spin" color="#000" />
      </div>
    );
  }

  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
    }
  }, [user]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-lg p-6 mb-8 max-w-md w-full">
        {user && (
          <>
            <div className="w-40 h-40 rounded-full mx-auto mb-4 border-4 border-red-500 overflow-hidden">
              <img
                src={user.picture}
                alt={user.name}
                className="w-full object-cover"
              />
            </div>
            <h1 className="text-xl font-semibold text-center mb-2">
              Have a nice day, {user.name}!
            </h1>
            {user.email && (
              <a
                className="text-red-500 hover:underline"
                href={`mailto:${user.email}`}
              >
                Email: {user.email}
              </a>
            )}
          </>
        )}

        <form className="mt-6" ref={form} onSubmit={handleSendEmail}>
          <label
            className="block mb-2 text-sm font-medium text-gray-700"
            htmlFor="name"
          >
            Name
          </label>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
            name="user_name"
            className="mb-4 p-2 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-red-400"
          />
          <label
            className="block mb-2 text-sm font-medium text-gray-700"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            name="user_email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="mb-4 p-2 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-red-400"
          />

          <label
            className="block mb-2 text-sm font-medium text-gray-700"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            name="message"
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Enter your message..."
            className="mb-4 p-2 border border-gray-300 rounded w-full h-24 focus:outline-none focus:ring-2 focus:ring-red-400"
          />
          <button className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 w-full">
            Send
          </button>
        </form>

        <button
          className="mt-4 bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600 w-full"
          onClick={() => logout()}
        >
          Logout
        </button>
      </div>
    </div>
  );
}
