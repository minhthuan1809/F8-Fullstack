import React, { useState, startTransition, useTransition } from "react";
import students from "./db.json";
export default function App() {
  const [keyWord, setSeyWord] = useState("");
  const [pending, setPending] = useTransition();
  console.log(pending);

  const handleHightLight = (e) => {
    setPending(() => {
      setSeyWord(e.target.value);
    });
  };
  return (
    <div>
      <input
        type="search"
        placeholder="Từ khóa ..."
        onChange={handleHightLight}
      />
      <hr />
      <h2>danh sách sinh viên </h2>

      {students.map((item, index) => {
        if (keyWord.length) {
          const position = item.fullName
            .toLocaleLowerCase()
            .indexOf(keyWord.toLowerCase());
          if (position !== -1) {
            return (
              <h3 key={index}>
                {item.fullName.slice(0, position)}
                <span style={{ background: "yellow" }}>
                  {item.fullName.slice(position, position + keyWord.length)}
                </span>
                {item.fullName.slice(position + keyWord.length)}
              </h3>
            );
          }
        }
        return <h3 key={index}>{item.fullName}</h3>;
      })}
    </div>
  );
}
