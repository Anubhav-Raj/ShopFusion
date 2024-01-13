import React, { useState } from "react";
import "./dropdown.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";

function DropdownRight() {
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
        <button className="filter-pill">
          <FontAwesomeIcon icon={faFilter} />
          <div className="filter-label"> &nbsp; &nbsp;Filter</div>
          <div className="arrow-icon">
            <svg
              viewBox="0 0 14 14"
              width="12px"
              height="12px"
              aria-hidden="true"
            >
              <g>
                <path d="M5,5l4,4,4-4H5Z"></path>
              </g>
            </svg>
          </div>
        </button>
        <Dropdownlist1 />
      </div>
    </div>
  );
}

function Dropdownlist1() {
  const categories = [
    { title: "Types Of Seller", items: ["Consumer", "Retailer", "Wholeseller", "Dealer", "Distributor","Exporter","Manufacture"] },
    { title: "Brands", items: ["1", "2", "3", "4", "5"] },
    { title: "Condition", items: ["Used", "Refurbished"] },
    { title: "Review", items: ["1", "2", "3", "4", "5"] },
  ];

  return (
    <ul className="dropdown-r42">
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

export default DropdownRight;
