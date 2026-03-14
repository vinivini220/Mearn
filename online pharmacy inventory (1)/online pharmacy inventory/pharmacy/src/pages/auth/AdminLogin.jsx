import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = () => {
    // direct inventory page open (no validation)
    navigate("/inventory");
  };

  return (
    <div style={containerStyle}>
      <div style={loginBox}>

        <div style={iconStyle}>💊</div>

        <h2 style={headingStyle}>Admin Login</h2>

        <input
          type="text"
          placeholder="Enter Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={inputStyle}
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={inputStyle}
        />

        <button onClick={handleLogin} style={buttonStyle}>
          Login
        </button>

      </div>
    </div>
  );
};

/* ---------- Internal CSS ---------- */

const containerStyle = {
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "linear-gradient(135deg,#667eea,#764ba2)"
};

const loginBox = {
  width: "360px",
  padding: "40px",
  borderRadius: "12px",
  background: "white",
  textAlign: "center",
  boxShadow: "0px 8px 30px rgba(0,0,0,0.35)"
};

const iconStyle = {
  fontSize: "50px",
  marginBottom: "15px"
};

const headingStyle = {
  marginBottom: "20px",
  color: "#333"
};

const inputStyle = {
  width: "100%",
  padding: "12px",
  marginBottom: "15px",
  borderRadius: "8px",
  border: "1px solid #ccc",
  outline: "none"
};

const buttonStyle = {
  width: "100%",
  padding: "12px",
  borderRadius: "8px",
  border: "none",
  background: "linear-gradient(90deg,#36d1dc,#5b86e5)",
  color: "white",
  fontWeight: "bold",
  cursor: "pointer",
  fontSize: "16px"
};

export default AdminLogin;