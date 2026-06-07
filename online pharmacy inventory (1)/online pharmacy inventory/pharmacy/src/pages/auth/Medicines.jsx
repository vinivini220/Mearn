import React from "react";
import useHover from "../../hooks/useHover";

const categories = [
  { key: "tablet", icon: "💊", label: "Tablets", hoverBg: "rgba(39, 174, 96,0.9)" },
  { key: "syrup",  icon: "🧴", label: "Syrups",  hoverBg: "rgba(41, 128, 185,0.9)" },
  { key: "cream",  icon: "🧴", label: "Creams",  hoverBg: "rgba(230, 126, 34,0.9)" },
];

const Medicines = () => {
  const { isHovered, getHoverHandlers, hoverTransform } = useHover();

  return (
    <div
      style={{
        padding: "40px",
        minHeight: "100vh",
        background: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('https://images.unsplash.com/photo-1588776814546-8f14e2a7365f?auto=format&fit=crop&w=1470&q=80') center/cover no-repeat`,
        color: "white",
      }}
    >
      <h1 style={{ marginBottom: "40px", color: "#fdfdfd", textAlign: "center" }}>
        💊 Medicines
      </h1>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "30px" }}>
        {categories.map(({ key, icon, label, hoverBg }) => (
          <div
            key={key}
            {...getHoverHandlers(key)}
            style={{
              ...boxStyle,
              ...hoverTransform(key),
              background: isHovered(key) ? hoverBg : "rgba(52, 73, 94,0.7)",
            }}
          >
            <div style={{ fontSize: "40px" }}>{icon}</div>
            <h3>{label}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

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
