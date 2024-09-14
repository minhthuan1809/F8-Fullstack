/* eslint-disable no-unused-vars */

import User from "./components/user";

// import React from "react";
export default function App() {
  const users = [
    {
      id: 1,
      name: "user 1",
      email: "user1@gmail.com",
    },
    {
      id: 2,
      name: "user 2",
      email: "user2@gmail.com",
    },
    {
      id: 3,
      name: "user 3",
      email: "user3@gmail.com",
    },
  ];

  return (
    <div>
      <h1>User List</h1>
      {users.map(({ id, ...rest }) => (
        <User key={id} {...rest} />
      ))}
    </div>
  );
}
