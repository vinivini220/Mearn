import React from "react";

const Inventory = () => {

  const container = {
    padding: "30px",
    background: "#ecf0f1",
    minHeight: "100vh"
  };

  const title = {
    fontSize: "30px",
    marginBottom: "20px",
    color: "#2c3e50"
  };

  const card = {
    background: "white",
    padding: "20px",
    borderRadius: "10px",
    marginBottom: "15px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
  };

  return (
    <div style={container}>
      <h1 style={title}>Medicine Inventory</h1>

      <div style={card}>
        <h3>Paracetamol</h3>
        <p>Stock: 100</p>
      </div>

      <div style={card}>
        <h3>Vitamin C</h3>
        <p>Stock: 50</p>
      </div>

      <div style={card}>
        <h3>Amoxicillin</h3>
        <p>Stock: 70</p>
      </div>

    </div>
  );
};

export default Inventory;