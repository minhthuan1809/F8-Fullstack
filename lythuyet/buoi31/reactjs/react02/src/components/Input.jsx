/* eslint-disable react/prop-types */
// import React from "react";

export default function Input({ onChange }) {
  return (
    <div>
      <input type="text" placeholder="Nhập tên ?" onChange={onChange} />
    </div>
  );
}

/*
App 
    component A
    component B
    
*/
