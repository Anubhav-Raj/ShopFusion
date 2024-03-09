import React from "react";
import { Menu } from "antd";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import Sider from "antd/es/layout/Sider";

const Adminsidebar = () => {
  const items = [
    {
      key: "1",
      icon: React.createElement(UserOutlined),
      label: "DashBoard",
      path: "/admin/dashboard",
    },
    {
      key: "2",
      icon: React.createElement(UserOutlined),
      label: "Type",
      path: "/admin/listtype",
    },
    {
      key: "3",
      icon: React.createElement(VideoCameraOutlined),
      label: "Department",
    },
    {
      key: "4",
      icon: React.createElement(UploadOutlined),
      label: " Category ",
    },
    {
      key: "5",
      icon: React.createElement(UserOutlined),
      label: "Sub Category",
    },
    {
      key: "6",
      icon: React.createElement(UserOutlined),
      label: "Item",
      path: "/admin/item",
    },
    {
      key: "7",
      icon: React.createElement(UserOutlined),
      label: "Brand",
      path: "/admin/listbrand",
    },
  ].map((item) => ({
    ...item,
    onClick: () => {
      // Add logic to handle navigation
      window.location.href = item.path; // Redirects to the specified path
    },
  }));

  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={(broken) => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
      style={{
        height: "100vh",
      }}
    >
      <div className="logo" style={{ padding: "10px", textAlign: "center" }}>
        {/* Your logo or name here */}
        <h4 style={{ color: "white" }}>ZoneHub Admin Panel</h4>
      </div>
      <div className="demo-logo-vertical" />
      <Menu
        theme="dark"
        mode="inline"
        // defaultSelectedKeys={["1"]}
        items={items}
      />
    </Sider>
  );
};

export default Adminsidebar;
