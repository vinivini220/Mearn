import React from "react";
import { pageContainer, pageTitle, card } from "../../styles/sharedStyles";

const Reports = () => {
  return (
    <div style={pageContainer}>
      <h1 style={pageTitle}>📑 Sales Reports</h1>

      <div style={card}>
        <p>Today's Sales: ₹5400</p>
      </div>

      <div style={card}>
        <p>This Month: ₹82000</p>
      </div>
    </div>
  );
};

export default Reports;
