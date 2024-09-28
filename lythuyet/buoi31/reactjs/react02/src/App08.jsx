/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from "react";
const data = [
  {
    type: "checkbox",
    value: "Check 1",
    id: "check1",
  },
  {
    type: "checkbox",
    value: "Check 2",
    id: "check2",
  },
  {
    type: "checkbox",
    value: "Check 3",
    id: "check3",
  },
  {
    type: "checkbox",
    value: "Check 4",
    id: "check4",
  },
];

export default function App() {
  const clickAll = useRef(null);
  const checkRefs = useRef([]);

  const handleCheckAll = (e) => {
    const status = e.target.checked;
    checkRefs.current.forEach((e) => {
      e.checked = !e.checked;
    });
  };
  return (
    <div>
      <div>
        <input
          type="checkbox"
          id="check_all"
          ref={clickAll}
          onChange={handleCheckAll}
        />
        <label htmlFor="check_all">Check All</label>
      </div>
      <hr />
      {data.map((e, index) => {
        return (
          <>
            <div>
              <input
                type={e.type}
                id={e.id}
                ref={(el) => (checkRefs.current[index] = el)}
              />
              <label htmlFor={e.id}>{e.value}</label>
            </div>
          </>
        );
      })}
      <hr />
      <button>Xóa đã chọn </button>
    </div>
  );
}
