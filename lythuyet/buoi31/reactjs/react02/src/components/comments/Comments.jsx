import { useState } from "react";
import CommentForm from "./commentForm";
import CommentList from "./CommentList";

export default function Comments() {
  const [comments, setComments] = useState([{ id: 1, text: "Comment 1" }]);
  const [value, getValue] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    const comment = e.target[0].value;
    setComments([...comments, { id: 2, text: comment }]);
    getValue("");
  };

  console.log(comments);

  return (
    <div>
      <h2>Comment ({comments.length}) </h2>
      <CommentList comments={comments} />
      <CommentForm onSubmit={(e) => onSubmit(e)} value={value} />
    </div>
  );
}
