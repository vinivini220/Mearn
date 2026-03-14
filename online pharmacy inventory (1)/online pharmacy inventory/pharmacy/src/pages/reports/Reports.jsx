import React from "react";

const Reports = () => {
  return (
    <div style={container}>
      <h1 style={title}>📑 Sales Reports</h1>

      <div style={reportCard}>
        <p>Today's Sales: ₹5400</p>
      </div>

      <div style={reportCard}>
        <p>This Month: ₹82000</p>
      </div>
    </div>
  );
};

const container={
padding:"30px",
background:"#ecf0f1",
minHeight:"100vh"
}

const title={
fontSize:"30px",
marginBottom:"20px"
}

const reportCard={
background:"white",
padding:"20px",
borderRadius:"10px",
marginBottom:"15px",
boxShadow:"0 3px 10px rgba(0,0,0,0.1)"
}

export default Reports;