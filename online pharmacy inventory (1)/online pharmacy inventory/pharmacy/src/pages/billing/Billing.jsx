import React from "react";
import { pageContainer, pageTitle, card } from "../../styles/sharedStyles";

const Billing = () => {
  return (
    <div style={pageContainer}>
      <h1 style={pageTitle}>💳 Billing System</h1>

      <div style={{ ...card, padding: "25px" }}>
        <p>Customer Name: John</p>
        <p>Medicine: Paracetamol</p>
        <p>Total: ₹120</p>
      </div>
    </div>
  );
};

export default Billing;
