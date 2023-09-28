import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./index.scss";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (!email) {
      alert("Please input email");
    } else if (!password) {
      alert("Please input password");
    } else {
      navigate("/");
    }
  };

  return (
    <div className="login">
      <Link to="/">
        <h1 className="login__header">Invoice-O</h1>
      </Link>
      <h3 className="login__subHeader">Website to easily generate invoice</h3>
      <form className="login__form" onSubmit={handleLogin}>
        <label htmlFor="email">Email</label>
        <input
          className="input-primary"
          type="text"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          className="input-primary"
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="btn-primary" type="submit">
          Login
        </button>
      </form>
      <Link to="/">
        <button>Back to Home</button>
      </Link>
    </div>
  );
};

export default Login;
