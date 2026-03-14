import React from "react";

const Footer = () => {
  return (
    <div style={footerStyle}>
      <div style={overlayStyle}>
        <div style={contentStyle}>
          <h3>💊 Pharmacy Inventory Management</h3>
          <p style={{ margin: "5px 0" }}>📍 Address: Nagercoil, Tamil Nadu</p>
          <p style={{ margin: "5px 0" }}>📞 Phone: +91 9876543210</p>
          <p style={{ margin: "5px 0" }}>📧 Email: pharmacy@gmail.com</p>

          <div style={socialStyle}>
            <a href="#" style={socialLink}>🌐 Website</a>
            <a href="#" style={socialLink}>📘 Facebook</a>
            <a href="#" style={socialLink}>📸 Instagram</a>
          </div>

          <p style={{ marginTop: "15px", fontSize: "14px" }}>
            © 2026 Pharmacy Inventory Management System. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

const footerStyle = {
  width: "100%",
  backgroundImage: "url('https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=1470&q=80')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  position: "relative",
  marginTop: "40px",
};

const overlayStyle = {
  backgroundColor: "rgba(0, 0, 0, 0.6)", // dark overlay
  padding: "40px 20px",
};

const contentStyle = {
  color: "white",
  maxWidth: "1000px",
  margin: "0 auto",
  textAlign: "center",
};

const socialStyle = {
  display: "flex",
  justifyContent: "center",
  gap: "15px",
  marginTop: "10px",
};

const socialLink = {
  color: "white",
  textDecoration: "none",
  fontSize: "16px",
  transition: "0.3s",
};

export default Footer;