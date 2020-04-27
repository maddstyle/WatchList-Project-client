import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  // const [token, setToken] = useState(() => {
  //   const storedToken = localStorage.getItem("watchstore");
  //   if (storedToken) {
  //     return JSON.parse(storedToken);
  //   } else {
  //     return [];
  //   }
  // });

  async function handleSubmit(e) {
    e.preventDefault();
    const response = await axios.post(`http://localhost:3001/session`, {
      email,
      password
    });

    const { user, token } = response.data;
    setToken(token);
    console.log(token);
  }

  useEffect(() => {
    localStorage.setItem("watchstore", JSON.stringify(token));
  }, [token]);

  return (
    <>
      <form onSubmit={e => handleSubmit(e)}>
        <input
          value={email}
          type="email"
          placeholder="email"
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
      <Link to="/signup">Create Account</Link>
    </>
  );
}
