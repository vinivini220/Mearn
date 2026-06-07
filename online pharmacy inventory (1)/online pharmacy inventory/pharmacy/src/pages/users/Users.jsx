import React from "react";
import { pageContainer, pageTitle, card } from "../../styles/sharedStyles";

const Users = () => {
  return (
    <div style={pageContainer}>
      <h1 style={pageTitle}>👥 Users</h1>

      <div style={card}>Admin</div>
      <div style={card}>Pharmacist</div>
      <div style={card}>Staff</div>
    </div>
  );
};

export default Users;
