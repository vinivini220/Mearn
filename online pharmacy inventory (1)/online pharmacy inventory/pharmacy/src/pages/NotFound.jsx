import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h1 style={{ fontSize: "72px", margin: "0", color: "#e53935" }}>404</h1>
        <h2 style={{ color: "#333", marginBottom: "10px" }}>Page Not Found</h2>
        <p style={{ color: "#555", marginBottom: "20px" }}>
          The page you are looking for does not exist or has been moved.
        </p>
        <button onClick={() => navigate("/")} style={buttonStyle}>
          Go to Home
        </button>
      </div>
    </div>
  );
};

const containerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "60vh",
  padding: "40px",
};

const cardStyle = {
  background: "white",
  padding: "40px",
  borderRadius: "12px",
  textAlign: "center",
  boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
  maxWidth: "500px",
};

const buttonStyle = {
  padding: "10px 24px",
  borderRadius: "8px",
  border: "none",
  background: "#1976d2",
  color: "white",
  fontWeight: "bold",
  cursor: "pointer",
  fontSize: "14px",
};

export default NotFound;
