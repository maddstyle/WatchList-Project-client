import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit() {
    const response = await axios.post(`http://localhost:3001/createUser`, {
      name,
      email,
      password
    });
    console.log(response.data);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
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
