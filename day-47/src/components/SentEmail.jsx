import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import ReactLoading from "react-loading";
export default function SentEmail() {
  const { user, isAuthenticated, logout, isLoading } = useAuth0();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
    }
  }, [user]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <ReactLoading type="spin" color="#000" />
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-lg p-6 mb-8 max-w-md w-full">
        {user && (
          <>
            <img
              className="w-40 h-40 rounded-full mx-auto mb-4 border-4 border-red-500"
              src={user.picture}
              alt={user.name}
            />
            <h1 className="text-xl font-semibold text-center mb-2">
              Have a nice day {user.name}!
            </h1>
            <a
              className="text-red-500 hover:underline"
              href={`mailto:${user.email}`}
            >
              Email: {user.email}
            </a>
          </>
        )}

        <form className="mt-6">
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
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Enter your message ... "
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
