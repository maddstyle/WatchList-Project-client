import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
import history from "../../services/history";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const response = await axios.post(`http://localhost:3001/createUser`, {
      name,
      email,
      password
    });
    console.log(response.data);
    history.push("/");
  }

  return (
    <>
      <form onSubmit={e => handleSubmit(e)}>
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          value={password}
          placeholder="password"
          onChange={e => setPassword(e.target.value)}
          type="password"
        />
        <button>Submit</button>
      </form>
      <Link to="/">Login</Link>
    </>
  );
}
