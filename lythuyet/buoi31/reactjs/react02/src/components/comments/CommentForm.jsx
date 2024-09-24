import { useContext } from "react";
import { AppContext } from "../../App";

// eslint-disable-next-line react/prop-types
export default function CommentForm({ onSubmit }) {
  const context = useContext(AppContext);
  return (
    <>
      <div>
        <form action="" onSubmit={onSubmit}>
          <textarea name="" id=""></textarea>
          <button>sent</button>
        </form>
      </div>
      <h2>{context.message}</h2>
      <button
        type="button"
        onClick={() => context.setMessage("học react quá dễ")}
      >
        Change Message
      </button>
    </>
  );
}
