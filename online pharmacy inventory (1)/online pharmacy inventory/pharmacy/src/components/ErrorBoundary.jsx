import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={containerStyle}>
          <div style={cardStyle}>
            <h2 style={{ color: "#e53935", marginBottom: "10px" }}>
              Something went wrong
            </h2>
            <p style={{ color: "#555", marginBottom: "20px" }}>
              {this.state.error?.message || "An unexpected error occurred."}
            </p>
            <button
              onClick={() => window.location.reload()}
              style={buttonStyle}
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

const containerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "60vh",
  padding: "40px",
};

const cardStyle = {
  background: "white",
  padding: "40px",
  borderRadius: "12px",
  textAlign: "center",
  boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
  maxWidth: "500px",
};

const buttonStyle = {
  padding: "10px 24px",
  borderRadius: "8px",
  border: "none",
  background: "#1976d2",
  color: "white",
  fontWeight: "bold",
  cursor: "pointer",
  fontSize: "14px",
};

export default ErrorBoundary;
