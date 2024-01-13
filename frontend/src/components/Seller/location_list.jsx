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
          {/* <ul class="dropdown-r42">
            <li class="dropdown-t4l">
              <a
                class="dropdown-tcn"
                href="/jobs?q=javascript+developer&amp;l=Patna%2C+Bihar&amp;radius=0&amp;fromage=1&amp;lang=en"
              >
                Last 24 hours
              </a>
            </li>
            <li class="dropdown-t4l">
              <a
                class="dropdown-tcn"
                href="/jobs?q=javascript+developer&amp;l=Patna%2C+Bihar&amp;radius=0&amp;fromage=3&amp;lang=en"
              >
                Last 3 days
              </a>
            </li>
            <li class="dropdown-t4l">
              <a
                class="dropdown-tcn"
                href="/jobs?q=javascript+developer&amp;l=Patna%2C+Bihar&amp;radius=0&amp;fromage=7&amp;lang=en"
              >
                Last 7 days
              </a>
            </li>
            <li class="dropdown-t4l">
              <a
                class="dropdown-tcn"
                href="/jobs?q=javascript+developer&amp;l=Patna%2C+Bihar&amp;radius=0&amp;fromage=14&amp;lang=en"
              >
                Last 14 days
              </a>
            </li>
          </ul> */}
        </div>
      </li>
      <li>
        <div className="dropdown-container">
          <button className="filter-pill">
            <div className="filter-label">All States</div>
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
        </div>
      </li>
      <li>
        <div className="dropdown-container">
          <button className="filter-pill">
            <div className="filter-label">All Districts</div>
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
        </div>
      </li>
      <li>
        <div className="dropdown-container">
          <button className="filter-pill">
            <div className="filter-label">All Sub Districts / Blocks</div>
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
        </div>
      </li>
    </div>
  );
}

export default LocationList;
