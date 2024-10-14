import React, { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
// import file
import Trello from "./components/Trello";
import Login from "./components/Login";

export default function App() {
  const data = useSelector((state) => state.login.status);

  return (
    <div>
      <ToastContainer />
      {data ? <Trello /> : <Login />}
    </div>
  );
}
