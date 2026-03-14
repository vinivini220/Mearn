import React, { useState } from "react";

const Home = () => {
  const [hover, setHover] = useState("");

  const medicines = [
    { name: "Paracetamol", desc: "Fever & Pain Relief", price: 20 },
    { name: "Amoxicillin", desc: "Antibiotic Medicine", price: 45 },
    { name: "Vitamin C", desc: "Immunity Booster", price: 30 },
    { name: "Cetirizine", desc: "Allergy Relief", price: 25 },
  ];

  return (
    <div style={{ padding: "40px", background: "#ecf0f1", minHeight: "100vh" }}>
      {/* Heading */}
      <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "30px" }}>
        <span style={{ fontSize: "40px" }}>💊</span>
        <h1 style={{ fontSize: "34px", fontWeight: "bold", color: "#2c3e50" }}>
          Pharmacy Inventory Management System
        </h1>
      </div>

      {/* Welcome Section */}
      <div style={{ ...cardStyle, marginBottom: "30px" }}>
        <h2 style={{ color: "#27ae60" }}>Welcome to Our Pharmacy 👋</h2>
        <p style={{ color: "#555", fontSize: "16px" }}>
          Easily search and find medicines, check availability,
          and place your orders online from our pharmacy system.
        </p>
      </div>

      {/* Features */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "20px", marginBottom: "30px" }}>
        {[
          { icon: "💊", title: "View Medicines", desc: "Browse available medicines in our pharmacy." },
          { icon: "🔎", title: "Search Medicine", desc: "Quickly find medicines using search." },
          { icon: "🛒", title: "Order Medicine", desc: "Place orders easily from available stock." },
        ].map((feature, idx) => (
          <div
            key={idx}
            onMouseEnter={() => setHover(idx)}
            onMouseLeave={() => setHover("")}
            style={{
              ...cardStyle,
              transform: hover === idx ? "scale(1.05)" : "scale(1)",
              transition: "0.3s",
            }}
          >
            <div style={{ fontSize: "40px" }}>{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.desc}</p>
          </div>
        ))}
      </div>

      {/* Popular Medicines */}
      <h2 style={{ marginTop: "40px", marginBottom: "20px", color: "#2c3e50" }}>
        Popular Medicines
      </h2>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "20px" }}>
        {medicines.map((med, idx) => (
          <div
            key={idx}
            onMouseEnter={() => setHover(`med${idx}`)}
            onMouseLeave={() => setHover("")}
            style={{
              ...medicineCard,
              transform: hover === `med${idx}` ? "scale(1.05)" : "scale(1)",
              transition: "0.3s",
            }}
          >
            <h4>{med.name}</h4>
            <p>{med.desc}</p>
            <p>₹{med.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const cardStyle = {
  background: "white",
  padding: "25px",
  borderRadius: "10px",
  textAlign: "center",
  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  cursor: "pointer",
};

const medicineCard = {
  background: "white",
  padding: "20px",
  borderRadius: "10px",
  textAlign: "center",
  boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  cursor: "pointer",
};

export default Home;