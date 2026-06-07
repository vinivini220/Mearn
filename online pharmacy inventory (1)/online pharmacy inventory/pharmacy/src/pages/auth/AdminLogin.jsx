import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../redux/store";

const ADMIN_USER = import.meta.env.VITE_ADMIN_USERNAME || "admin";
const ADMIN_PASS = import.meta.env.VITE_ADMIN_PASSWORD || "admin123";

const AdminLogin = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = () => {
    if (!username.trim() || !password.trim()) {
      setError("Username and password are required.");
      return;
    }

    if (username === ADMIN_USER && password === ADMIN_PASS) {
      dispatch(login());
      navigate("/admindashboard");
    } else {
      setError("Invalid username or password.");
    }
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

        {error && (
          <p style={{ color: "red", marginBottom: "10px", fontSize: "14px" }}>
            {error}
          </p>
        )}

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