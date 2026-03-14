import React from "react";

const Users = () => {
  return (
    <div style={container}>
      <h1 style={title}>👥 Users</h1>

      <div style={userCard}>Admin</div>
      <div style={userCard}>Pharmacist</div>
      <div style={userCard}>Staff</div>
    </div>
  );
};

const container={
padding:"30px",
background:"#f1f2f6",
minHeight:"100vh"
}

const title={
fontSize:"30px",
marginBottom:"20px"
}

const userCard={
background:"white",
padding:"20px",
borderRadius:"10px",
marginBottom:"15px",
boxShadow:"0 3px 8px rgba(0,0,0,0.15)"
}

export default Users;