import React from "react";
import { useNavigate } from "react-router-dom";
import useHover from "../../hooks/useHover";

const modules = [
  { key: "medicine", icon: "💊", label: "Medicine Module", route: "/inventory",  hoverBg: "#27ae60" },
  { key: "supplier", icon: "🚚", label: "Supplier",        route: "/suppliers",  hoverBg: "#2980b9" },
  { key: "billing",  icon: "💳", label: "Billing",         route: "/billing",    hoverBg: "#e74c3c" },
  { key: "reports",  icon: "📑", label: "Reports",         route: "/reports",    hoverBg: "#8e44ad" },
  { key: "users",    icon: "👥", label: "Users",           route: "/users",      hoverBg: "#16a085" },
  { key: "settings", icon: "⚙️", label: "Settings",        route: "/settings",   hoverBg: "#f39c12" },
];

const overviewData = [
  { value: "120",  label: "Total Medicines",   bg: "#42a5f5" },
  { value: "15",   label: "Low Stock",         bg: "#ffb300" },
  { value: "5",    label: "Expired Medicines",  bg: "#e53935" },
  { value: "5400", label: "Daily Sales",        bg: "#66bb6a" },
];

const AdminDashboard = ({ setIsAdminLoggedIn }) => {
  const { isHovered, getHoverHandlers, hoverTransform } = useHover();
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsAdminLoggedIn(false);
    navigate("/homepage");
  };

  return (
    <div style={containerStyle}>

      {/* Heading */}
      <div style={headingStyle}>
        <span style={{ fontSize: "35px" }}>💊</span>
        <h1 style={titleStyle}>Admin Dashboard</h1>
      </div>

      {/* Overview Cards */}
      <div style={overviewContainer}>
        {overviewData.map(({ value, label, bg }) => (
          <div key={label} style={{ ...overviewCard, background: bg }}>
            <h2>{value}</h2>
            <p>{label}</p>
          </div>
        ))}
      </div>

      {/* Modules */}
      <div style={gridStyle}>
        {modules.map(({ key, icon, label, route, hoverBg }) => (
          <div
            key={key}
            onClick={() => navigate(route)}
            {...getHoverHandlers(key)}
            style={{
              ...boxStyle,
              ...hoverTransform(key),
              background: isHovered(key) ? hoverBg : "#34495e",
            }}
          >
            <div style={iconStyle}>{icon}</div>
            <h3>{label}</h3>
          </div>
        ))}

        {/* Logout */}
        <div
          onClick={handleLogout}
          {...getHoverHandlers("logout")}
          style={{
            ...boxStyle,
            ...hoverTransform("logout"),
            background: isHovered("logout") ? "#c0392b" : "#e53935",
          }}
        >
          <div style={iconStyle}>🚪</div>
          <h3>Logout</h3>
        </div>
      </div>

    </div>
  );
};

const containerStyle = {
  padding: "40px",
  minHeight: "100vh",
  background: "linear-gradient(135deg,#a8edea,#fed6e3)"
};

const headingStyle = {
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "40px"
};

const titleStyle = {
  fontSize: "32px",
  fontWeight: "bold",
  color: "#2c3e50"
};

const overviewContainer = {
  display: "flex",
  flexWrap: "wrap",
  gap: "20px",
  marginBottom: "40px"
};

const overviewCard = {
  flex: "1 1 200px",
  padding: "20px",
  borderRadius: "10px",
  color: "white",
  textAlign: "center"
};

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(4,1fr)",
  gap: "30px"
};

const boxStyle = {
  padding: "40px",
  borderRadius: "12px",
  color: "white",
  textAlign: "center",
  cursor: "pointer",
  transition: "0.3s",
  boxShadow: "0 6px 15px rgba(0,0,0,0.2)"
};

const iconStyle = {
  fontSize: "40px",
  marginBottom: "10px"
};

export default AdminDashboard;
