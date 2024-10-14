import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTask } from "../service/gettask";

export default function Trello() {
  const dispatch = useDispatch();
  const dataSelector = useSelector((state) => state.trello.data);
  const dataApiKey = useSelector((state) => state.login.apikey);

  // useEffect(async () => {
  //   const response = await getTask(dataApiKey);
  //   console.log(response);

  //   if (response.code === 200) {
  //   }
  // }, []);
  return <div>Trello</div>;
}
