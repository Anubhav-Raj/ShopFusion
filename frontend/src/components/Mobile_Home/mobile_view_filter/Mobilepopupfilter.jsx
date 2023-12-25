import React, { useState } from "react";

function Mobilepopupfilter() {
  const [isVisible, setIsVisible] = useState(true);

  const handleCloseClick = () => {
    setIsVisible(false);
  };
  const popupStyle = {
    display: isVisible ? "block" : "none",
  };

  return (
    < >
      <div
        className="popup-joi style-xgo7D"
        id="style-xgo7D"
        style={popupStyle}
      >
        <div className="popup-ox8">
          <svg
            className="icon close"
            viewBox="0 0 24 24"
            onClick={handleCloseClick}
            style={{ cursor: "pointer" }}
          >
            <path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"></path>
          </svg>
          <span className="title-xrj style-M8NwY" id="style-M8NwY">
            Filters
          </span>
        </div>
        <div className="content-ifb">
          <div className="filter-d2x">
            <div className="main-7ja">
              <div className="lef-ihz">
                <ul className="sidebar-gby">
                  <li className="cur-cjv style-zFy8n" id="style-zFy8n">
                    Overview
                  </li>
                  <li>Price</li>
                  <li>Brands</li>
                  <li>Stores</li>
                  <li>Availability</li>
                  <li>Type</li>
                  <li>Launched Within</li>
                  <li>Design</li>
                  <li>Screen Size</li>
                  <li>Display</li>
                  <li>Screen Resolution</li>
                  <li>Rear Camera</li>
                  <li>Front Camera</li>
                  <li>CPU</li>
                  <li>RAM</li>
                  <li>Battery Size</li>
                  <li>Connectivity</li>
                  <li>Features</li>
                  <li>Operating System</li>
                  <li>Android Version</li>
                  <li>Inbuilt Memory</li>
                  <li>Price Drop</li>
                  <li>Aspect Ratio</li>
                  <li>Refresh Rate</li>
                  <li>CPU Manufacturer</li>
                  <li>GPU Manufacturer</li>
                  <li>IP Rating</li>
                </ul>
              </div>
              <div className="rig-zg5">
                <div className="search-9ct style-rBjwH" id="style-rBjwH">
                  <div className="input-bc3">
                    <input
                      placeholder="Search Filters"
                      className="input-bba"
                      type="text"
                    />
                  </div>
                </div>
                <div className="filter-zeb">
                  Search for filters or apply some filters from the left side
                </div>
              </div>
            </div>
            <div className="popup-cnl">
              <a className="btn-hor text-4bv" onClick={handleCloseClick} >
                Close
              </a>
              <a className="btn-hor fla-9oi">Apply Filters</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Mobilepopupfilter;
