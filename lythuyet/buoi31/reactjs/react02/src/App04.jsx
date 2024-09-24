// import React from "react";

import Counter from "./components/Counter";

export default function App() {
  const [isShow, setShow] = useState(true);

  return (
    <div>
      <button onClick={() => setShow(!isShow)}>click</button>
      {isShow && <Counter />}
    </div>
  );
}
