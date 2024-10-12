import React from "react";
import Input from "./components/Input";

export default function App() {
  return (
    <div>
      <Input label="tên" name="name" />
      <Input label="Email" name="email" />
    </div>
  );
}
