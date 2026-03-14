import React from "react";

const Settings = () => {
  return (
    <div style={container}>
      <h1 style={title}>⚙️ Settings</h1>

      <div style={card}>Change Password</div>
      <div style={card}>System Preferences</div>
      <div style={card}>Backup Data</div>
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
boxShadow:"0 4px 10px rgba(0,0,0,0.1)"
}

export default Settings;