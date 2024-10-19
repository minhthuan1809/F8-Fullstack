export default function PostPage({ params }) {
  const path = params.path;

  return (
    <div>
      <h1>Post</h1>
      <h2>{path && path[0]}</h2>
    </div>
  );
}
