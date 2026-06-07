import React from "react";
import { pageContainer, pageTitle, card } from "../../styles/sharedStyles";

const Inventory = () => {
  return (
    <div style={pageContainer}>
      <h1 style={pageTitle}>Medicine Inventory</h1>

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
