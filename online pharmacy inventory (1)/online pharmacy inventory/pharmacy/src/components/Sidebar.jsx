import React from "react";
import pharma from "../assets/pharma.webp"; // only one "../" because src/components -> src/assets

const Sidebar = () => {
  return (
    <div
      style={{
        width: "220px",
        height: "100vh",
        background: `url(${pharma}) center/cover no-repeat`, // background image
        color: "white",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "0 20px 20px 0", // rounded edges
        boxShadow: "4px 0 15px rgba(0,0,0,0.3)",
        fontFamily: "Segoe UI, sans-serif",
      }}
    >
      <div
        style={{
          background: "rgba(44, 62, 80, 0.6)", // semi-transparent overlay for text readability
          padding: "15px",
          borderRadius: "12px",
          textAlign: "center",
        }}
      >
        <h2 style={{ marginBottom: "15px", fontSize: "22px", color: "#f1c40f" }}>
          Pharmacy Dashboard
        </h2>
        <p style={{ color: "#ecf0f1", fontSize: "14px" }}>
          Welcome Admin! Manage your pharmacy inventory and system from here.
        </p>
      </div>
    </div>
  );
};

export default Sidebar;