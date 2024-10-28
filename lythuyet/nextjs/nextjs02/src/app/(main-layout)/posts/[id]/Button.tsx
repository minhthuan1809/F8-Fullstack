import React from "react";

export default function Button() {
  const hanldleclick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(e);
  };
  return (
    <div>
      <button onClick={hanldleclick}>click</button>
    </div>
  );
}
