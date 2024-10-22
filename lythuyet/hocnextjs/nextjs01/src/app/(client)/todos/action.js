"use server";

import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

export const handleSubmit = async (fromData) => {
  //   fromData.reset();
  const title = fromData.get("title");
  console.log(title);

  const response = await fetch(`${process.env.API_SERVER}/todos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title }),
  });
  if (response.ok) {
    //clear cache
    // clearCacheByPath("/todos");
    // clearCacheByTag("todo-list");
    revalidateTag("todo-list");
    cookies().set("todo", title, {
      path: "/",
      maxAge: 1000,
      httpOnly: true,
    });
    return {
      success: true,
    };
  }
  return {
    success: false,
  };
};
