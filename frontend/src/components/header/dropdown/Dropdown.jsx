

import React, { useState } from "react";
import "./Dropdown.css";

function Dropdown() {
  const [selectedCategory, setSelectedCategory] = useState("All Categories");

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <>
      <div className="search-qp5 nav-4th">
        <div className="search-7iw">
          <span id="nav-h59" className="search-1a2 style-B2WMK">
            {selectedCategory}
          </span>
          <i className="icon-r78"></i>
        </div>
        <label htmlFor="searchDropdownBox" style={{ display: "none" }}>
          Select the department you want to search in
        </label>
        <select
          className="dropdown-o34 style-EtX9w"
          id="ocqto"
          name="url"
          onChange={handleCategoryChange}
        >
          <option value="all catagories">All Categories</option>
          <option value="Skills">Alexa Skills</option>
          <option value="Devices">Amazon Devices</option>
          <option value="Fashion">Amazon Fashion</option>
          <option value="Amazon-pharmacy">Amazon Pharmacy</option>
          <option value="Appliances">Appliances</option>
          <option value="Mobile-apps">Apps &amp; Games</option>
          <option value="Audible">Audible Audiobooks</option>
          <option value="Baby">Baby</option>
          <option value="Beauty">Beauty</option>
          <option value="Stripbooks">Books</option>
          <option value="Automotive">Car &amp; Motorbike</option>
          
        </select>
      </div>
    </>
  );
}

export default Dropdown;



