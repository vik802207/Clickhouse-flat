import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const styles = {
    homeContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh",
      padding: "2rem",
      background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
    },
    homeCard: {
      background: "rgba(255, 255, 255, 0.08)",
      borderRadius: "20px",
      padding: "3rem",
      textAlign: "center",
      maxWidth: "500px",
      width: "100%",
      backdropFilter: "blur(10px)",
      boxShadow: "0 0 20px rgba(255, 255, 255, 0.1)",
      border: "1px solid rgba(255, 255, 255, 0.1)",
    },
    heading: {
      fontSize: "2.5rem",
      marginBottom: "1rem",
      background: "linear-gradient(90deg, #ff6ec4, #7873f5)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    },
    subtitle: {
      fontSize: "1.1rem",
      color: "#e0e0e0",
      marginBottom: "2rem",
    },
    roleSection: {
      display: "flex",
      justifyContent: "center",
      gap: "2rem",
    },
    roleCard: {
      background: "rgba(255, 255, 255, 0.05)",
      padding: "1.5rem",
      borderRadius: "15px",
      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.4)",
      width: "100%",
      maxWidth: "300px",
      transition: "transform 0.3s ease",
    },
    roleTitle: {
      fontSize: "1.5rem",
      color: "#fff",
      marginBottom: "1.2rem",
    },
    button: {
      display: "block",
      width: "100%",
      padding: "0.7rem 1rem",
      margin: "0.5rem 0",
      border: "none",
      borderRadius: "10px",
      fontSize: "1rem",
      background: "linear-gradient(90deg, #ff6ec4, #7873f5)",
      color: "white",
      cursor: "pointer",
      transition: "all 0.3s ease",
    },
  };

  return (
    <div style={styles.homeContainer}>
      <div style={styles.homeCard}>
        <h1 style={styles.heading}>📦📄IngestPro Tool</h1>
        <p style={styles.subtitle}>
        Seamless data flow between ClickHouse & CSV
        </p>

        <div style={styles.roleSection}>
          <div style={styles.roleCard}>
            <h2 style={styles.roleTitle}>Data Admin</h2>
            <button style={styles.button} onClick={() => navigate("/login")}>
              Login 
            </button>
            <button
              style={styles.button}
              onClick={() => navigate("/register")}
            >
              Register 
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
