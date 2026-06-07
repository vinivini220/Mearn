import React from "react";
import { Link } from "react-router-dom";
import useHover from "../hooks/useHover";

const navLinks = [
  { to: "/homepage",   label: "Home" },
  { to: "/about",      label: "About" },
  { to: "/medicines",  label: "Medicines" },
  { to: "/adminlogin", label: "AdminLogin" },
];

const Navbar = () => {
  const { isHovered, getHoverHandlers } = useHover();

  const linkStyle = (key) => ({
    color: isHovered(key) ? "#ffd700" : "white",
    textDecoration: "none",
    fontWeight: "500",
    textShadow: "1px 1px 2px rgba(0,0,0,0.6)",
    transition: "0.3s",
  });

  return (
    <div style={navStyle}>
      <div style={logoStyle}>💊 Pharmacy</div>

      <div style={menuStyle}>
        {navLinks.map(({ to, label }) => (
          <Link
            key={label}
            to={to}
            style={linkStyle(label)}
            {...getHoverHandlers(label)}
          >
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
};

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

export default Navbar;
