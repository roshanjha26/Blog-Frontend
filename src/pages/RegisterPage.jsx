import React, { useState } from "react";
import { Link } from "react-router-dom";
const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = async (ev) => {
    ev.preventDefault();
    console.log(username, email, password);
    const result = await fetch("http://localhost:8000/user/register", {
      method: "POST",
      body: JSON.stringify({ username, email, password }),
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });
    console.log(result);
    if (result.ok === false) {
      alert("register failed");
    } else {
      alert("registration succesful");
    }
  };
  return (
    <form className="register" onSubmit={register}>
      <h1>REGISTER</h1>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={(ev) => setUsername(ev.target.value)}
      />
      <input
        type="email"
        placeholder="type your mailid"
        value={email}
        onChange={(ev) => setEmail(ev.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(ev) => setPassword(ev.target.value)}
      />
      <button> Register</button>
      <Link to="/login">Already register ? redireact to login</Link>
    </form>
  );
};

export default RegisterPage;
