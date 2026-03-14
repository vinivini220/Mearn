import React from "react";

const Billing = () => {
  return (
    <div style={container}>
      <h1 style={title}>💳 Billing System</h1>

      <div style={billBox}>
        <p>Customer Name: John</p>
        <p>Medicine: Paracetamol</p>
        <p>Total: ₹120</p>
      </div>
    </div>
  );
};

const container={
padding:"30px",
background:"#eef2f3",
minHeight:"100vh"
}

const title={
fontSize:"30px",
marginBottom:"20px"
}

const billBox={
background:"white",
padding:"25px",
borderRadius:"10px",
boxShadow:"0 4px 12px rgba(0,0,0,0.15)"
}

export default Billing;