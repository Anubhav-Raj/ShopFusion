import React, { useState } from "react";
import "./dropdown.css";
import Filtericon from "./icons8-filter-50.png";

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
        
        <span id="selectAll"><input type="checkbox" id="selectAllCheckbox" />Select All</span>
        <button id="clearAllButton">Clear All</button>
      </div>

      {categories.map((category, index) => (
        <li key={index}>
          <h4>&#10148; {category.title}</h4>
          <ul className="nested-list">
            {category.items.map((item, itemIndex) => (
              <li key={itemIndex}>
                <label className="xyzz">
                  <input
                    type="checkbox"
                    value={item}
                    onChange={handleCheckboxChange}
                  />
                  {item}
                </label>
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
    <button className="filter-pill">
      {/* <FontAwesomeIcon icon={faFilter} /> */}
      <img className="imgdd" src={Filtericon} alt="Filter Icon" />
      <div className="filter-label"> &nbsp; &nbsp;Filter</div>
      <div className="selected-count">({selectedCount})</div>
      <div className="arrow-icon">
        <svg viewBox="0 0 14 14" width="12px" height="12px" aria-hidden="true">
          <g>
            <path d="M5,5l4,4,4-4H5Z"></path>
          </g>
        </svg>
      </div>
    </button>
  );
}

function DropdownRight() {
  const [selectedCount, setSelectedCount] = useState(0);

  return (
    <div className="sort-4wg">
      <div className="input-a1b style-eqi" id="sty-6pe">
        <div className="select-kld">
          <select className="emp-g1j">
            <option value="" defaultValue hidden>
              &#8645; Sort by
            </option>
            <option value="true">&#8645; Newest First</option>
            <option value="pop">&#8645; Oldest First</option>
            <option value="price:1">&#8645; Price Low To High</option>
            <option value="price:1">&#8645; Price High To Low</option>
          </select>
        </div>
      </div>
      <div className="dropdown-container">
        <FilterButton selectedCount={selectedCount} />
        <Dropdownlist1 setSelectedCount={setSelectedCount} />
      </div>
    </div>
  );
}

export default DropdownRight;
