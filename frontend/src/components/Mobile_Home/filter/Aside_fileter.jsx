import React, { useState } from "react";

function Aside_fileter() {
  const [isStoresFilterVisible, setStoresFilterVisible] = useState(true);

  const toggleStoresFilterVisibility = () => {
    setStoresFilterVisible(!isStoresFilterVisible);
  };
  return (
    <>
      <aside>
        <sm-dap className="p-34y t-mli box-5s6 style-nmTDg" id="style-nmTDg">
          <div>
            <div>
              <div id="goo-7h6" className="style-MoBBr"></div>
            </div>
          </div>
        </sm-dap>
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
            <div className="filter-j2q">
              Search for filters or apply some filters from below
            </div>
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
            <div className="hea-fve" >
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
              <label>
                <input type="checkbox" />
                <span>Xiaomi</span>
                <small>551</small>
              </label>
              <label>
                <input type="checkbox" />
                <span>Samsung</span>
                <small>804</small>
              </label>
              <label>
                <input type="checkbox" />
                <span>Vivo</span>
                <small>483</small>
              </label>
              <label>
                <input type="checkbox" />
                <span>Realme</span>
                <small>376</small>
              </label>
              <label>
                <input type="checkbox" />
                <span>OnePlus</span>
                <small>142</small>
              </label>
              <label>
                <input type="checkbox" />
                <span>Motorola</span>
                <small>358</small>
              </label>
              <label>
                <input type="checkbox" />
                <span>OPPO</span>
                <small>383</small>
              </label>
              <label>
                <input type="checkbox" />
                <span>Poco</span>
                <small>108</small>
              </label>
              <label>
                <input type="checkbox" />
                <span>iQOO</span>
                <small>129</small>
              </label>
              <label>
                <input type="checkbox" />
                <span>Apple</span>
                <small>156</small>
              </label>
              <label>
                <input type="checkbox" />
                <span>Infinix</span>
                <small>148</small>
              </label>
              <label>
                <input type="checkbox" />
                <span>Nokia</span>
                <small>391</small>
              </label>
              <label>
                <input type="checkbox" />
                <span>Tecno</span>
                <small>173</small>
              </label>
              <label>
                <input type="checkbox" />
                <span>Lava</span>
                <small>458</small>
              </label>
              <label>
                <input type="checkbox" />
                <span>Honor</span>
                <small>261</small>
              </label>
              <label>
                <input type="checkbox" />
                <span>Nubia</span>
                <small>47</small>
              </label>
              <label>
                <input type="checkbox" />
                <span>itel</span>
                <small>183</small>
              </label>
              <label>
                <input type="checkbox" />
                <span>Google</span>
                <small>48</small>
              </label>
              <label>
                <input type="checkbox" />
                <span>Huawei</span>
                <small>306</small>
              </label>
              <label>
                <input type="checkbox" />
                <span>Redmagic</span>
                <small>29</small>
              </label>
              <label>
                <input type="checkbox" />
                <span>Nothing</span>
                <small>11</small>
              </label>
              <label>
                <input type="checkbox" />
                <span>Asus</span>
                <small>152</small>
              </label>
              <label>
                <input type="checkbox" />
                <span>Meizu</span>
                <small>81</small>
              </label>
              <label>
                <input type="checkbox" />
                <span>Sony</span>
                <small>170</small>
              </label>
              <label>
                <input type="checkbox" />
                <span>Micromax</span>
                <small>656</small>
              </label>
              <label>
                <input type="checkbox" />
                <span>Jio</span>
                <small>12</small>
              </label>
              <label>
                <input type="checkbox" />
                <span>iKall</span>
                <small>307</small>
              </label>
              <label>
                <input type="checkbox" />
                <span>Snexian</span>
                <small>114</small>
              </label>
              <label>
                <input type="checkbox" />
                <span>LG</span>
                <small>306</small>
              </label>
              <label>
                <input type="checkbox" />
                <span>Lenovo</span>
                <small>198</small>
              </label>
              <label>
                <input type="checkbox" />
                <span>BlackZone</span>
                <small>124</small>
              </label>
              <label>
                <input type="checkbox" />
                <span>Kechaoda</span>
                <small>113</small>
              </label>
              <label>
                <input type="checkbox" />
                <span>ZTE</span>
                <small>180</small>
              </label>
              <label>
                <input type="checkbox" />
                <span>HTC</span>
                <small>180</small>
              </label>
              <label>
                <input type="checkbox" />
                <span>Duoqin</span>
                <small>2</small>
              </label>
              <label>
                <input type="checkbox" />
                <span>Karbonn</span>
                <small>619</small>
              </label>
              <label>
                <input type="checkbox" />
                <span>Gionee</span>
                <small>117</small>
              </label>
              <label>
                <input type="checkbox" />
                <span>Blackberry</span>
                <small>58</small>
              </label>
              <label>
                <input type="checkbox" />
                <span>Tesla</span>
                <small>1</small>
              </label>
              <label>
                <input type="checkbox" />
                <span>Intex</span>
                <small>608</small>
              </label>
              <label>
                <input type="checkbox" />
                <span>Spice</span>
                <small>376</small>
              </label>
              <label>
                <input type="checkbox" />
                <span>Oukitel</span>
                <small>58</small>
              </label>
              <label>
                <input type="checkbox" />
                <span>Lyf</span>
                <small>39</small>
              </label>
              <label>
                <input type="checkbox" />
                <span>Ulefone</span>
                <small>64</small>
              </label>
              <label>
                <input type="checkbox" />
                <span>Cellecor</span>
                <small>75</small>
              </label>
              <label>
                <input type="checkbox" />
                <span>Doogee</span>
                <small>66</small>
              </label>
              <label>
                <input type="checkbox" />
                <span>Blackview</span>
                <small>47</small>
              </label>
              <label>
                <input type="checkbox" />
                <span>Solana</span>
                <small>1</small>
              </label>
              <label>
                <input type="checkbox" />
                <span>TCL</span>
                <small>49</small>
              </label>
              <label>
                <input type="checkbox" />
                <span>Benco</span>
                <small>13</small>
              </label>
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
                <label>
                  <input type="checkbox" />
                  <span>Amazon</span>
                  <small>1739</small>
                </label>
                <label>
                  <input type="checkbox" />
                  <span>Croma</span>
                  <small>139</small>
                </label>
                <label>
                  <input type="checkbox" />
                  <span>Flipkart</span>
                  <small>1188</small>
                </label>
                <label>
                  <input type="checkbox" />
                  <span>Samsung</span>
                  <small>59</small>
                </label>
              </div>
            )}
          </div>
        </div>
      </aside>
    </>
  );
}

export default Aside_fileter;
