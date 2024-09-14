// import React from "react";

export default function Header({ title, name, email, children }) {
  return (
    <div>
      Header
      <h3>title</h3>
      <h3>name</h3>
      <h3>email</h3>
      {children}
    </div>
  );
}
