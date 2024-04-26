import React from "react";
import "./location_list.css";
import { Button, Dropdown, message, Space, Tooltip } from "antd";
import { DownOutlined, UserOutlined } from "@ant-design/icons";

function LocationList() {
  const handleButtonClick = (e) => {
    message.info("Click on left button.");
    console.log("click left button", e);
  };
  const handleMenuClick = (e) => {
    message.info("Click on menu item.");
    console.log("click", e);
  };
  const items = [
    {
      label: "1st menu item",
      key: "1",
      icon: <UserOutlined />,
    },
    {
      label: "2nd menu item",
      key: "2",
      icon: <UserOutlined />,
    },
    {
      label: "3rd menu item",
      key: "3",
      icon: <UserOutlined />,
      danger: true,
    },
    {
      label: "4rd menu item",
      key: "4",
      icon: <UserOutlined />,
      danger: true,
      disabled: true,
    },
  ];
  const menuProps = {
    items,
    onClick: handleMenuClick,
  };
  return (
    <div className="location-list">
      <Dropdown menu={menuProps}>
        <Button>
          <Space>
            All Country
            <DownOutlined />
          </Space>
        </Button>
      </Dropdown>
      <Dropdown menu={menuProps}>
        <Button>
          <Space>
            All States
            <DownOutlined />
          </Space>
        </Button>
      </Dropdown>
      <Dropdown menu={menuProps}>
        <Button>
          <Space>
            All Districts
            <DownOutlined />
          </Space>
        </Button>
      </Dropdown>
      {/* <Dropdown menu={menuProps}>
        <Button>
          <Space>
            All Sub Districts / Blocks
            <DownOutlined />
          </Space>
        </Button>
      </Dropdown> */}
    </div>
  );
}

export default LocationList;
