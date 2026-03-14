import React, { useState } from "react";

const Medicines = () => {
  const [hover, setHover] = useState("");

  return (
    <div
      style={{
        padding: "40px",
        minHeight: "100vh",
        // Pharmacy-themed background image with dark overlay for readability
        background: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('https://images.unsplash.com/photo-1588776814546-8f14e2a7365f?auto=format&fit=crop&w=1470&q=80') center/cover no-repeat`,
        color: "white",
      }}
    >
      <h1
        style={{
          marginBottom: "40px",
          color: "#fdfdfd",
          textAlign: "center",
        }}
      >
        💊 Medicines
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "30px",
        }}
      >
        {/* Tablets */}
        <div
          onMouseEnter={() => setHover("tablet")}
          onMouseLeave={() => setHover("")}
          style={{
            ...boxStyle,
            background:
              hover === "tablet" ? "rgba(39, 174, 96,0.9)" : "rgba(52, 73, 94,0.7)",
          }}
        >
          <div style={{ fontSize: "40px" }}>💊</div>
          <h3>Tablets</h3>
        </div>

        {/* Syrups */}
        <div
          onMouseEnter={() => setHover("syrup")}
          onMouseLeave={() => setHover("")}
          style={{
            ...boxStyle,
            background:
              hover === "syrup" ? "rgba(41, 128, 185,0.9)" : "rgba(52, 73, 94,0.7)",
          }}
        >
          <div style={{ fontSize: "40px" }}>🧴</div>
          <h3>Syrups</h3>
        </div>

        {/* Creams */}
        <div
          onMouseEnter={() => setHover("cream")}
          onMouseLeave={() => setHover("")}
          style={{
            ...boxStyle,
            background:
              hover === "cream" ? "rgba(230, 126, 34,0.9)" : "rgba(52, 73, 94,0.7)",
          }}
        >
          <div style={{ fontSize: "40px" }}>🧴</div>
          <h3>Creams</h3>
        </div>
      </div>
    </div>
  );
};

// Transparent card style to show background nicely
const boxStyle = {
  padding: "50px",
  color: "white",
  textAlign: "center",
  borderRadius: "12px",
  cursor: "pointer",
  fontSize: "20px",
  transition: "0.3s",
  boxShadow: "0 6px 15px rgba(0,0,0,0.2)",
};

export default Medicines;