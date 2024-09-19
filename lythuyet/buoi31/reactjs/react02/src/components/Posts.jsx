// import React from "react";

import { useEffect, useState } from "react";

function Posts() {
  const [post, setPost] = useState([]);
  const [name, setName] = useState("");
  const [isLoading, setLoading] = useState(true);
  const handleLoadPosts = async () => {
    setLoading(true);
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1/comments"
    );
    const data = await response.json();
    // console.log(data);
    setPost(data);
    setLoading(false);
  };
  const handleChangeValue = (e) => {
    setName(e.target.value);
  };
  //   công việc 1
  //   công việc 2
  //   công việc 3
  // ===> công vc bên lề
  //   console.log("re-render");

  useEffect(() => {
    handleLoadPosts();
    console.log("Effect : ", name);

    return () => {
      //cleanup : dữ liệu bộ nhớ lần trước
      console.log("cleanup : ", name);
    };
  }, [name]);
  document.title = name;
  return (
    <>
      {console.log("user-update")}
      <div>
        <h1>Port</h1>
        <div>
          <input
            type="text"
            placeholder="Họ Tên .. "
            onChange={handleChangeValue}
          />
          {name ?? ""}
        </div>
        <button onClick={handleLoadPosts}>Load Posts</button>
      </div>
      {isLoading ? (
        <h3>loading...</h3>
      ) : (
        post.map((value, key) => {
          return <p key={key}>{value.body}</p>;
        })
      )}
    </>
  );
}
export default Posts;

/*
useEffect(callback, dependencies?)
- callback là hàm thực thi các side effect 
- dependencies : điều kiện để callback thực thi
+ null | undifinned ==> Componnent re-render callback sẽ chạy 
+ [] ==> component render lần đầu tiên thì callback sẽ chạy 
+ [bien1 , bien2, bien3,...] ==> khi nào 1 trong các biến thay đổi thì callback sẽ chạy
*/
