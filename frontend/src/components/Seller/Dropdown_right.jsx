import React, { useState } from "react";
import "./dropdown.css";
import { Button, Select, Space,Checkbox  } from "antd";
import {
  SortAscendingOutlined,
  DownOutlined,
  FilterOutlined,
  UserOutlined,
} from "@ant-design/icons";

function Dropdownlist1({ setSelectedCount }) {
  const handleCheckboxChange = (event) => {
    const isChecked = event.target.checked;
    setSelectedCount((prevCount) =>
      isChecked ? prevCount + 1 : prevCount - 1
    );
  };

  const categories = [
    {
      title: "Types Of Seller",
      items: [
        "Consumer",
        "Retailer",
        "Wholesaler",
        "Dealer",
        "Distributor",
        "Exporter",
        "Manufacturer",
      ],
    },
    { title: "Brands", items: ["1", "2", "3", "4", "5"] },
    { title: "Condition", items: ["Used", "Refurbished", "Brand New"] },
    { title: "Review", items: ["1", "2", "3", "4", "5"] },
  ];

  return (
    <ul className="dropdown-r42">
      <div id="selectAllContainer">
        <span id="selectAll">
          <input type="checkbox" id="selectAllCheckbox" />
          Select All
        </span>
        <button id="clearAllButton">Clear All</button>
      </div>

      {categories.map((category, index) => (
        <li key={index}>
          <h4>&#10148; {category.title}</h4>
          <ul className="nested-list">
            {category.items.map((item, itemIndex) => (
              <li key={itemIndex}>
                <Checkbox onChange={handleCheckboxChange}>{item}</Checkbox>
                {/* <label className="xyzz">
                  <input
                    type="checkbox"
                    value={item}
                    onChange={handleCheckboxChange}
                  />
                  {item}
                </label> */}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}

function FilterButton({ selectedCount }) {
  return (
    <Button>
      <Space>
        <FilterOutlined />
        Filter ({selectedCount})
      </Space>
    </Button>
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
        <FilterButton selectedCount={selectedCount} />
        <Dropdownlist1 setSelectedCount={setSelectedCount} />
      </div>
    </div>
  );
}

export default DropdownRight;
