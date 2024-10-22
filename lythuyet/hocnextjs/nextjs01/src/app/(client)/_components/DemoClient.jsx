"use client";

import DemoSever from "./DemoSever";

export default function DemoClient({ children }) {
  console.log("DemoClient");

  return (
    <div>
      <h2>DomoClient</h2>
      {children}
    </div>
  );
}
