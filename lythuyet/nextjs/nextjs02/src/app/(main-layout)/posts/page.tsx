import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "Bài viết - F8",
};
const getPost = async (): Promise<Post[]> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  return response.json();
};
type Post = {
  id: string;
  title: string;
  body?: string;
};
export default async function PortPage() {
  const posts = await getPost();
  return (
    <div>
      <h1>Danh sách bài viết</h1>
      {posts.map((post: Post) => {
        return (
          <div key={post.id}>
            <h2>{post.id + " : " + post.title}</h2>
          </div>
        );
      })}
    </div>
  );
}
