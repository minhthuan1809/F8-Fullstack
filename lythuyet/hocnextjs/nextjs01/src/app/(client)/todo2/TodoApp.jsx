"use client";

import { useRef, useState } from "react";
import { mutate } from "swr";

export default function TodoApp() {
  const [title, setTitle] = useState("");
  const submitRef = useRef();
  const hanleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${process.env.API_SERVER}/todos`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title }),
    });
    if (response.ok) {
      const data = await response.json();
      mutate(
        "/todos",
        (prevData) => {
          return [...prevData, data];
        },
        {
          revalidate: false,
        }
      );
      submitRef.current.reset();
    }
  };
  return (
    <div>
      <form onSubmit={hanleSubmit} ref={submitRef}>
        <input
          type="text"
          placeholder=" Nhập ..."
          onChange={(e) => setTitle(e.target.value)}
        />
        <button>add</button>
      </form>
    </div>
  );
}
