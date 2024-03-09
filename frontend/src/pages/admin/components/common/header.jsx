import { Header } from "antd/es/layout/layout";
import React from "react";

const Adminheader = () => {
  return (
    <Header
      style={{
        textAlign: "center",
        padding: 0,
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
        background: "white",
      }}
    >
      <h2>Welcome to ZoneHub</h2> {/* Displaying the text within the Header */}
    </Header>
  );
};

export default Adminheader;
