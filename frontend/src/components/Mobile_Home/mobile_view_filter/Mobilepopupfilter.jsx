import React, { useState } from "react";

function Mobilepopupfilter() {
  const [isVisible, setIsVisible] = useState(true);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedStores, setSelectedStores] = useState([]);

  const handleCloseClick = () => {
    setIsVisible(false);
  };

  const handleBrandCheckboxChange = (brand) => {
    setSelectedBrands((prevSelectedBrands) =>
      prevSelectedBrands.includes(brand)
        ? prevSelectedBrands.filter((item) => item !== brand)
        : [...prevSelectedBrands, brand]
    );
  };

  const handleStoreCheckboxChange = (store) => {
    setSelectedStores((prevSelectedStores) =>
      prevSelectedStores.includes(store)
        ? prevSelectedStores.filter((item) => item !== store)
        : [...prevSelectedStores, store]
    );
  };

  const brandList = [
    { name: "Xiaomi", count: 551 },
    { name: "Samsung", count: 804 },
    // ... (other brands)
  ];

  const storeList = [
    { name: "Amazon", count: 1739 },
    { name: "Croma", count: 139 },
    // ... (other stores)
  ];

  const popupStyle = {
    display: isVisible ? "block" : "none",
  };

  return (
    <>
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
                  <li>
                    Brands
                    <div className="filter-rd6">
                      {brandList.map((brand, index) => (
                        <label key={index}>
                          <input
                            type="checkbox"
                            onChange={() =>
                              handleBrandCheckboxChange(brand.name)
                            }
                          />
                          <span>{brand.name}</span>
                          <small>{brand.count}</small>
                        </label>
                      ))}
                    </div>
                  </li>
                  <li>
                    Stores
                    <div className="filter-rd6">
                      {storeList.map((store, index) => (
                        <label key={index}>
                          <input
                            type="checkbox"
                            onChange={() =>
                              handleStoreCheckboxChange(store.name)
                            }
                          />
                          <span>{store.name}</span>
                          <small>{store.count}</small>
                        </label>
                      ))}
                    </div>
                  </li>
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
                  {selectedBrands.length > 0 && (
                    <div className="filter-pof">
                      <strong className="hea-cn7">Selected Brands:</strong>

                      <p>{selectedBrands.join(" • ")}</p>
                    </div>
                  )}
                  {selectedStores.length > 0 && (
                    <div className="filter-pof">
                      <strong className="hea-cn7">Selected Brands:</strong>

                      <p>{selectedStores.join(" • ")}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="popup-cnl">
              <a className="btn-hor text-4bv" onClick={handleCloseClick}>
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

{
  /* <div className="filter-j2q">
  Search for filters or apply some filters from below
</div>; */
}
