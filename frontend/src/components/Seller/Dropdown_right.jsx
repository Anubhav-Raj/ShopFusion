import React, { useState, useEffect } from "react";
import "./dropdown.css";
import { Button, Select, Space, Menu, Checkbox, Drawer } from "antd";
import {
  SortAscendingOutlined,
  FilterOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";

function getItem(label, key, icon, children, type, checkbox = false) {
  return {
    key,
    icon,
    children,
    label,
    type,
    checkbox,
  };
}
const items = [
  getItem("Types Of Seller", "1", <UnorderedListOutlined />, [
    getItem("Consumer", "11", null, null, null, true),
    getItem("Retailer", "12", null, null, null, true),
    getItem("Wholesaler", "13", null, null, null, true),
  ]),
  getItem("Brands", "2", <UnorderedListOutlined />, [
    getItem("Option 1", "21", null, null, null, true),
    getItem("Option 2", "22", null, null, null, true),
  ]),
  getItem("Review", "3", <UnorderedListOutlined />, [
    getItem("Option 1", "31", null, null, null, true),
    getItem("Option 2", "32", null, null, null, true),
    getItem("Option 3", "33", null, null, null, true),
    getItem("Option 4", "34", null, null, null, true),
  ]),
];

const getLevelKeys = (items1) => {
  const key = {};
  const func = (items2, level = 1) => {
    items2.forEach((item) => {
      if (item.key) {
        key[item.key] = level;
      }
      if (item.children) {
        return func(item.children, level + 1);
      }
    });
  };
  func(items1);
  return key;
};

const levelKeys = getLevelKeys(items);
function Dropdownlist1({ setSelectedCount }) {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleCheckboxChange = (event, item) => {
    const isChecked = event.target.checked;
    setSelectedCount((prevCount) =>
      isChecked ? prevCount + 1 : prevCount - 1
    );

    if (isChecked) {
      setSelectedOptions([...selectedOptions, item.label]);
    } else {
      setSelectedOptions(
        selectedOptions.filter((option) => option !== item.label)
      );
    }
  };

  const [stateOpenKeys, setStateOpenKeys] = useState(["1"]);

  const onOpenChange = (openKeys) => {
    const currentOpenKey = openKeys.find(
      (key) => stateOpenKeys.indexOf(key) === -1
    );
    if (currentOpenKey !== undefined) {
      const repeatIndex = openKeys
        .filter((key) => key !== currentOpenKey)
        .findIndex((key) => levelKeys[key] === levelKeys[currentOpenKey]);
      setStateOpenKeys(
        openKeys
          .filter((_, index) => index !== repeatIndex)
          .filter((key) => levelKeys[key] <= levelKeys[currentOpenKey])
      );
    } else {
      setStateOpenKeys(openKeys);
    }
  };

  const renderMenuItem = (item) => {
    const isSelected = selectedOptions.includes(item.label);
    return (
      <Menu.Item
        key={item.key}
        style={{ backgroundColor: isSelected ? "#e6f4ff" : "rgb(250 250 250)" }}
      >
        <Checkbox onChange={(event) => handleCheckboxChange(event, item)}>
          {item.label}
        </Checkbox>
      </Menu.Item>
    );
  };

  const renderSubMenu = (item) => {
    return (
      <Menu.SubMenu key={item.key} icon={item.icon} title={item.label}>
        {item.children.map((subItem) =>
          subItem.children ? renderSubMenu(subItem) : renderMenuItem(subItem)
        )}
      </Menu.SubMenu>
    );
  };

  useEffect(() => {
    console.log(selectedOptions);
  }, [selectedOptions]);
  return (
    <ul className="dropdown-r42">
      <Menu
        mode="inline"
        defaultSelectedKeys={[]}
        openKeys={stateOpenKeys}
        onOpenChange={onOpenChange}
        style={{
          width: 256,
        }}
      >
        {items.map((item) =>
          item.children ? renderSubMenu(item) : renderMenuItem(item)
        )}
      </Menu>
    </ul>
  );
}

function FilterButton({ setSelectedCount, selectedCount }) {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      {" "}
      <Button onClick={showDrawer}>
        <Space>
          <FilterOutlined />
          Filter ({selectedCount})
        </Space>
      </Button>
      <Drawer
        extra={
          <div id="selectAllContainer">
            <span id="selectAll">
              <Checkbox>Select All</Checkbox>
            </span>
            <button id="clearAllButton">Clear All</button>
          </div>
        }
        onClose={onClose}
        open={open}
      >
        <Dropdownlist1 setSelectedCount={setSelectedCount} />
      </Drawer>
    </>
  );
}

function DropdownRight() {
  const [selectedCount, setSelectedCount] = useState(0);
  const handleChange = (value) => {
    console.log(value); // { value: "lucy", key: "lucy", label: "Lucy (101)" }
  };

  return (
    <div className="sort-4wg">
      <Select
        suffixIcon={<SortAscendingOutlined style={{ color: "black" }} />}
        labelInValue
        defaultValue={{
          value: "",
          label: "Sort By",
        }}
        style={{
          width: 160,
        }}
        onChange={handleChange}
        options={[
          {
            value: "newest",
            label: "Newest First (100)",
          },
          {
            value: "oldest",
            label: "Oldest First (101)",
          },
          {
            value: "priceLow",
            label: "Price Low To High (101)",
          },
          {
            value: "priceHigh",
            label: "Price High To Low (101)",
          },
        ]}
      />
      <div className="dropdown-container">
        <FilterButton
          setSelectedCount={setSelectedCount}
          selectedCount={selectedCount}
        />
      </div>
    </div>
  );
}

export default DropdownRight;
