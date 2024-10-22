"use client";
import { useRef } from "react";
import { handleSubmit } from "./action";

export default function Todoadd2() {
  const formRef = useRef();
  return (
    <div>
      <form
        ref={formRef}
        action={async (fromData) => {
          const response = await handleSubmit(fromData);
          if (response.success) {
            formRef.current.reset();
          }
        }}
      >
        <input type="text" placeholder="Title..." name="title" />
        <button>Add</button>
      </form>
    </div>
  );
}
