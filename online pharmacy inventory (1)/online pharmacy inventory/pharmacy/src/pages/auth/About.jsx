import React from "react";
import useHover from "../../hooks/useHover";
import HoverCard from "../../components/HoverCard";

const About = () => {
  const hoverState = useHover();

  return (
    <div style={pageStyle}>

      {/* Heading */}
      <div style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        marginBottom: "30px"
      }}>
        <span style={{ fontSize: "35px" }}>🏥</span>
        <h1 style={{ fontSize: "32px", color: "white", fontWeight: "bold" }}>
          About Our Pharmacy
        </h1>
      </div>

      {/* About Section */}
      <HoverCard hoverKey="about" style={aboutCardStyle} hoverState={hoverState}>
        <h2 style={{ color: "#27ae60" }}>Who We Are</h2>
        <p style={textStyle}>
          Our Pharmacy Inventory Management System helps customers
          easily find medicines and allows pharmacies to manage
          medicine stock, billing, and inventory efficiently.
        </p>
      </HoverCard>

      {/* Services */}
      <HoverCard hoverKey="services" style={aboutCardStyle} hoverState={hoverState}>
        <h2 style={{ color: "#2980b9" }}>Our Services</h2>
        <ul style={listStyle}>
          <li>💊 Wide range of medicines available</li>
          <li>🛒 Easy medicine ordering system</li>
          <li>📦 Fast stock management</li>
          <li>🧾 Simple billing process</li>
        </ul>
      </HoverCard>

      {/* Contact */}
      <HoverCard hoverKey="contact" style={aboutCardStyle} hoverState={hoverState}>
        <h2 style={{ color: "#e67e22" }}>Contact Us</h2>
        <p style={textStyle}>📍 Address: Nagercoil, Tamil Nadu</p>
        <p style={textStyle}>📞 Phone: +91 9876543210</p>
        <p style={textStyle}>📧 Email: pharmacy@gmail.com</p>
      </HoverCard>

    </div>
  );
};

const pageStyle = {
  padding: "40px",
  minHeight: "100vh",
  backgroundImage: "url('https://images.unsplash.com/photo-1587854692152-cbe660dbde88')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat"
};

const aboutCardStyle = {
  background: "rgba(255,255,255,0.9)",
  padding: "25px",
  borderRadius: "10px",
  marginBottom: "20px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
  transition: "0.3s",
  cursor: "pointer"
};

const textStyle = {
  fontSize: "16px",
  color: "#555"
};

const listStyle = {
  lineHeight: "28px",
  fontSize: "16px",
  color: "#555"
};

export default About;
