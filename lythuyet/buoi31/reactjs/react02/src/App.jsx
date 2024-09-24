import { createContext, useState } from "react";
import Comments from "./components/comments/comments";
export const AppContext = createContext();
console.log(AppContext);

export default function App() {
  const [message, setMessage] = useState("học react");
  return (
    <AppContext.Provider value={{ message, setMessage }}>
      <Comments />
    </AppContext.Provider>
  );
}
