import React from "react";
import NumberGuessingGame from "../assets/components/NumberGuessingGame";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function App() {
  console.log("Minh Thuận");

  return (
    <div>
      <NumberGuessingGame />
      <ToastContainer />
    </div>
  );
}
