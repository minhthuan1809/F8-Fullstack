import React from "react";
import NumberGuessingGame from "./assets/components/NumberGuessingGame";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function App() {
  return (
    <div>
      <NumberGuessingGame />
      <ToastContainer />
    </div>
  );
}
