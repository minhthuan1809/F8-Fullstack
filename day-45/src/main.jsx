// Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
import ReactDOM from "react-dom/client";
import App from "./App";
const rootEL = document.querySelector("#root");
ReactDOM.createRoot(rootEL).render(<App />);
