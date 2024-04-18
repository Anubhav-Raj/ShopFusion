import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import Sider from "antd/es/layout/Sider";

const Adminsidebar = () => {
  const items = [
    {
      key: "1",
      icon: <UserOutlined />,
      label: "DashBoard",
      path: "/admin",
    },
    {
      key: "2",
      icon: <UserOutlined />,
      label: "Type",
      path: "/admin/listtype",
    },
    {
      key: "3",
      icon: <VideoCameraOutlined />,
      label: "Department",
      path: "/admin/departments",
    },
    {
      key: "4",
      icon: <UploadOutlined />,
      label: " Category ",
      path: "/admin/category",
    },
    {
      key: "5",
      icon: <UserOutlined />,
      label: "Sub Category",
      path: "/admin/subcategory",
    },

    {
      key: "7",
      icon: <UserOutlined />,
      label: "Brand",
      path: "/admin/listbrand",
    },
  ];

  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      style={{
        height: "100vh",
        background: "#001529",
      }}
    >
      <div className="logo" style={{ padding: "10px", textAlign: "center" }}>
        <h4 style={{ color: "white" }}>ZoneHub Admin Panel</h4>
      </div>
      <Menu theme="dark" mode="inline">
        {items.map((item) => (
          <Menu.Item key={item.key} icon={item.icon}>
            {item.path ? <Link to={item.path}>{item.label}</Link> : item.label}
          </Menu.Item>
        ))}
      </Menu>
    </Sider>
  );
};

export default Adminsidebar;
