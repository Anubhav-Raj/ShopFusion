import React from "react";
import { Link } from 'react-router-dom';

import defaultBoxImage from "../../assets/verifyimg.jpg";

function VerifyPage({ boxImg, boxText, routeTo }) {
  // Default images if no image is provided
  const defaultBox = boxImg || defaultBoxImage;

  const styles = {
    container: {
        display: "flex",
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        position: "relative",
      },
      content: {
        textAlign: "center",
        position: "relative", // Make content relative to enable stacking context
        zIndex: 1, // Ensure content appears above overlay
        color: "#000", // Set text color to black for better visibility
        padding: "40px",
      },
      image: {
        width: "110px",
        marginBottom: "10px",
      },
      message: {
        fontSize: "24px",
        marginBottom: "30px",
      },
      button: {
        backgroundColor: "black",
        color: "#fff",
        border: "none",
        padding: "10px 20px",
        fontSize: "16px",
        borderRadius: "4px",
        cursor: "pointer",
        transition: "background-color 0.3s ease",
      },
  };

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <img src={defaultBox} alt="Box" style={styles.image} />
        <h2 style={styles.message}>{boxText}</h2>
        <Link to={routeTo} style={styles.button}>
          Return to Home
        </Link>
      </div>
    </div>
  );
}


export default VerifyPage;
