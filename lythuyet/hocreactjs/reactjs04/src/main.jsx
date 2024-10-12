import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store } from "./redux-toolkit/store.js";

ReactDOM.createRoot(document.getElementById("root"), {
  identifierPrefix: "thuan_",
}).render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    <App />
    {/* </Provider> */}
  </React.StrictMode>
);
