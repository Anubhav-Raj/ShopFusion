import React, { useState } from "react";

function Aside_fileter() {
  const [isStoresFilterVisible, setStoresFilterVisible] = useState(true);
  const [appliedFilters, setAppliedFilters] = useState([]);
  const brandList = [
    { name: "Xiaomi", count: 551 },
    { name: "Samsung", count: 804 },
    { name: "Vivo", count: 483 },
    { name: "Realme", count: 376 },
    { name: "OnePlus", count: 142 },
    { name: "Motorola", count: 358 },
    { name: "OPPO", count: 383 },
    { name: "Poco", count: 108 },
    { name: "iQOO", count: 129 },
    { name: "Apple", count: 156 },
    { name: "Infinix", count: 148 },
    { name: "Nokia", count: 391 },
    { name: "Tecno", count: 173 },
    { name: "Lava", count: 458 },
    { name: "Honor", count: 261 },
    { name: "Nubia", count: 47 },
    { name: "itel", count: 183 },
    { name: "Google", count: 48 },
    { name: "Huawei", count: 306 },
    { name: "Redmagic", count: 29 },
    { name: "Nothing", count: 11 },
    { name: "Asus", count: 152 },
    { name: "Meizu", count: 81 },
    { name: "Sony", count: 170 },
    { name: "Micromax", count: 656 },
    { name: "Jio", count: 12 },
    { name: "iKall", count: 307 },
    { name: "Snexian", count: 114 },
    { name: "LG", count: 306 },
    { name: "Lenovo", count: 198 },
    { name: "BlackZone", count: 124 },
    { name: "Kechaoda", count: 113 },
    { name: "ZTE", count: 180 },
    { name: "HTC", count: 180 },
    { name: "Duoqin", count: 2 },
    { name: "Karbonn", count: 619 },
    { name: "Gionee", count: 117 },
    { name: "Blackberry", count: 58 },
    { name: "Tesla", count: 1 },
    { name: "Intex", count: 608 },
    { name: "Spice", count: 376 },
    { name: "Oukitel", count: 58 },
    { name: "Lyf", count: 39 },
    { name: "Ulefone", count: 64 },
    { name: "Cellecor", count: 75 },
    { name: "Doogee", count: 66 },
    { name: "Blackview", count: 47 },
    { name: "Solana", count: 1 },
    { name: "TCL", count: 49 },
    { name: "Benco", count: 13 },
  ];
  const [storeList, setStoreList] = useState([
    { name: "Amazon", count: 1739 },
    { name: "Croma", count: 139 },
    // ... (other stores)
  ]);

  const toggleStoresFilterVisibility = () => {
    setStoresFilterVisible(!isStoresFilterVisible);
  };

  const handleFilter = (filterList, filter) => {
    if (appliedFilters.includes(filter)) {
      setAppliedFilters(appliedFilters.filter((item) => item !== filter));
    } else {
      setAppliedFilters([...appliedFilters, filter]);
    }
  };

  return (
    <>
      <aside>
        <div className="filter-mqh">
          <div id="style-IqD4n" className="style-IqD4n">
            <div className="hea-fve">
              <span>Filters</span>
            </div>
            <div className="search-z61 style-LrR57" id="style-LrR57">
              <div className="input-t5j label-qms">
                <input
                  placeholder="Search For Filters"
                  className="input-xbf emp-zii"
                  type="text"
                />
              </div>
            </div>
            {appliedFilters.length > 0 ? (
            <div className="style-CTotA" id="style-CTotA">
              <div id="style-cWM9l" className="style-cWM9l">
                <span id="style-K4TTM" className="style-K4TTM">
                  Applied Filters
                </span>
                <a
                  id="style-MZoqA"
                  className="style-MZoqA"
                  onClick={() => setAppliedFilters([])}
                >
                  Clear All
                </a>
              </div>
              <div className="filter-pof">
                <div>
                  <div className="hea-cn7">Brands</div>
                  <div>{appliedFilters.join(" • ")}</div>
                  <svg
                    className="icon close"
                    viewBox="0 0 24 24"
                    onClick={() => setAppliedFilters([])} 
                  >
                    <path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"></path>
                  </svg>
                </div>
              </div>
            </div>
          ) : (
              <div className="filter-j2q">
                Search for filters or apply some filters from below
              </div>
            )}
          </div>
          <div data-h="Price">
            <div className="hea-fve">
              <span>Price</span>
              <svg className="icon" viewBox="0 0 24 24">
                <path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z"></path>
              </svg>
            </div>
            <div className="filter-rd6">
              <div className="pri-jde">
                <div className="input-t5j label-qms">
                  <div className="select-cz6">
                    <select className="input-xbf emp-zii">
                      <option value={0}>Min</option>
                      <option value={1000}>₹1,000</option>
                      <option value={2000}>₹2,000</option>
                      <option value={3000}>₹3,000</option>
                      <option value={5000}>₹5,000</option>
                      <option value={7000}>₹7,000</option>
                      <option value={10000}>₹10,000</option>
                      <option value={12000}>₹12,000</option>
                      <option value={15000}>₹15,000</option>
                      <option value={20000}>₹20,000</option>
                      <option value={25000}>₹25,000</option>
                      <option value={30000}>₹30,000</option>
                      <option value={40000}>₹40,000</option>
                      <option value={50000}>₹50,000</option>
                      <option value={60000}>₹60,000</option>
                    </select>
                  </div>
                </div>
                to
                <div className="input-t5j label-qms">
                  <div className="select-cz6">
                    <select className="input-xbf emp-zii">
                      <option value={1000}>₹1,000</option>
                      <option value={2000}>₹2,000</option>
                      <option value={3000}>₹3,000</option>
                      <option value={5000}>₹5,000</option>
                      <option value={7000}>₹7,000</option>
                      <option value={10000}>₹10,000</option>
                      <option value={12000}>₹12,000</option>
                      <option value={15000}>₹15,000</option>
                      <option value={20000}>₹20,000</option>
                      <option value={25000}>₹25,000</option>
                      <option value={30000}>₹30,000</option>
                      <option value={40000}>₹40,000</option>
                      <option value={50000}>₹50,000</option>
                      <option value={60000}>₹60,000</option>
                      <option value={0}>Max</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div data-h="Brands">
            <div className="hea-fve">
              <span>Brands</span>
              <svg className="icon" viewBox="0 0 24 24">
                <path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z"></path>
              </svg>
            </div>

            <div className="search-z61">
              <div className="input-t5j label-qms">
                <input
                  placeholder="Search Brands"
                  className="input-xbf emp-zii"
                  type="text"
                />
              </div>
            </div>
            <div className="filter-rd6">
              {brandList.map((brand, index) => (
                <label key={index}>
                  <input
                    type="checkbox"
                    onChange={() => handleFilter(brandList, brand.name)}
                  />
                  <span>{brand.name}</span>
                  <small>{brand.count}</small>
                </label>
              ))}
            </div>
          </div>
          <div data-h="Stores">
            <div className="hea-fve" onClick={toggleStoresFilterVisibility}>
              <span>Stores</span>
              <svg className="icon" viewBox="0 0 24 24">
                <path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z"></path>
              </svg>
            </div>
            {isStoresFilterVisible && (
              <div className="filter-rd6">
                {storeList.map((store, index) => (
                  <label key={index}>
                    <input
                      type="checkbox"
                      onChange={() => handleFilter(storeList, store.name)}
                    />
                    <span>{store.name}</span>
                    <small>{store.count}</small>
                  </label>
                ))}
              </div>
            )}
          </div>
        </div>
      </aside>
    </>
  );
}

export default Aside_fileter;
