import React, { useEffect } from "react";
import { useDispatch, useSeletor } from "../store/Hook";
import { getPosts } from "../store/middlewares/postmiddleware";

export default function Post() {
  const postList = useSeletor((state) => state.postList);
  const dispatch = useDispatch();
  console.log(postList);
  useEffect(() => {
    dispatch(getPosts());
  }, []);
  return <div>Post</div>;
}
