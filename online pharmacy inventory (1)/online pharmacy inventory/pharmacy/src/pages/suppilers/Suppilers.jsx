import React from "react";
import { pageContainer, pageTitle, card } from "../../styles/sharedStyles";

const Suppliers = () => {
  return (
    <div style={pageContainer}>
      <h1 style={pageTitle}>🚚 Suppliers</h1>

      <div style={card}>ABC Pharma Pvt Ltd</div>
      <div style={card}>HealthCare Suppliers</div>
      <div style={card}>MedLife Distributors</div>
    </div>
  );
};

export default Suppliers;
