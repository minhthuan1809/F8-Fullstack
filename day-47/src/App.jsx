import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import SentEmail from "./components/SentEmail";
import { ToastContainer } from "react-toastify";
import ReactLoading from "react-loading";
export default function App() {
  const { isAuthenticated, loginWithRedirect, isLoading } = useAuth0();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <ReactLoading type="balls" color="#000" />
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      {!isAuthenticated && (
        <div>
          <h1 className="text-3xl font-bold mb-4">GỬI GMAIL</h1>
          <button
            onClick={() => loginWithRedirect()}
            className="bg-blue-500 text-white px-4 py-2 rounded shadow"
          >
            Log In
          </button>
        </div>
      )}
      {isAuthenticated && <SentEmail></SentEmail>}
      <ToastContainer />
    </div>
  );
}
