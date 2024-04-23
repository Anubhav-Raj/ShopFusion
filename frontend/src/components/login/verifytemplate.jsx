import React from "react";
import { Link } from 'react-router-dom';

import defaultBgImage from "../../assets/Project_74-04.jpg";
import defaultBoxImage from "../../assets/verifyimg.jpg";

function VerifyPage({ bgImg, boxImg, boxText, routeTo }) {
  // Default images if no image is provided
  const defaultBg = bgImg || defaultBgImage;
  const defaultBox = boxImg || defaultBoxImage;

  const styles = {
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        position: "relative",
        backgroundImage: `url(${bgImg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      },
      overlay: {
        position: "absolute",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundColor: "rgb(0 0 0 /70%)", // Semi-transparent white overlay
      },
      content: {
        textAlign: "center",
        position: "relative", // Make content relative to enable stacking context
        zIndex: 1, // Ensure content appears above overlay
        color: "#000", // Set text color to black for better visibility
        padding: "40px",
        borderRadius: "8px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
        backgroundColor: "rgba(255, 255, 255,255)", // Semi-transparent white backdrop for content
      },
      image: {
        width: "110px",
        marginBottom: "4px",
      },
      message: {
        fontSize: "24px",
        marginBottom: "20px",
      },
      button: {
        backgroundColor: "#5846C8",
        color: "#fff",
        border: "none",
        padding: "12px 24px",
        fontSize: "16px",
        borderRadius: "4px",
        cursor: "pointer",
        transition: "background-color 0.3s ease",
      },
  };

  return (
    <div style={styles.container}>
      <div style={styles.overlay}></div>
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
