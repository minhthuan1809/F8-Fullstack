import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import ReactLoading from "react-loading";
import Auth0 from "./components/Auth0";

export default function App() {
  const { isAuthenticated, loginWithPopup, isLoading } = useAuth0();

  const handleLogin = async () => {
    try {
      const respont = await loginWithPopup({
        authorizationParams: {
          prompt: "login",
        },
      });
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <ReactLoading type="spin" color="#000" />
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      {!isAuthenticated && (
        <div className="bg-white shadow-md rounded-lg p-8 max-w-sm w-full">
          <h1 className="text-3xl font-bold mb-4 text-center">GỬI GMAIL</h1>
          <button
            onClick={handleLogin}
            className="w-full bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600 transition duration-300"
          >
            Đăng nhập
          </button>
        </div>
      )}
      {isAuthenticated && <Auth0 />}
      <ToastContainer />
    </div>
  );
}
