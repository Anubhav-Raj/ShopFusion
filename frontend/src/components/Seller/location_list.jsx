import React from "react";
import "./location_list.css";

function LocationList() {
  return (
    <div className="location-list">
      <li>
        <div className="dropdown-container">
          <button className="filter-pill">
            <div className="filter-label">All Countries</div>
            <div className="arrow-icon">
              <svg viewBox="0 0 14 14" width="12px" height="12px" aria-hidden="true">
                <g>
                  <path d="M5,5l4,4,4-4H5Z"></path>
                </g>
              </svg>
            </div>
          </button>
        </div>
      </li>
      <li>
        <div className="dropdown-container">
          <button className="filter-pill">
            <div className="filter-label">All States</div>
            <div className="arrow-icon">
              <svg viewBox="0 0 14 14" width="12px" height="12px" aria-hidden="true">
                <g>
                  <path d="M5,5l4,4,4-4H5Z"></path>
                </g>
              </svg>
            </div>
          </button>
        </div>
      </li>
      <li>
        <div className="dropdown-container">
          <button className="filter-pill">
            <div className="filter-label">All Districts</div>
            <div className="arrow-icon">
              <svg viewBox="0 0 14 14" width="12px" height="12px" aria-hidden="true">
                <g>
                  <path d="M5,5l4,4,4-4H5Z"></path>
                </g>
              </svg>
            </div>
          </button>
        </div>
      </li>
      <li>
        <div className="dropdown-container">
          <button className="filter-pill">
            <div className="filter-label">All Sub Districts / Blocks</div>
            <div className="arrow-icon">
              <svg viewBox="0 0 14 14" width="12px" height="12px" aria-hidden="true">
                <g>
                  <path d="M5,5l4,4,4-4H5Z"></path>
                </g>
              </svg>
            </div>
          </button>
        </div>
      </li>
    </div>
  );
}

export default LocationList;
