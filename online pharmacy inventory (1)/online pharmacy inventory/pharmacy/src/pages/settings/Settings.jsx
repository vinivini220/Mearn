import React from "react";
import { pageContainer, pageTitle, card } from "../../styles/sharedStyles";

const Settings = () => {
  return (
    <div style={pageContainer}>
      <h1 style={pageTitle}>⚙️ Settings</h1>

      <div style={card}>Change Password</div>
      <div style={card}>System Preferences</div>
      <div style={card}>Backup Data</div>
    </div>
  );
};

export default Settings;
