import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8000/api/auth/login", {
        email,
        password,
      });
      localStorage.setItem("token", res.data.token);
      navigate("/home");
    } catch (err) {
      alert("Login failed!");
    }
  };

  return (
    <div className="mcp-login-container">
      <div className="mcp-login-card">
        <h1>🔐 Data Admin Login</h1>
        <p className="subtext">Data Ingestion Dashboard Access</p>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="📧 Email address"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="🔑 Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login ➜</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
