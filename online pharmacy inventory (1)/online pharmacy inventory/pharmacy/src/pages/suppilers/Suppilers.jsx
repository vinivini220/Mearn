import React from "react";

const Suppliers = () => {
  return (
    <div style={container}>
      <h1 style={title}>🚚 Suppliers</h1>

      <div style={card}>ABC Pharma Pvt Ltd</div>
      <div style={card}>HealthCare Suppliers</div>
      <div style={card}>MedLife Distributors</div>
    </div>
  );
};

const container={
padding:"30px",
background:"#f5f6fa",
minHeight:"100vh"
}

const title={
fontSize:"30px",
marginBottom:"20px"
}

const card={
background:"white",
padding:"20px",
borderRadius:"10px",
marginBottom:"15px",
boxShadow:"0 3px 8px rgba(0,0,0,0.15)"
}

export default Suppliers;