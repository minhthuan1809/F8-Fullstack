/* eslint-disable react/prop-types */
export default function CommentList({ comments }) {
  console.log(comments);

  return (
    <div>
      {comments?.map((comment, index) => (
        <div key={index}>
          <p>{comment.text}</p>
          <button>Sửa</button>
        </div>
      ))}
    </div>
  );
}
