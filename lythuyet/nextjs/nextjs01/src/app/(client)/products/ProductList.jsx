"use client";

import { useEffect, useState } from "react";

export default function ProductList() {
  const [title, setTitle] = useState("danh sách sản phẩm");
  useEffect(() => {
    localStorage.setItem("thuận", "thuận");
  });
  return (
    <div>
      <h2>{title}</h2>
      <button
        onClick={() => {
          setTitle("học next");
        }}
      >
        click me
      </button>
    </div>
  );
}
