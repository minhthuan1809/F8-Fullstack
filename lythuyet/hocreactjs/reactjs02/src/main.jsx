import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import StateProvider from "./store/StateProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StateProvider>
      <App />
    </StateProvider>
  </React.StrictMode>
);
