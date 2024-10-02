// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const URL = "https://api.escuelajs.co/api/v1";
  const login_Api = async (e) => {
    e.preventDefault();
    const respont = await fetch(`${URL}/auth/login/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
    if (!respont.ok) {
      throw new Error("Lỗi API");
    }
    const data = await respont.json();

    setEmail("");
    setPassword("");
    console.log(data);
    localStorage.setItem("token", `access_token : ${data.access_token}`);
    return data;
  };

  return (
    <div>
      <form action="" onSubmit={login_Api}>
        <div>
          <label htmlFor="">Gmail</label>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div>
          <label htmlFor="">password</label>

          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <button>Đăng Nhập</button>
      </form>
    </div>
  );
}
