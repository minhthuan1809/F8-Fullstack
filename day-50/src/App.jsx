import React from "react";
import RoutesDom from "./Router-dom/RoutesDom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
export default function App() {
  return (
    <div>
      <ToastContainer position="top-center" />
      <RoutesDom />
    </div>
  );
}
