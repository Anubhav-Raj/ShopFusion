import React, { useState } from "react";
import "./mypost.css";
import MY_post_list from "../../components/mypost/MY_post_list"; // Make sure the path is correct
import Dropdown1 from "../../components/mypost/dropdown";
import Table_post from "../../components/mypost/Table_post";

const My_post = () => {
  const tabItems = [
    { href: "/mobiles", label: "Seller", id: "", className: "" },
    { href: "/laptops", label: "Buyer", id: "", className: "" },
    {
      href: "/tvs",
      label: "Employers",
      id: "style-RSVdl",
      className: "style-RSVdl",
    },
    { href: "/deals", label: "Job Seekers", id: "", className: "" },
    {
      href: "/mobiles",
      label: "Rental Service Provider",
      id: "",
      className: "",
    },
    {
      href: "/laptops",
      label: "Rental Service Seekers",
      id: "",
      className: "",
    },
    {
      href: "/tvs",
      label: "Other Service Provider",
      id: "style-RSVdl",
      className: "style-RSVdl",
    },
    { href: "/deals", label: "Other Service Seekers", id: "", className: "" },
    { href: "/deals", label: "MATRIMONY", id: "", className: "" },
    { href: "/mobile", label: "Mobile", id: "", className: "" },
  ];
  const dropdowndata = [
    {
      label: "Electronics Peripherals",
      items: [
        { href: "/deals", label: "Mobile", id: "", className: "" },
        { href: "/deals", label: "Tablet", id: "", className: "" },
        { href: "/deals", label: "Laptop", id: "", className: "" },
        { href: "/deals", label: "Desktop", id: "", className: "" },
        { href: "/deals", label: "Smartwatch", id: "", className: "" },
      ],
    },
    {
      label: "Electronics Components",
      items: [
        { href: "/deals", label: "RAM", id: "", className: "" },
        { href: "/deals", label: "ROM", id: "", className: "" },
        { href: "/deals", label: "PSU", id: "", className: "" },
        { href: "/deals", label: "Desktop", id: "", className: "" },
        { href: "/deals", label: "Smartwatch", id: "", className: "" },
      ],
    },
    {
      label: "Electronics Accessories",
      items: [
        { href: "/deals", label: "Mobile", id: "", className: "" },
        { href: "/deals", label: "Tablet", id: "", className: "" },
        { href: "/deals", label: "Laptop", id: "", className: "" },
        { href: "/deals", label: "Desktop", id: "", className: "" },
        { href: "/deals", label: "Smartwatch", id: "", className: "" },
      ],
    },
    {
      label: "Home Appliances",
      items: [
        { href: "/deals", label: "RAM", id: "", className: "" },
        { href: "/deals", label: "ROM", id: "", className: "" },
        { href: "/deals", label: "PSU", id: "", className: "" },
        { href: "/deals", label: "Desktop", id: "", className: "" },
        { href: "/deals", label: "Smartwatch", id: "", className: "" },
      ],
    },
  ];

  const [selectedDropdown, setSelectedDropdown] = useState(null);

  // Function to handle dropdown item selection
  const handleDropdownChange = (selectedItem) => {
    setSelectedDropdown(selectedItem);
  };
  return (
    <>
      <div>
        <div className="bgsetter">
          <p className="myposte_1st">POST TYPE & NO. OF ACTIVE POST</p>
          <MY_post_list tabItems={tabItems} />
        </div>
        <div className="bgsetter">
          <Dropdown1
            options={dropdowndata}
            selected={selectedDropdown}
            onSelect={handleDropdownChange}
          />
          {selectedDropdown && (
            <MY_post_list tabItems={selectedDropdown.items} />
          )}
        </div>
      </div>
      <Table_post/>
    </>
  );
};

export default My_post;
