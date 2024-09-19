// import React from "react";

import { useState } from "react";

function Form() {
  const [form, setform] = useState({});
  const [Msg, setMsg] = useState({});
  const [users, setUsers] = useState([]);
  const hanldeRemove = (index) => {
    if (window.confirm("chắc chưa")) {
      setUsers(users.filter((_, _index) => _index !== index));
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const err = {};
    if (!form.name) {
      err.name = "vui lòng nhập tên";
    }
    if (!form.email) {
      err.email = "vui lòng nhập Gmail";
    }
    if (!Object.keys(err).length) {
      console.log("Thành Công");
      //   setUsers(...users, { name: form.name, email: form.email });
      setUsers([...users, { name: form.name, email: form.email }]);
      err.state = "Thành Công";
      setform({});
      console.log(users);
    }
    setMsg(err);
  };
  const handleChangeValue = (e) => {
    console.log(e.target.name, e.target.value);
    setform({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name"> name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name...."
            value={form.name ?? ""}
            onChange={handleChangeValue}
          />
          {Msg.name && <p>{Msg.name}</p>}
        </div>
        <div>
          <label htmlFor="email"> email</label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="email...."
            value={form.email ?? ""}
            onChange={handleChangeValue}
          />
          {Msg.email && <p>{Msg.email}</p>}
        </div>
        <button type="submit">Submit</button>
        {Msg.state && <p>{Msg.state}</p>}
      </form>
      <hr />
      <h2>Danh sách người dùng</h2>
      {users.map((user, index) => (
        <p key={index}>
          {user.name} - {user.email}
          <button onClick={() => hanldeRemove(index)}>&times;</button>
        </p>
      ))}
    </>
  );
}
export default Form;
