import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [hovered, setHovered] = useState("");

  const navStyle = {
    background: `linear-gradient(rgba(25, 118, 210,0.85), rgba(25, 118, 210,0.85)), url('https://images.unsplash.com/photo-1611162617211-8d438d8d7e62?auto=format&fit=crop&w=1470&q=80') center/cover no-repeat`,
    color: "white",
    padding: "18px 60px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
    borderRadius: "8px",
    position: "sticky",
    top: 0,
    zIndex: 1000,
  };

  const logoStyle = {
    fontSize: "28px",
    fontWeight: "bold",
    textShadow: "1px 1px 3px rgba(0,0,0,0.7)",
  };

  const menuStyle = {
    display: "flex",
    gap: "25px",
    fontSize: "18px",
  };

  const linkStyle = (link) => ({
    color: hovered === link ? "#ffd700" : "white",
    textDecoration: "none",
    fontWeight: "500",
    textShadow: "1px 1px 2px rgba(0,0,0,0.6)",
    transition: "0.3s",
  });

  return (
    <div style={navStyle}>
      <div style={logoStyle}>💊 Pharmacy</div>

      <div style={menuStyle}>
        <Link
          to="/homepage"
          style={linkStyle("Home")}
          onMouseEnter={() => setHovered("Home")}
          onMouseLeave={() => setHovered("")}
        >
          Home
        </Link>

        <Link
          to="/about"
          style={linkStyle("About")}
          onMouseEnter={() => setHovered("About")}
          onMouseLeave={() => setHovered("")}
        >
          About
        </Link>
       

        <Link
          to="/medicines"
          style={linkStyle("Medicines")}
          onMouseEnter={() => setHovered("Medicines")}
          onMouseLeave={() => setHovered("")}
        >
          Medicines
        </Link>
        <Link
          to="/adminlogin"
          style={linkStyle("AdminLogin")}
          onMouseEnter={() => setHovered("AdminLogin")}
          onMouseLeave={() => setHovered("")}
        >
          AdminLogin
        </Link>
      </div>
    </div>
  );
};

export default Navbar;