import React from "react";
import useHover from "../../hooks/useHover";
import HoverCard from "../../components/HoverCard";
import { centeredCard } from "../../styles/sharedStyles";

const Home = () => {
  const hoverState = useHover();

  const medicines = [
    { name: "Paracetamol", desc: "Fever & Pain Relief", price: 20 },
    { name: "Amoxicillin", desc: "Antibiotic Medicine", price: 45 },
    { name: "Vitamin C", desc: "Immunity Booster", price: 30 },
    { name: "Cetirizine", desc: "Allergy Relief", price: 25 },
  ];

  const features = [
    { icon: "💊", title: "View Medicines", desc: "Browse available medicines in our pharmacy." },
    { icon: "🔎", title: "Search Medicine", desc: "Quickly find medicines using search." },
    { icon: "🛒", title: "Order Medicine", desc: "Place orders easily from available stock." },
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
      <div style={{ ...centeredCard, marginBottom: "30px" }}>
        <h2 style={{ color: "#27ae60" }}>Welcome to Our Pharmacy 👋</h2>
        <p style={{ color: "#555", fontSize: "16px" }}>
          Easily search and find medicines, check availability,
          and place your orders online from our pharmacy system.
        </p>
      </div>

      {/* Features */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "20px", marginBottom: "30px" }}>
        {features.map((feature, idx) => (
          <HoverCard key={idx} hoverKey={idx} style={centeredCard} hoverState={hoverState}>
            <div style={{ fontSize: "40px" }}>{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.desc}</p>
          </HoverCard>
        ))}
      </div>

      {/* Popular Medicines */}
      <h2 style={{ marginTop: "40px", marginBottom: "20px", color: "#2c3e50" }}>
        Popular Medicines
      </h2>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "20px" }}>
        {medicines.map((med, idx) => (
          <HoverCard key={idx} hoverKey={`med${idx}`} style={centeredCard} hoverState={hoverState}>
            <h4>{med.name}</h4>
            <p>{med.desc}</p>
            <p>₹{med.price}</p>
          </HoverCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
