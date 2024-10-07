/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

function ResetButton({ onClick }) {
  return (
    <div>
      <button onClick={onClick}>reset</button>
    </div>
  );
}
export default React.memo(ResetButton);
