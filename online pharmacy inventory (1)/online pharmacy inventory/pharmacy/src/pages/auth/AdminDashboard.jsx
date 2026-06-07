  import React, { useState } from "react";
  import { useNavigate } from "react-router-dom";
  import { useDispatch } from "react-redux";
  import { logout } from "../../redux/store";

  const AdminDashboard = () => {

    const [hover, setHover] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogout = () => {
      dispatch(logout());
      navigate("/adminlogin");
    };

    return (

      <div style={containerStyle}>

        {/* Heading */}

        <div style={headingStyle}>
          <span style={{ fontSize: "35px" }}>💊</span>

          <h1 style={titleStyle}>
            Admin Dashboard
          </h1>
        </div>


        {/* Overview Cards */}

        <div style={overviewContainer}>

          <div style={{ ...overviewCard,background:"#42a5f5"}}>
            <h2>120</h2>
            <p>Total Medicines</p>
            
          </div>

          <div style={{ ...overviewCard, background:"#ffb300"}}>
            <h2>15</h2>
            <p>Low Stock</p>
          </div>

          <div style={{ ...overviewCard, background:"#e53935"}}>
            <h2>5</h2>
            <p>Expired Medicines</p>
          </div>

          <div style={{ ...overviewCard, background:"#66bb6a"}}>
            <h2>5400</h2>
            <p>Daily Sales</p>
          </div>

        </div>


        {/* Modules */}

        <div style={gridStyle}>

          {/* Medicine Module */}

          <div
            onClick={() => navigate("/inventory")}
            onMouseEnter={() => setHover("medicine")}
            onMouseLeave={() => setHover("")}
            style={{
              ...boxStyle,
              background: hover === "medicine" ? "#27ae60" : "#34495e",
              transform: hover === "medicine" ? "scale(1.05)" : "scale(1)"
            }}
          >
            <div style={iconStyle}>💊</div>
            <h3>Medicine Module</h3>
          </div>


          {/* Supplier */}  

          <div
            onClick={() => navigate("/suppliers")}
            onMouseEnter={() => setHover("supplier")}
            onMouseLeave={() => setHover("")}
            style={{
              ...boxStyle,
              background: hover === "supplier" ? "#2980b9" : "#34495e",
              transform: hover === "supplier" ? "scale(1.05)" : "scale(1)"
            }}
          >
            <div style={iconStyle}>🚚</div>
            <h3>Supplier</h3>
          </div>


          {/* Billing */}

          <div
            onClick={() => navigate("/billing")}
            onMouseEnter={() => setHover("billing")}
            onMouseLeave={() => setHover("")}
            style={{
              ...boxStyle,
              background: hover === "billing" ? "#e74c3c" : "#34495e",
              transform: hover === "billing" ? "scale(1.05)" : "scale(1)"
            }}
          >
            <div style={iconStyle}>💳</div>
            <h3>Billing</h3>
          </div>


          {/* Reports */}

          <div
            onClick={() => navigate("/reports")}
            onMouseEnter={() => setHover("reports")}
            onMouseLeave={() => setHover("")}
            style={{
              ...boxStyle,
              background: hover === "reports" ? "#8e44ad" : "#34495e",
              transform: hover === "reports" ? "scale(1.05)" : "scale(1)"
            }}
          >
            <div style={iconStyle}>📑</div>
            <h3>Reports</h3>
          </div>


          {/* Users */}

          <div
            onClick={() => navigate("/users")}
            onMouseEnter={() => setHover("users")}
            onMouseLeave={() => setHover("")}
            style={{
              ...boxStyle,
              background: hover === "users" ? "#16a085" : "#34495e",
              transform: hover === "users" ? "scale(1.05)" : "scale(1)"
            }}
          >
            <div style={iconStyle}>👥</div>
            <h3>Users</h3>
          </div>


          {/* Settings */}

          <div
            onClick={() => navigate("/settings")}
            onMouseEnter={() => setHover("settings")}
            onMouseLeave={() => setHover("")}
            style={{
              ...boxStyle,
              background: hover === "settings" ? "#f39c12" : "#34495e",
              transform: hover === "settings" ? "scale(1.05)" : "scale(1)"
            }}
          >
            <div style={iconStyle}>⚙️</div>
            <h3>Settings</h3>
          </div>


          {/* Logout */}

          <div
            onClick={handleLogout}
            onMouseEnter={() => setHover("logout")}
            onMouseLeave={() => setHover("")}
            style={{
              ...boxStyle,
              background: hover === "logout" ? "#c0392b" : "#e53935",
              transform: hover === "logout" ? "scale(1.05)" : "scale(1)"
            }}
          >
            <div style={iconStyle}>🚪</div>
            <h3>Logout</h3>
          </div>

        </div>

      </div>
    );
  };


  /* Styles */

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