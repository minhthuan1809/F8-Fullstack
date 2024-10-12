import React, { useId } from "react";

export default function Input({ label, type = "text", name }) {
  const id = useId();
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input type="text" id={id} name={name} />
    </div>
  );
}
