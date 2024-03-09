import { Footer } from "antd/es/layout/layout";
import React from "react";

const AdminFooter = () => {
  return (
    <Footer style={{ textAlign: "center" }}>
      ZoneHub ©{new Date().getFullYear()} Created by Anubhav Raj
    </Footer>
  );
};

export default AdminFooter;
