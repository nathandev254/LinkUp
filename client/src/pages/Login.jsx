import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  // State to store user credentials
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Function to handle form submission
  const handleLogin = (e) => {
    e.preventDefault();

    // Simulate login success
    if (username === "demo" && password === "password") {
      alert("Login successful!");
    } else {
      alert("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="login-container">
      <form className="login-form">
        <h2>Welcome Back!</h2>
        <div className="form-group">
          <label htmlFor="email">email</label>
          <input type="text" id="email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
        </div>
        <button className="login--button" type="submit">Login</button>
        <span className="span">
          have an account
          <Link className="span--link" to="/">sign up</Link>
        </span>
      </form>
    </div>
  );
};

export default Login;
