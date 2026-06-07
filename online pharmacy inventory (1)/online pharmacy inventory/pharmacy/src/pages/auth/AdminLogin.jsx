import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { formInput, primaryButton } from "../../styles/sharedStyles";

const AdminLogin = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = () => {
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
          style={formInput}
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={formInput}
        />

        <button onClick={handleLogin} style={primaryButton}>
          Login
        </button>

      </div>
    </div>
  );
};

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

export default AdminLogin;
