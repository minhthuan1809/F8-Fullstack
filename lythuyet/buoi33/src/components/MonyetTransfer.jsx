/* eslint-disable no-unused-vars */
import React, { useCallback, useMemo, useState } from "react";
import ResetButton from "./ResetButton";

export default function MonyetTransfer() {
  const [history, setHistory] = useState([]);
  const [amount, setAmount] = useState("");
  const [msg, getMsg] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setHistory([...history, amount]);
    setAmount("");
  };
  const total = useMemo(() => {
    return history.reduce((total, item) => {
      return total + +item;
    }, 0);
  }, [history]);
  const handleResset = useCallback(() => {
    setHistory((history) => {
      const total = history.reduce((total, item) => {
        return total + +item;
      }, 0);
      getMsg(`số dư cuối kỳ ${total}`);
      return [];
    });
  }, []);
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Nhập số tiền ...."
          onChange={(e) => setAmount(e.target.value)}
          value={amount}
        />
        <button>chuyển </button>
      </form>
      <hr />
      <h2>Lịch sử chuyển tiền : {total}</h2>
      <ul>
        {history.map((e, key) => {
          return <li key={key}>{e}</li>;
        })}
      </ul>
      <ResetButton onClick={handleResset} />
      {msg && <p>{msg}</p>}
    </div>
  );
}
