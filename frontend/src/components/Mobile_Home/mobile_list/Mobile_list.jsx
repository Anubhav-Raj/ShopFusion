import React, { useState } from "react";
import "../../../pages/Mobile_home/mobile_home.css";

function Mobile_list() {
  const [expanded, setExpanded] = useState(false);

  const handleReadMoreClick = () => {
    setExpanded(!expanded);
  };
  return (
    <>
      <div>
        <div className={`box-5s6 ${expanded ? "expanded" : ""}`} style={{}}>
          <h1>Mobile Phones</h1>
          <div className={`sm-zml ${expanded ? "expanded" : ""}`}>
            <div className="content-htw">
              <p>
                This list contains 16626 Mobile Phones in India. This price list
                was last updated on Dec 25, 2023.
              </p>
              <div>
                Top 3 Mobile Phones are as follows:
                <ol>
                  <li>
                    <strong>Xiaomi Redmi Note 13 Pro Max 5G</strong>: 200 MP +
                    13 MP + 8 MP Triple Rear &amp; 32 MP Front Camera,
                    1220 x 2712 px, Dual Sim, 4G, 3G
                  </li>
                  <li>
                    <strong>Xiaomi Redmi Note 13 Pro Plus</strong>: 256 GB
                    inbuilt, NFC, VoLTE, Memory Card Not Supported, 12 GB RAM
                  </li>
                  <li>
                    <strong>OPPO A59 5G</strong>: Memory Card Supported,
                    5000 mAh Battery with 33W Fast Charging, 4 GB RAM, Wi-Fi,
                    upto 1 TB
                  </li>
                </ol>
              </div>
              <table className="pri-jde">
                <caption>Mobile Phones Price List</caption>
                <thead>
                  <tr>
                    <th>Mobile Phone</th>
                    <th>Price</th>
                    <th>Available From</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Xiaomi Redmi Note 13 Pro Max 5G</td>
                    <td>₹22,999</td>
                    <td>Upcoming</td>
                  </tr>
                  <tr>
                    <td>Xiaomi Redmi Note 13 Pro Plus</td>
                    <td>₹28,990</td>
                    <td>Upcoming</td>
                  </tr>
                  <tr>
                    <td>OPPO A59 5G</td>
                    <td>₹14,999</td>
                    <td>Dec, 2023</td>
                  </tr>
                  <tr>
                    <td>Xiaomi Redmi Note 13 Pro 5G</td>
                    <td>₹15,990</td>
                    <td>Upcoming</td>
                  </tr>
                  <tr>
                    <td>Xiaomi Redmi 13C 5G</td>
                    <td>₹10,999</td>
                    <td>Dec, 2023</td>
                  </tr>
                  <tr>
                    <td>Xiaomi Redmi K70 Pro</td>
                    <td>₹38,990</td>
                    <td>Upcoming</td>
                  </tr>
                  <tr>
                    <td>Motorola Edge 40 Neo</td>
                    <td>₹22,999</td>
                    <td>Sep, 2023</td>
                  </tr>
                  <tr>
                    <td>Nokia 7610 5G</td>
                    <td>₹52,990</td>
                    <td>Rumored</td>
                  </tr>
                  <tr>
                    <td>Samsung Galaxy S24 Ultra</td>
                    <td>₹1,19,990</td>
                    <td>Upcoming</td>
                  </tr>
                  <tr>
                    <td>Motorola Moto G54 5G</td>
                    <td>₹13,999</td>
                    <td>Sep, 2023</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <span className="droping_div" onClick={handleReadMoreClick}>
              <a>Read More</a>
            </span>
          </div>
          <div className="sm-page-w7m">
            <ul>
              <li>
                <svg className="icon" viewBox="0 0 24 24">
                  <path d="M12.1,18.55L12,18.65L11.89,18.55C7.14,14.24 4,11.39 4,8.5C4,6.5 5.5,5 7.5,5C9.04,5 10.54,6 11.07,7.36H12.93C13.46,6 14.96,5 16.5,5C18.5,5 20,6.5 20,8.5C20,11.39 16.86,14.24 12.1,18.55M16.5,3C14.76,3 13.09,3.81 12,5.08C10.91,3.81 9.24,3 7.5,3C4.42,3 2,5.41 2,8.5C2,12.27 5.4,15.36 10.55,20.03L12,21.35L13.45,20.03C18.6,15.36 22,12.27 22,8.5C22,5.41 19.58,3 16.5,3Z"></path>
                </svg>
                <span>Like</span>
              </li>
              <li>
                <svg className="icon" viewBox="0 0 24 24">
                  <path d="M18,8H6V6H18V8M18,11H6V9H18V11M18,14H6V12H18V14M22,4A2,2 0 0,0 20,2H4A2,2 0 0,0 2,4V16A2,2 0 0,0 4,18H18L22,22V4Z"></path>
                </svg>
                <span>Comment</span>
              </li>
              <li>
                <svg className="icon" viewBox="0 0 24 24">
                  <path d="M18,16.08C17.24,16.08 16.56,16.38 16.04,16.85L8.91,12.7C8.96,12.47 9,12.24 9,12C9,11.76 8.96,11.53 8.91,11.3L15.96,7.19C16.5,7.69 17.21,8 18,8A3,3 0 0,0 21,5A3,3 0 0,0 18,2A3,3 0 0,0 15,5C15,5.24 15.04,5.47 15.09,5.7L8.04,9.81C7.5,9.31 6.79,9 6,9A3,3 0 0,0 3,12A3,3 0 0,0 6,15C6.79,15 7.5,14.69 8.04,14.19L15.16,18.34C15.11,18.55 15.08,18.77 15.08,19C15.08,20.61 16.39,21.91 18,21.91C19.61,21.91 20.92,20.61 20.92,19A2.92,2.92 0 0,0 18,16.08Z"></path>
                </svg>
                <span>Share</span>
              </li>
            </ul>
          </div>
        </div>
        <sm-dap className="p-34y t-mli style-E9BDQ" id="style-E9BDQ">
          <div>
            <div>
              <div id="goo-9kv" className="style-B7Kcr"></div>
            </div>
          </div>
        </sm-dap>
        <div>
          <div className="box-5s6 style-4Dizs" id="style-4Dizs">
            <div className="header-gle">
              <div className="title-y8c">
                <h2>Shop By Brands</h2>
              </div>
              <div className="box-dnb"></div>
            </div>
            <div className="sm-al4 rou-ezl scr-jok" style={{}}>
              <a href="/mobiles/xiaomi-brand">
                <img
                  width={50}
                  height={50}
                  className="sm-nf8"
                  src="https://cdn1.smartprix.com/rx-iGbJv9eGO-w100-h100/GbJv9eGO.webp"
                />
                <span>Xiaomi</span>
              </a>
              <a href="/mobiles/samsung-brand">
                <img
                  width={50}
                  height={50}
                  className="sm-nf8"
                  src="https://cdn1.smartprix.com/rx-iMpmb153D-w100-h100/Mpmb153D.webp"
                />
                <span>Samsung</span>
              </a>
              <a href="/mobiles/vivo-brand">
                <img
                  width={50}
                  height={50}
                  className="sm-nf8"
                  src="https://cdn1.smartprix.com/rx-iYeBboDh6-w100-h100/YeBboDh6.webp"
                />
                <span>Vivo</span>
              </a>
              <a href="/mobiles/realme-brand">
                <img
                  width={50}
                  height={50}
                  className="sm-nf8"
                  src="https://cdn1.smartprix.com/rx-iHrOF1ejy-w100-h100/HrOF1ejy.webp"
                />
                <span>Realme</span>
              </a>
              <a href="/mobiles/oneplus-brand">
                <img
                  width={50}
                  height={50}
                  className="sm-nf8"
                  src="https://cdn1.smartprix.com/rx-i0H6IiRiJ-w100-h100/0H6IiRiJ.webp"
                />
                <span>OnePlus</span>
              </a>
              <a href="/mobiles/motorola-brand">
                <img
                  width={50}
                  height={50}
                  className="sm-nf8"
                  src="https://cdn1.smartprix.com/rx-ihZnoypHg-w100-h100/hZnoypHg.webp"
                />
                <span>Motorola</span>
              </a>
              <a href="/mobiles/oppo-brand">
                <img
                  width={50}
                  height={50}
                  className="sm-nf8"
                  src="https://cdn1.smartprix.com/rx-iXPLoWt2W-w100-h100/XPLoWt2W.webp"
                />
                <span>OPPO</span>
              </a>
              <a href="/mobiles/poco-brand">
                <img
                  width={50}
                  height={50}
                  className="sm-nf8"
                  src="https://cdn1.smartprix.com/rx-ikSD2W9Dr-w100-h100/kSD2W9Dr.webp"
                />
                <span>Poco</span>
              </a>
              <a href="/mobiles/iqoo-brand">
                <img
                  width={50}
                  height={50}
                  className="sm-nf8"
                  src="https://cdn1.smartprix.com/rx-iJmat40P9-w100-h100/Jmat40P9.webp"
                />
                <span>iQOO</span>
              </a>
              <a href="/mobiles/nokia-brand">
                <img
                  width={50}
                  height={50}
                  className="sm-nf8"
                  src="https://cdn1.smartprix.com/rx-iO4tRzBZT-w100-h100/O4tRzBZT.webp"
                />
                <span>Nokia</span>
              </a>
            </div>
          </div>
          <div className="box-5s6 style-fV4Hx" id="style-fV4Hx">
            <div className="header-gle">
              <div className="title-y8c">
                <h2>Shop By Price</h2>
              </div>
              <div className="box-dnb"></div>
            </div>
            <div className="block-zqw" style={{}}>
              <a href="/mobiles/price-below_5000">
                Under
                <strong>₹5,000</strong>
              </a>
              <a href="/mobiles/price-5000_to_10000">
                ₹5,000 -<strong>₹10,000</strong>
              </a>
              <a href="/mobiles/price-10000_to_15000">
                ₹10,000 -<strong>₹15,000</strong>
              </a>
              <a href="/mobiles/price-15000_to_20000">
                ₹15,000 -<strong>₹20,000</strong>
              </a>
              <a href="/mobiles/price-20000_to_30000">
                ₹20,000 -<strong>₹30,000</strong>
              </a>
              <a href="/mobiles/price-above_30000">
                Above
                <strong>₹30,000</strong>
              </a>
            </div>
          </div>
          <div className="box-5s6 style-fG6s8" id="style-fG6s8">
            <div className="header-gle">
              <div className="title-y8c">
                <h2>Shop By Features</h2>
              </div>
              <div className="box-dnb"></div>
            </div>
            <div className="block-zqw scr-jok" style={{}}>
              <a href="/mobiles/with-5g">
                <strong>5G</strong>
                Mobiles
              </a>
              <a href="/mobiles/with-4g">
                <strong>4G</strong>
                Mobiles
              </a>
              <a href="/mobiles/android-os">
                <strong>Android</strong>
                Phones
              </a>
              <a href="/mobiles/6_gb_above-ram">
                <strong>6GB RAM</strong>
                Mobiles
              </a>
              <a href="/mobiles/128_gb_above-memory">
                <strong>128GB</strong>
                Storage
              </a>
              <a href="/mobiles/upcoming-stock">
                <strong>Upcoming</strong>
                Mobiles
              </a>
              <a href="/mobiles/latest-mobiles">
                <strong>Latest</strong>
                Mobiles
              </a>
            </div>
          </div>
        </div>
        <div className="box-5s6" style={{}}>
          <div className="pg-prf-27p">
            <div>
              <div>16,626 Mobile Phones</div>
              <div className="sort-8zf">
                <svg
                  className="icon"
                  viewBox="0 0 24 24"
                  style={{ marginRight: "8px" }}
                >
                  <path d="M3,13H15V11H3M3,6V8H21V6M3,18H9V16H3V18Z"></path>
                </svg>
                &nbsp;Sort By
                <div
                  className="input-t5j label-qms style-2bqon"
                  id="style-2bqon"
                >
                  <div className="select-cz6">
                    <select className="input-xbf emp-zii">
                      <option value>Relevance</option>
                      <option value="pop">Popularity</option>
                      <option value="price:1">Price Low To High</option>
                      <option value="price">Price High To Low</option>
                      <option value="date">Date</option>
                      <option value="spec_score">Spec Score</option>
                      <option value="camera">Camera Resolution</option>
                      <option value="cpu">CPU Speed</option>
                      <option value="display">Display Size</option>
                      <option value="display-res">Display Resolution</option>
                      <option value="display-ppi">Display PPI</option>
                      <option value="mem">Inbuilt Memory</option>
                      <option value="ram">RAM</option>
                      <option value="rating">Rating</option>
                      <option value="battery">Battery Size</option>
                      <option value="thickness">Thickness</option>
                      <option value="price_drop">Price Drop</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="sm-nr5 list-5d7 size-grb img-bny">
            <div className="sm-hgy has-z31">
              <div className="sm-img-j65">
                <img
                  className="sm-nf8"
                  src="https://cdn1.smartprix.com/rx-iv7NVHK0A-w280-h280/xiaomi-redmi-note-13.webp"
                />
              </div>
              <a
                href="/mobiles/xiaomi-redmi-note-13-pro-max-5g-ppd1dcj37uyz"
                className="nam-o8n clamp-1r9"
              >
                <h2>Xiaomi Redmi Note 13 Pro Max 5G</h2>
              </a>
              <span className="pri-jde">₹22,999</span>
              <div className="rat-eh7">
                <span className="sm-xgv style-2lEGV" id="style-2lEGV">
                  <i></i>
                </span>
              </div>
              <ul className="sm-7hl spe-j4c">
                <li>Dual Sim, 3G, 4G, 5G, VoLTE, Wi-Fi, NFC, IR Blaster</li>
                <li>Snapdragon 7 Gen1, Octa Core, 2.4 GHz Processor</li>
                <li>12 GB RAM, 256 GB inbuilt</li>
                <li>5200 mAh Battery with 120W Fast Charging</li>
                <li>
                  6.67 inches, 1220 x 2712 px, 144 Hz Display with Punch Hole
                </li>
                <li>
                  200 MP + 13 MP + 8 MP Triple Rear &amp; 32 MP Front Camera
                </li>
                <li className="s-no-nds">Memory Card Not Supported</li>
                <li>Android v13</li>
              </ul>
              <div className="tag-fq1">
                <div className="sco-7o9 rank-2-3vo">
                  <b>87</b>
                  <small>Spec Score</small>
                </div>
              </div>
              <div className="sm-product-5jw">
                <button>
                  <svg className="icon" viewBox="0 0 24 24">
                    <path d="M17,13H13V17H11V13H7V11H11V7H13V11H17M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"></path>
                  </svg>
                  <small>Compare</small>
                </button>
                <button>
                  <svg className="icon" viewBox="0 0 24 24">
                    <path d="M12.1,18.55L12,18.65L11.89,18.55C7.14,14.24 4,11.39 4,8.5C4,6.5 5.5,5 7.5,5C9.04,5 10.54,6 11.07,7.36H12.93C13.46,6 14.96,5 16.5,5C18.5,5 20,6.5 20,8.5C20,11.39 16.86,14.24 12.1,18.55M16.5,3C14.76,3 13.09,3.81 12,5.08C10.91,3.81 9.24,3 7.5,3C4.42,3 2,5.41 2,8.5C2,12.27 5.4,15.36 10.55,20.03L12,21.35L13.45,20.03C18.6,15.36 22,12.27 22,8.5C22,5.41 19.58,3 16.5,3Z"></path>
                  </svg>
                  <small>Like</small>
                </button>
                <a
                  className="sto-lp9"
                  href="https://l.smartprix.com/l?url=https%3A%2F%2Fwww.amazon.in%2Fs%3Fk%3DXiaomi%2520Redmi%2520Note%252013%2520Pro%2520Max%25205G%26rh%3Dp_n_availability%253A1318485031"
                >
                  <img
                    className="sm-nf8"
                    src="https://cdn1.smartprix.com/rx-iR2NxBi82-w32-h32/amazon.webp"
                  />
                  <small>Search →</small>
                </a>
              </div>
              <div className="tag-zmy">UPCOMING</div>
            </div>
            <div className="sm-hgy has-z31">
              <div className="sm-img-j65">
                <img
                  className="sm-nf8"
                  src="https://cdn1.smartprix.com/rx-incYGaGkq-w280-h280/xiaomi-redmi-note-13.webp"
                />
              </div>
              <a
                href="/mobiles/xiaomi-redmi-note-13-pro-plus-ppd17s27km27"
                className="nam-o8n clamp-1r9"
              >
                <h2>Xiaomi Redmi Note 13 Pro Plus</h2>
              </a>
              <span className="pri-jde">₹28,990</span>
              <div className="rat-eh7">
                <span className="sm-xgv style-nWTEj" id="style-nWTEj">
                  <i></i>
                </span>
              </div>
              <ul className="sm-7hl spe-j4c">
                <li>Dual Sim, 3G, 4G, 5G, VoLTE, Wi-Fi, NFC, IR Blaster</li>
                <li>Dimensity 7200 Ultra, Octa Core, 2.8 GHz Processor</li>
                <li>12 GB RAM, 256 GB inbuilt</li>
                <li>5000 mAh Battery with 120W Fast Charging</li>
                <li>
                  6.67 inches, 1220 x 2712 px, 120 Hz Display with Punch Hole
                </li>
                <li>
                  200 MP + 8 MP + 2 MP Triple Rear &amp; 16 MP Front Camera
                </li>
                <li className="s-no-nds">Memory Card Not Supported</li>
                <li>Android v13</li>
              </ul>
              <div className="tag-fq1">
                <div className="sco-7o9 rank-2-3vo">
                  <b>87</b>
                  <small>Spec Score</small>
                </div>
              </div>
              <div className="sm-product-5jw">
                <button>
                  <svg className="icon" viewBox="0 0 24 24">
                    <path d="M17,13H13V17H11V13H7V11H11V7H13V11H17M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"></path>
                  </svg>
                  <small>Compare</small>
                </button>
                <button>
                  <svg className="icon" viewBox="0 0 24 24">
                    <path d="M12.1,18.55L12,18.65L11.89,18.55C7.14,14.24 4,11.39 4,8.5C4,6.5 5.5,5 7.5,5C9.04,5 10.54,6 11.07,7.36H12.93C13.46,6 14.96,5 16.5,5C18.5,5 20,6.5 20,8.5C20,11.39 16.86,14.24 12.1,18.55M16.5,3C14.76,3 13.09,3.81 12,5.08C10.91,3.81 9.24,3 7.5,3C4.42,3 2,5.41 2,8.5C2,12.27 5.4,15.36 10.55,20.03L12,21.35L13.45,20.03C18.6,15.36 22,12.27 22,8.5C22,5.41 19.58,3 16.5,3Z"></path>
                  </svg>
                  <small>Like</small>
                </button>
                <a
                  className="sto-lp9"
                  href="https://l.smartprix.com/l?k=12eB0idvQ0dqPH1WI5H~s9zbhrhAgTYBOr3Uh7hBnYcusUa5ZcFa3YaFcAsnhNcFssucWtHGcFUs3ahrhhaFhrhrhhacBrWahrhrBi5GFoGOnoGhrFB5qkw0Sn6fPIlq"
                >
                  <img
                    className="sm-nf8"
                    src="https://cdn1.smartprix.com/rx-i1jV84HS1-w32-h32/flipkart.webp"
                  />
                  <small>Search →</small>
                </a>
              </div>
              <div className="tag-zmy">UPCOMING</div>
            </div>

            <div className="sm-hgy has-z31">
              <div className="sm-img-j65">
                <img
                  className="sm-nf8"
                  src="https://cdn1.smartprix.com/rx-iGNQcfeDW-w280-h280/realme-gt-5-pro.webp"
                />
              </div>
              <a
                href="/mobiles/realme-gt-5-pro-ppd1bkqf6u4j"
                className="nam-o8n clamp-1r9"
              >
                <h2>Realme GT 5 Pro</h2>
              </a>
              <span className="pri-jde">₹38,990</span>
              <div className="rat-eh7">
                <span className="sm-xgv style-WGlP6" id="style-WGlP6">
                  <i></i>
                </span>
              </div>
              <ul className="sm-7hl spe-j4c">
                <li>Dual Sim, 3G, 4G, 5G, VoLTE, Wi-Fi, NFC, IR Blaster</li>
                <li>Snapdragon 8 Gen3, Octa Core, 3.3 GHz Processor</li>
                <li>12 GB RAM, 256 GB inbuilt</li>
                <li>5400 mAh Battery with 100W Fast Charging</li>
                <li>
                  6.78 inches, 1264 x 2780 px, 144 Hz Display with Punch Hole
                </li>
                <li>
                  50 MP + 50 MP + 8 MP Triple Rear &amp; 32 MP Front Camera
                </li>
                <li className="s-no-nds">Memory Card Not Supported</li>
                <li>Android v14</li>
              </ul>
              <div className="tag-fq1">
                <div className="sco-7o9 rank-2-3vo">
                  <b>89</b>
                  <small>Spec Score</small>
                </div>
              </div>
              <div className="sm-product-5jw">
                <button>
                  <svg className="icon" viewBox="0 0 24 24">
                    <path d="M17,13H13V17H11V13H7V11H11V7H13V11H17M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"></path>
                  </svg>
                  <small>Compare</small>
                </button>
                <button>
                  <svg className="icon" viewBox="0 0 24 24">
                    <path d="M12.1,18.55L12,18.65L11.89,18.55C7.14,14.24 4,11.39 4,8.5C4,6.5 5.5,5 7.5,5C9.04,5 10.54,6 11.07,7.36H12.93C13.46,6 14.96,5 16.5,5C18.5,5 20,6.5 20,8.5C20,11.39 16.86,14.24 12.1,18.55M16.5,3C14.76,3 13.09,3.81 12,5.08C10.91,3.81 9.24,3 7.5,3C4.42,3 2,5.41 2,8.5C2,12.27 5.4,15.36 10.55,20.03L12,21.35L13.45,20.03C18.6,15.36 22,12.27 22,8.5C22,5.41 19.58,3 16.5,3Z"></path>
                  </svg>
                  <small>Like</small>
                </button>
                <a
                  className="sto-lp9"
                  href="https://l.smartprix.com/l?url=https%3A%2F%2Fwww.amazon.in%2Fs%3Fk%3DRealme%2520GT%25205%2520Pro%26rh%3Dp_n_availability%253A1318485031"
                >
                  <img
                    className="sm-nf8"
                    src="https://cdn1.smartprix.com/rx-iR2NxBi82-w32-h32/amazon.webp"
                  />
                  <small>Search →</small>
                </a>
              </div>
              <div className="tag-zmy">UPCOMING</div>
            </div>
          </div>
          <div className="sm-load-6e4">Load More</div>
        </div>
        <sm-dap className="p-34y t-mli style-ibg6j" id="style-ibg6j">
          <div>
            <div>
              <div id="goo-lpt" className="style-4Bdc4"></div>
            </div>
          </div>
        </sm-dap>
        <div className="box-5s6" style={{}}>
          <div className="header-gle">
            <div className="title-y8c">
              <h2>Discuss</h2>
              <small>1463 Comments</small>
            </div>
          </div>
          <div className="sm-dx1">
            <div className="sm-discuss-j6o">
              <form className="form-m6e pad-nmo">
                <div className="input-t5j label-qms">
                  <textarea
                    name="content"
                    placeholder="Add a new comment"
                    className="input-xbf emp-zii"
                    defaultValue={"              "}
                  />
                </div>
              </form>
            </div>
            <div className="sm-6kg comment-fbf">
              <div className="comment-v7n comment-csz">
                <div className="u-elj">
                  <img
                    className="sm-nf8 avatar-7hc"
                    src="https://cdn1.smartprix.com/rx-ictOs3lZn-w50-h50/ctOs3lZn.webp"
                  />
                  <div className="nam-o8n">sanjay kumar</div>
                  <div className="poi-odw">@sanjay_havulomi</div>
                </div>
                <div className="dat-ziy">4 years ago</div>
                <p className="content-fzr">
                  Bhai log mujhe samsung galaxy m30s or redmi note 8pro me se
                  kaun sa lena chahiye ?aur nkiyon?
                </p>
                <div className="act-3n8">
                  <div>
                    <div className="btn-gwe style-KWIja" id="style-KWIja">
                      <svg className="icon" viewBox="0 0 24 24">
                        <path d="M23,10C23,8.89 22.1,8 21,8H14.68L15.64,3.43C15.66,3.33 15.67,3.22 15.67,3.11C15.67,2.7 15.5,2.32 15.23,2.05L14.17,1L7.59,7.58C7.22,7.95 7,8.45 7,9V19A2,2 0 0,0 9,21H18C18.83,21 19.54,20.5 19.84,19.78L22.86,12.73C22.95,12.5 23,12.26 23,12V10M1,21H5V9H1V21Z"></path>
                      </svg>
                      <span>363</span>
                    </div>
                    <div className="btn-gwe">
                      <svg className="icon" viewBox="0 0 24 24">
                        <path d="M19,15H23V3H19M15,3H6C5.17,3 4.46,3.5 4.16,4.22L1.14,11.27C1.05,11.5 1,11.74 1,12V14A2,2 0 0,0 3,16H9.31L8.36,20.57C8.34,20.67 8.33,20.77 8.33,20.88C8.33,21.3 8.5,21.67 8.77,21.94L9.83,23L16.41,16.41C16.78,16.05 17,15.55 17,15V5C17,3.89 16.1,3 15,3Z"></path>
                      </svg>
                      <span>275</span>
                    </div>
                  </div>
                  <div className="btn-gwe rep-w1o">
                    <svg className="icon" viewBox="0 0 24 24">
                      <path d="M18,8H6V6H18V8M18,11H6V9H18V11M18,14H6V12H18V14M22,4A2,2 0 0,0 20,2H4A2,2 0 0,0 2,4V16A2,2 0 0,0 4,18H18L22,22V4Z"></path>
                    </svg>
                    <span>Reply</span>
                  </div>
                  <div className="btn-gwe">
                    <svg className="icon" viewBox="0 0 24 24">
                      <path d="M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="sm-thread-pj6">
                <div className="sm-6kg comment-fbf">
                  <div className="comment-v7n comment-csz">
                    <div className="u-elj">
                      <img
                        className="sm-nf8 avatar-7hc"
                        src="https://cdn1.smartprix.com/rx-iNKmvyBiv-w50-h50/NKmvyBiv.webp"
                      />
                      <div className="nam-o8n">Vi</div>
                      <div className="poi-odw">@vaseem_wecusopi</div>
                    </div>
                    <div className="dat-ziy">3 years ago</div>
                    <p className="content-fzr">
                      Bettery and display m30s For gameing and performance redmi
                      not 8 pro
                    </p>
                    <div className="act-3n8">
                      <div>
                        <div className="btn-gwe style-Wktn6" id="style-Wktn6">
                          <svg className="icon" viewBox="0 0 24 24">
                            <path d="M23,10C23,8.89 22.1,8 21,8H14.68L15.64,3.43C15.66,3.33 15.67,3.22 15.67,3.11C15.67,2.7 15.5,2.32 15.23,2.05L14.17,1L7.59,7.58C7.22,7.95 7,8.45 7,9V19A2,2 0 0,0 9,21H18C18.83,21 19.54,20.5 19.84,19.78L22.86,12.73C22.95,12.5 23,12.26 23,12V10M1,21H5V9H1V21Z"></path>
                          </svg>
                          <span>74</span>
                        </div>
                        <div className="btn-gwe">
                          <svg className="icon" viewBox="0 0 24 24">
                            <path d="M19,15H23V3H19M15,3H6C5.17,3 4.46,3.5 4.16,4.22L1.14,11.27C1.05,11.5 1,11.74 1,12V14A2,2 0 0,0 3,16H9.31L8.36,20.57C8.34,20.67 8.33,20.77 8.33,20.88C8.33,21.3 8.5,21.67 8.77,21.94L9.83,23L16.41,16.41C16.78,16.05 17,15.55 17,15V5C17,3.89 16.1,3 15,3Z"></path>
                          </svg>
                          <span>37</span>
                        </div>
                      </div>
                      <div className="btn-gwe">
                        <svg className="icon" viewBox="0 0 24 24">
                          <path d="M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="sm-6kg comment-fbf">
                  <div className="comment-v7n comment-csz">
                    <div className="u-elj">
                      <img
                        className="sm-nf8 avatar-7hc"
                        src="https://cdn1.smartprix.com/rx-iP2pccUEC-w50-h50/P2pccUEC.webp"
                      />
                      <div className="nam-o8n">leeladhar choudhary</div>
                      <div className="poi-odw">@leeladhar_xijiheje</div>
                    </div>
                    <div className="dat-ziy">3 years ago</div>
                    <p className="content-fzr">Aap m30s lejiye</p>
                    <div className="act-3n8">
                      <div>
                        <div className="btn-gwe style-629mv" id="style-629mv">
                          <svg className="icon" viewBox="0 0 24 24">
                            <path d="M23,10C23,8.89 22.1,8 21,8H14.68L15.64,3.43C15.66,3.33 15.67,3.22 15.67,3.11C15.67,2.7 15.5,2.32 15.23,2.05L14.17,1L7.59,7.58C7.22,7.95 7,8.45 7,9V19A2,2 0 0,0 9,21H18C18.83,21 19.54,20.5 19.84,19.78L22.86,12.73C22.95,12.5 23,12.26 23,12V10M1,21H5V9H1V21Z"></path>
                          </svg>
                          <span>53</span>
                        </div>
                        <div className="btn-gwe">
                          <svg className="icon" viewBox="0 0 24 24">
                            <path d="M19,15H23V3H19M15,3H6C5.17,3 4.46,3.5 4.16,4.22L1.14,11.27C1.05,11.5 1,11.74 1,12V14A2,2 0 0,0 3,16H9.31L8.36,20.57C8.34,20.67 8.33,20.77 8.33,20.88C8.33,21.3 8.5,21.67 8.77,21.94L9.83,23L16.41,16.41C16.78,16.05 17,15.55 17,15V5C17,3.89 16.1,3 15,3Z"></path>
                          </svg>
                          <span>34</span>
                        </div>
                      </div>
                      <div className="btn-gwe">
                        <svg className="icon" viewBox="0 0 24 24">
                          <path d="M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="sm-6kg comment-fbf">
                  <div className="comment-v7n comment-csz">
                    <div className="u-elj">
                      <img
                        className="sm-nf8 avatar-7hc"
                        src="https://cdn1.smartprix.com/rx-iADUSAu39-w50-h50/ADUSAu39.webp"
                      />
                      <div className="nam-o8n">Real Tiger</div>
                      <div className="poi-odw">@real_kabujidi</div>
                    </div>
                    <div className="dat-ziy">4 years ago</div>
                    <p className="content-fzr">Redmi note 8pro</p>
                    <div className="act-3n8">
                      <div>
                        <div className="btn-gwe style-R7xqo" id="style-R7xqo">
                          <svg className="icon" viewBox="0 0 24 24">
                            <path d="M23,10C23,8.89 22.1,8 21,8H14.68L15.64,3.43C15.66,3.33 15.67,3.22 15.67,3.11C15.67,2.7 15.5,2.32 15.23,2.05L14.17,1L7.59,7.58C7.22,7.95 7,8.45 7,9V19A2,2 0 0,0 9,21H18C18.83,21 19.54,20.5 19.84,19.78L22.86,12.73C22.95,12.5 23,12.26 23,12V10M1,21H5V9H1V21Z"></path>
                          </svg>
                          <span>59</span>
                        </div>
                        <div className="btn-gwe">
                          <svg className="icon" viewBox="0 0 24 24">
                            <path d="M19,15H23V3H19M15,3H6C5.17,3 4.46,3.5 4.16,4.22L1.14,11.27C1.05,11.5 1,11.74 1,12V14A2,2 0 0,0 3,16H9.31L8.36,20.57C8.34,20.67 8.33,20.77 8.33,20.88C8.33,21.3 8.5,21.67 8.77,21.94L9.83,23L16.41,16.41C16.78,16.05 17,15.55 17,15V5C17,3.89 16.1,3 15,3Z"></path>
                          </svg>
                          <span>59</span>
                        </div>
                      </div>
                      <div className="btn-gwe">
                        <svg className="icon" viewBox="0 0 24 24">
                          <path d="M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="sm-6kg comment-fbf">
                  <div className="comment-v7n comment-csz">
                    <div className="u-elj">
                      <img
                        className="sm-nf8 avatar-7hc"
                        src="https://cdn1.smartprix.com/rx-isSHd3ozq-w50-h50/sSHd3ozq.webp"
                      />
                      <div className="nam-o8n">Rakesh kumar</div>
                      <div className="poi-odw">@rakesh_niyowiya</div>
                    </div>
                    <div className="dat-ziy">4 years ago</div>
                    <p className="content-fzr">note 8 pro</p>
                    <div className="act-3n8">
                      <div>
                        <div className="btn-gwe style-XN558" id="style-XN558">
                          <svg className="icon" viewBox="0 0 24 24">
                            <path d="M23,10C23,8.89 22.1,8 21,8H14.68L15.64,3.43C15.66,3.33 15.67,3.22 15.67,3.11C15.67,2.7 15.5,2.32 15.23,2.05L14.17,1L7.59,7.58C7.22,7.95 7,8.45 7,9V19A2,2 0 0,0 9,21H18C18.83,21 19.54,20.5 19.84,19.78L22.86,12.73C22.95,12.5 23,12.26 23,12V10M1,21H5V9H1V21Z"></path>
                          </svg>
                          <span>38</span>
                        </div>
                        <div className="btn-gwe">
                          <svg className="icon" viewBox="0 0 24 24">
                            <path d="M19,15H23V3H19M15,3H6C5.17,3 4.46,3.5 4.16,4.22L1.14,11.27C1.05,11.5 1,11.74 1,12V14A2,2 0 0,0 3,16H9.31L8.36,20.57C8.34,20.67 8.33,20.77 8.33,20.88C8.33,21.3 8.5,21.67 8.77,21.94L9.83,23L16.41,16.41C16.78,16.05 17,15.55 17,15V5C17,3.89 16.1,3 15,3Z"></path>
                          </svg>
                          <span>40</span>
                        </div>
                      </div>
                      <div className="btn-gwe">
                        <svg className="icon" viewBox="0 0 24 24">
                          <path d="M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="sm-6kg comment-fbf">
                  <div className="comment-v7n comment-csz">
                    <div className="u-elj">
                      <img
                        className="sm-nf8 avatar-7hc"
                        src="https://cdn1.smartprix.com/rx-ibwAHBrDt-w50-h50/bwAHBrDt.webp"
                      />
                      <div className="nam-o8n">Subhadeep sarkar</div>
                      <div className="poi-odw">@subhadeep_cogaruru</div>
                    </div>
                    <div className="dat-ziy">4 years ago</div>
                    <p className="content-fzr">
                      note 8 pro no comparison in performance
                    </p>
                    <div className="act-3n8">
                      <div>
                        <div className="btn-gwe style-VMYXd" id="style-VMYXd">
                          <svg className="icon" viewBox="0 0 24 24">
                            <path d="M23,10C23,8.89 22.1,8 21,8H14.68L15.64,3.43C15.66,3.33 15.67,3.22 15.67,3.11C15.67,2.7 15.5,2.32 15.23,2.05L14.17,1L7.59,7.58C7.22,7.95 7,8.45 7,9V19A2,2 0 0,0 9,21H18C18.83,21 19.54,20.5 19.84,19.78L22.86,12.73C22.95,12.5 23,12.26 23,12V10M1,21H5V9H1V21Z"></path>
                          </svg>
                          <span>52</span>
                        </div>
                        <div className="btn-gwe">
                          <svg className="icon" viewBox="0 0 24 24">
                            <path d="M19,15H23V3H19M15,3H6C5.17,3 4.46,3.5 4.16,4.22L1.14,11.27C1.05,11.5 1,11.74 1,12V14A2,2 0 0,0 3,16H9.31L8.36,20.57C8.34,20.67 8.33,20.77 8.33,20.88C8.33,21.3 8.5,21.67 8.77,21.94L9.83,23L16.41,16.41C16.78,16.05 17,15.55 17,15V5C17,3.89 16.1,3 15,3Z"></path>
                          </svg>
                          <span>61</span>
                        </div>
                      </div>
                      <div className="btn-gwe">
                        <svg className="icon" viewBox="0 0 24 24">
                          <path d="M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="sm-thread-iwv">Show More Replies (162)</div>
              </div>
            </div>
            <div className="sm-6kg comment-fbf">
              <div className="comment-v7n comment-csz">
                <div className="u-elj">
                  <img
                    className="sm-nf8 avatar-7hc"
                    src="https://cdn1.smartprix.com/rx-i6aAlCH97-w50-h50/6aAlCH97.webp"
                  />
                  <div className="nam-o8n">Gaming Lover</div>
                  <div className="poi-odw">@gaming_moxumupu</div>
                </div>
                <div className="dat-ziy">5 years ago</div>
                <p className="content-fzr">
                  muje ik flashship phone chaheya yrr 40,000 tak konsa phn best
                  rahe ga mai oneplus 6t ka soch kaha hu yrr koi suggest kro
                  plzzzz
                </p>
                <div className="act-3n8">
                  <div>
                    <div className="btn-gwe style-WheS9" id="style-WheS9">
                      <svg className="icon" viewBox="0 0 24 24">
                        <path d="M23,10C23,8.89 22.1,8 21,8H14.68L15.64,3.43C15.66,3.33 15.67,3.22 15.67,3.11C15.67,2.7 15.5,2.32 15.23,2.05L14.17,1L7.59,7.58C7.22,7.95 7,8.45 7,9V19A2,2 0 0,0 9,21H18C18.83,21 19.54,20.5 19.84,19.78L22.86,12.73C22.95,12.5 23,12.26 23,12V10M1,21H5V9H1V21Z"></path>
                      </svg>
                      <span>42</span>
                    </div>
                    <div className="btn-gwe">
                      <svg className="icon" viewBox="0 0 24 24">
                        <path d="M19,15H23V3H19M15,3H6C5.17,3 4.46,3.5 4.16,4.22L1.14,11.27C1.05,11.5 1,11.74 1,12V14A2,2 0 0,0 3,16H9.31L8.36,20.57C8.34,20.67 8.33,20.77 8.33,20.88C8.33,21.3 8.5,21.67 8.77,21.94L9.83,23L16.41,16.41C16.78,16.05 17,15.55 17,15V5C17,3.89 16.1,3 15,3Z"></path>
                      </svg>
                      <span>51</span>
                    </div>
                  </div>
                  <div className="btn-gwe rep-w1o">
                    <svg className="icon" viewBox="0 0 24 24">
                      <path d="M18,8H6V6H18V8M18,11H6V9H18V11M18,14H6V12H18V14M22,4A2,2 0 0,0 20,2H4A2,2 0 0,0 2,4V16A2,2 0 0,0 4,18H18L22,22V4Z"></path>
                    </svg>
                    <span>Reply</span>
                  </div>
                  <div className="btn-gwe">
                    <svg className="icon" viewBox="0 0 24 24">
                      <path d="M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="sm-thread-pj6">
                <div className="sm-6kg comment-fbf">
                  <div className="comment-v7n comment-csz">
                    <div className="u-elj">
                      <img
                        className="sm-nf8 avatar-7hc"
                        src="https://cdn1.smartprix.com/rx-iOgnAVuV1-w50-h50/OgnAVuV1.webp"
                      />
                      <div className="nam-o8n">Brij Mohan</div>
                      <div className="poi-odw">@abm</div>
                    </div>
                    <div className="dat-ziy">5 years ago</div>
                    <p className="content-fzr">Koi bhi le mgr mi nahi</p>
                    <div className="act-3n8">
                      <div>
                        <div className="btn-gwe style-l5jee" id="style-l5jee">
                          <svg className="icon" viewBox="0 0 24 24">
                            <path d="M23,10C23,8.89 22.1,8 21,8H14.68L15.64,3.43C15.66,3.33 15.67,3.22 15.67,3.11C15.67,2.7 15.5,2.32 15.23,2.05L14.17,1L7.59,7.58C7.22,7.95 7,8.45 7,9V19A2,2 0 0,0 9,21H18C18.83,21 19.54,20.5 19.84,19.78L22.86,12.73C22.95,12.5 23,12.26 23,12V10M1,21H5V9H1V21Z"></path>
                          </svg>
                          <span>70</span>
                        </div>
                        <div className="btn-gwe">
                          <svg className="icon" viewBox="0 0 24 24">
                            <path d="M19,15H23V3H19M15,3H6C5.17,3 4.46,3.5 4.16,4.22L1.14,11.27C1.05,11.5 1,11.74 1,12V14A2,2 0 0,0 3,16H9.31L8.36,20.57C8.34,20.67 8.33,20.77 8.33,20.88C8.33,21.3 8.5,21.67 8.77,21.94L9.83,23L16.41,16.41C16.78,16.05 17,15.55 17,15V5C17,3.89 16.1,3 15,3Z"></path>
                          </svg>
                          <span>39</span>
                        </div>
                      </div>
                      <div className="btn-gwe">
                        <svg className="icon" viewBox="0 0 24 24">
                          <path d="M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="sm-6kg comment-fbf">
                  <div className="comment-v7n comment-csz">
                    <div className="u-elj">
                      <img
                        className="sm-nf8 avatar-7hc"
                        src="https://cdn1.smartprix.com/rx-iSYEypEQE-w50-h50/SYEypEQE.webp"
                      />
                      <div className="nam-o8n">Vicky</div>
                      <div className="poi-odw">@vicky_royiqeca</div>
                    </div>
                    <div className="dat-ziy">4 years ago</div>
                    <p className="content-fzr">ASUS ROG II</p>
                    <div className="act-3n8">
                      <div>
                        <div className="btn-gwe style-V3nkG" id="style-V3nkG">
                          <svg className="icon" viewBox="0 0 24 24">
                            <path d="M23,10C23,8.89 22.1,8 21,8H14.68L15.64,3.43C15.66,3.33 15.67,3.22 15.67,3.11C15.67,2.7 15.5,2.32 15.23,2.05L14.17,1L7.59,7.58C7.22,7.95 7,8.45 7,9V19A2,2 0 0,0 9,21H18C18.83,21 19.54,20.5 19.84,19.78L22.86,12.73C22.95,12.5 23,12.26 23,12V10M1,21H5V9H1V21Z"></path>
                          </svg>
                          <span>40</span>
                        </div>
                        <div className="btn-gwe">
                          <svg className="icon" viewBox="0 0 24 24">
                            <path d="M19,15H23V3H19M15,3H6C5.17,3 4.46,3.5 4.16,4.22L1.14,11.27C1.05,11.5 1,11.74 1,12V14A2,2 0 0,0 3,16H9.31L8.36,20.57C8.34,20.67 8.33,20.77 8.33,20.88C8.33,21.3 8.5,21.67 8.77,21.94L9.83,23L16.41,16.41C16.78,16.05 17,15.55 17,15V5C17,3.89 16.1,3 15,3Z"></path>
                          </svg>
                          <span>14</span>
                        </div>
                      </div>
                      <div className="btn-gwe">
                        <svg className="icon" viewBox="0 0 24 24">
                          <path d="M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="sm-6kg comment-fbf">
                  <div className="comment-v7n comment-csz">
                    <div className="u-elj">
                      <img
                        className="sm-nf8 avatar-7hc"
                        src="https://cdn1.smartprix.com/rx-ihDzsDFn6-w50-h50/hDzsDFn6.webp"
                      />
                      <div className="nam-o8n">viren kavishwar</div>
                      <div className="poi-odw">@viren_kuqapepu</div>
                    </div>
                    <div className="dat-ziy">4 years ago</div>
                    <p className="content-fzr">
                      Poco f1 le or baki ke payse saving kar...
                    </p>
                    <div className="act-3n8">
                      <div>
                        <div className="btn-gwe style-qNNEP" id="style-qNNEP">
                          <svg className="icon" viewBox="0 0 24 24">
                            <path d="M23,10C23,8.89 22.1,8 21,8H14.68L15.64,3.43C15.66,3.33 15.67,3.22 15.67,3.11C15.67,2.7 15.5,2.32 15.23,2.05L14.17,1L7.59,7.58C7.22,7.95 7,8.45 7,9V19A2,2 0 0,0 9,21H18C18.83,21 19.54,20.5 19.84,19.78L22.86,12.73C22.95,12.5 23,12.26 23,12V10M1,21H5V9H1V21Z"></path>
                          </svg>
                          <span>52</span>
                        </div>
                        <div className="btn-gwe">
                          <svg className="icon" viewBox="0 0 24 24">
                            <path d="M19,15H23V3H19M15,3H6C5.17,3 4.46,3.5 4.16,4.22L1.14,11.27C1.05,11.5 1,11.74 1,12V14A2,2 0 0,0 3,16H9.31L8.36,20.57C8.34,20.67 8.33,20.77 8.33,20.88C8.33,21.3 8.5,21.67 8.77,21.94L9.83,23L16.41,16.41C16.78,16.05 17,15.55 17,15V5C17,3.89 16.1,3 15,3Z"></path>
                          </svg>
                          <span>48</span>
                        </div>
                      </div>
                      <div className="btn-gwe">
                        <svg className="icon" viewBox="0 0 24 24">
                          <path d="M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="sm-6kg comment-fbf">
                  <div className="comment-v7n comment-csz">
                    <div className="u-elj">
                      <img
                        className="sm-nf8 avatar-7hc"
                        src="https://cdn1.smartprix.com/rx-iUs8xodsy-w50-h50/Us8xodsy.webp"
                      />
                      <div className="nam-o8n">Omkar Kore</div>
                      <div className="poi-odw">@omkar_gejihasi</div>
                    </div>
                    <div className="dat-ziy">4 years ago</div>
                    <p className="content-fzr">1+ 7t is best option</p>
                    <div className="act-3n8">
                      <div>
                        <div className="btn-gwe style-FCJna" id="style-FCJna">
                          <svg className="icon" viewBox="0 0 24 24">
                            <path d="M23,10C23,8.89 22.1,8 21,8H14.68L15.64,3.43C15.66,3.33 15.67,3.22 15.67,3.11C15.67,2.7 15.5,2.32 15.23,2.05L14.17,1L7.59,7.58C7.22,7.95 7,8.45 7,9V19A2,2 0 0,0 9,21H18C18.83,21 19.54,20.5 19.84,19.78L22.86,12.73C22.95,12.5 23,12.26 23,12V10M1,21H5V9H1V21Z"></path>
                          </svg>
                          <span>26</span>
                        </div>
                        <div className="btn-gwe">
                          <svg className="icon" viewBox="0 0 24 24">
                            <path d="M19,15H23V3H19M15,3H6C5.17,3 4.46,3.5 4.16,4.22L1.14,11.27C1.05,11.5 1,11.74 1,12V14A2,2 0 0,0 3,16H9.31L8.36,20.57C8.34,20.67 8.33,20.77 8.33,20.88C8.33,21.3 8.5,21.67 8.77,21.94L9.83,23L16.41,16.41C16.78,16.05 17,15.55 17,15V5C17,3.89 16.1,3 15,3Z"></path>
                          </svg>
                          <span>17</span>
                        </div>
                      </div>
                      <div className="btn-gwe">
                        <svg className="icon" viewBox="0 0 24 24">
                          <path d="M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="sm-6kg comment-fbf">
                  <div className="comment-v7n comment-csz">
                    <div className="u-elj">
                      <img
                        className="sm-nf8 avatar-7hc"
                        src="https://cdn1.smartprix.com/rx-i81KdA5Ky-w50-h50/81KdA5Ky.webp"
                      />
                      <div className="nam-o8n">EE-004 Lokanadh</div>
                      <div className="poi-odw">@ee-004_yozodofa</div>
                    </div>
                    <div className="dat-ziy">2 years ago</div>
                    <p className="content-fzr">
                      Bhai abh IQOO 7 aaya it's most affordable flagship phone
                    </p>
                    <div className="act-3n8">
                      <div>
                        <div className="btn-gwe style-ixhlz" id="style-ixhlz">
                          <svg className="icon" viewBox="0 0 24 24">
                            <path d="M23,10C23,8.89 22.1,8 21,8H14.68L15.64,3.43C15.66,3.33 15.67,3.22 15.67,3.11C15.67,2.7 15.5,2.32 15.23,2.05L14.17,1L7.59,7.58C7.22,7.95 7,8.45 7,9V19A2,2 0 0,0 9,21H18C18.83,21 19.54,20.5 19.84,19.78L22.86,12.73C22.95,12.5 23,12.26 23,12V10M1,21H5V9H1V21Z"></path>
                          </svg>
                          <span>13</span>
                        </div>
                        <div className="btn-gwe">
                          <svg className="icon" viewBox="0 0 24 24">
                            <path d="M19,15H23V3H19M15,3H6C5.17,3 4.46,3.5 4.16,4.22L1.14,11.27C1.05,11.5 1,11.74 1,12V14A2,2 0 0,0 3,16H9.31L8.36,20.57C8.34,20.67 8.33,20.77 8.33,20.88C8.33,21.3 8.5,21.67 8.77,21.94L9.83,23L16.41,16.41C16.78,16.05 17,15.55 17,15V5C17,3.89 16.1,3 15,3Z"></path>
                          </svg>
                          <span>7</span>
                        </div>
                      </div>
                      <div className="btn-gwe">
                        <svg className="icon" viewBox="0 0 24 24">
                          <path d="M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="sm-thread-iwv">Show More Replies (52)</div>
              </div>
            </div>
            <div className="sm-6kg comment-fbf">
              <div className="comment-v7n comment-csz">
                <div className="u-elj">
                  <img
                    className="sm-nf8 avatar-7hc"
                    src="https://cdn1.smartprix.com/rx-iL2qkxbc4-w50-h50/L2qkxbc4.webp"
                  />
                  <div className="nam-o8n">GurMit KuMar</div>
                  <div className="poi-odw">@gurmit_meqapazo</div>
                </div>
                <div className="dat-ziy">4 years ago</div>
                <p className="content-fzr">
                  Which phone should buy? Redmi note 8 pro or realme XT? Please
                  tell me guys
                </p>
                <div className="act-3n8">
                  <div>
                    <div className="btn-gwe style-bfOo5" id="style-bfOo5">
                      <svg className="icon" viewBox="0 0 24 24">
                        <path d="M23,10C23,8.89 22.1,8 21,8H14.68L15.64,3.43C15.66,3.33 15.67,3.22 15.67,3.11C15.67,2.7 15.5,2.32 15.23,2.05L14.17,1L7.59,7.58C7.22,7.95 7,8.45 7,9V19A2,2 0 0,0 9,21H18C18.83,21 19.54,20.5 19.84,19.78L22.86,12.73C22.95,12.5 23,12.26 23,12V10M1,21H5V9H1V21Z"></path>
                      </svg>
                      <span>23</span>
                    </div>
                    <div className="btn-gwe">
                      <svg className="icon" viewBox="0 0 24 24">
                        <path d="M19,15H23V3H19M15,3H6C5.17,3 4.46,3.5 4.16,4.22L1.14,11.27C1.05,11.5 1,11.74 1,12V14A2,2 0 0,0 3,16H9.31L8.36,20.57C8.34,20.67 8.33,20.77 8.33,20.88C8.33,21.3 8.5,21.67 8.77,21.94L9.83,23L16.41,16.41C16.78,16.05 17,15.55 17,15V5C17,3.89 16.1,3 15,3Z"></path>
                      </svg>
                      <span>15</span>
                    </div>
                  </div>
                  <div className="btn-gwe rep-w1o">
                    <svg className="icon" viewBox="0 0 24 24">
                      <path d="M18,8H6V6H18V8M18,11H6V9H18V11M18,14H6V12H18V14M22,4A2,2 0 0,0 20,2H4A2,2 0 0,0 2,4V16A2,2 0 0,0 4,18H18L22,22V4Z"></path>
                    </svg>
                    <span>Reply</span>
                  </div>
                  <div className="btn-gwe">
                    <svg className="icon" viewBox="0 0 24 24">
                      <path d="M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="sm-thread-pj6">
                <div className="sm-6kg comment-fbf">
                  <div className="comment-v7n comment-csz">
                    <div className="u-elj">
                      <img
                        className="sm-nf8 avatar-7hc"
                        src="https://cdn1.smartprix.com/rx-i9fz7oYlt-w50-h50/9fz7oYlt.webp"
                      />
                      <div className="nam-o8n">Alpha lego</div>
                      <div className="poi-odw">@alpha_maqeneqo</div>
                    </div>
                    <div className="dat-ziy">4 years ago</div>
                    <p className="content-fzr">
                      Note 8 "Pro" i would not recommend pro version as it have
                      MediaTek Processor. MediaTek processors are buggy and not
                      open source. so you can go with Mi Note 8 (not pro
                      version) or Realme XT is good too.
                    </p>
                    <div className="act-3n8">
                      <div>
                        <div className="btn-gwe style-K4zWw" id="style-K4zWw">
                          <svg className="icon" viewBox="0 0 24 24">
                            <path d="M23,10C23,8.89 22.1,8 21,8H14.68L15.64,3.43C15.66,3.33 15.67,3.22 15.67,3.11C15.67,2.7 15.5,2.32 15.23,2.05L14.17,1L7.59,7.58C7.22,7.95 7,8.45 7,9V19A2,2 0 0,0 9,21H18C18.83,21 19.54,20.5 19.84,19.78L22.86,12.73C22.95,12.5 23,12.26 23,12V10M1,21H5V9H1V21Z"></path>
                          </svg>
                          <span>9</span>
                        </div>
                        <div className="btn-gwe">
                          <svg className="icon" viewBox="0 0 24 24">
                            <path d="M19,15H23V3H19M15,3H6C5.17,3 4.46,3.5 4.16,4.22L1.14,11.27C1.05,11.5 1,11.74 1,12V14A2,2 0 0,0 3,16H9.31L8.36,20.57C8.34,20.67 8.33,20.77 8.33,20.88C8.33,21.3 8.5,21.67 8.77,21.94L9.83,23L16.41,16.41C16.78,16.05 17,15.55 17,15V5C17,3.89 16.1,3 15,3Z"></path>
                          </svg>
                          <span>3</span>
                        </div>
                      </div>
                      <div className="btn-gwe">
                        <svg className="icon" viewBox="0 0 24 24">
                          <path d="M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="sm-6kg comment-fbf">
                  <div className="comment-v7n comment-csz">
                    <div className="u-elj">
                      <img
                        className="sm-nf8 avatar-7hc"
                        src="https://cdn1.smartprix.com/rx-i9GQf63uJ-w50-h50/9GQf63uJ.webp"
                      />
                      <div className="nam-o8n">Avdhesh Aks</div>
                      <div className="poi-odw">@avdhesh_cuxobifu</div>
                    </div>
                    <div className="dat-ziy">4 years ago</div>
                    <p className="content-fzr">Ya bro i also buy this XT bro</p>
                    <div className="act-3n8">
                      <div>
                        <div className="btn-gwe style-2Va8B" id="style-2Va8B">
                          <svg className="icon" viewBox="0 0 24 24">
                            <path d="M23,10C23,8.89 22.1,8 21,8H14.68L15.64,3.43C15.66,3.33 15.67,3.22 15.67,3.11C15.67,2.7 15.5,2.32 15.23,2.05L14.17,1L7.59,7.58C7.22,7.95 7,8.45 7,9V19A2,2 0 0,0 9,21H18C18.83,21 19.54,20.5 19.84,19.78L22.86,12.73C22.95,12.5 23,12.26 23,12V10M1,21H5V9H1V21Z"></path>
                          </svg>
                          <span>8</span>
                        </div>
                        <div className="btn-gwe">
                          <svg className="icon" viewBox="0 0 24 24">
                            <path d="M19,15H23V3H19M15,3H6C5.17,3 4.46,3.5 4.16,4.22L1.14,11.27C1.05,11.5 1,11.74 1,12V14A2,2 0 0,0 3,16H9.31L8.36,20.57C8.34,20.67 8.33,20.77 8.33,20.88C8.33,21.3 8.5,21.67 8.77,21.94L9.83,23L16.41,16.41C16.78,16.05 17,15.55 17,15V5C17,3.89 16.1,3 15,3Z"></path>
                          </svg>
                          <span>2</span>
                        </div>
                      </div>
                      <div className="btn-gwe">
                        <svg className="icon" viewBox="0 0 24 24">
                          <path d="M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="sm-6kg comment-fbf">
                  <div className="comment-v7n comment-csz">
                    <div className="u-elj">
                      <img
                        className="sm-nf8 avatar-7hc"
                        src="https://cdn1.smartprix.com/rx-iOwXgXVLW-w50-h50/OwXgXVLW.webp"
                      />
                      <div className="nam-o8n">Ajmal Shaikh</div>
                      <div className="poi-odw">@ajmal_vexeceli</div>
                    </div>
                    <div className="dat-ziy">1 year ago</div>
                    <p className="content-fzr">xt</p>
                    <div className="act-3n8">
                      <div>
                        <div className="btn-gwe style-RH48L" id="style-RH48L">
                          <svg className="icon" viewBox="0 0 24 24">
                            <path d="M23,10C23,8.89 22.1,8 21,8H14.68L15.64,3.43C15.66,3.33 15.67,3.22 15.67,3.11C15.67,2.7 15.5,2.32 15.23,2.05L14.17,1L7.59,7.58C7.22,7.95 7,8.45 7,9V19A2,2 0 0,0 9,21H18C18.83,21 19.54,20.5 19.84,19.78L22.86,12.73C22.95,12.5 23,12.26 23,12V10M1,21H5V9H1V21Z"></path>
                          </svg>
                          <span></span>
                        </div>
                        <div className="btn-gwe">
                          <svg className="icon" viewBox="0 0 24 24">
                            <path d="M19,15H23V3H19M15,3H6C5.17,3 4.46,3.5 4.16,4.22L1.14,11.27C1.05,11.5 1,11.74 1,12V14A2,2 0 0,0 3,16H9.31L8.36,20.57C8.34,20.67 8.33,20.77 8.33,20.88C8.33,21.3 8.5,21.67 8.77,21.94L9.83,23L16.41,16.41C16.78,16.05 17,15.55 17,15V5C17,3.89 16.1,3 15,3Z"></path>
                          </svg>
                          <span>2</span>
                        </div>
                      </div>
                      <div className="btn-gwe">
                        <svg className="icon" viewBox="0 0 24 24">
                          <path d="M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="sm-6kg comment-fbf">
                  <div className="comment-v7n comment-csz">
                    <div className="u-elj">
                      <img
                        className="sm-nf8 avatar-7hc"
                        src="https://cdn1.smartprix.com/rx-i9fz7oYlt-w50-h50/9fz7oYlt.webp"
                      />
                      <div className="nam-o8n">Alpha lego</div>
                      <div className="poi-odw">@alpha_maqeneqo</div>
                    </div>
                    <div className="dat-ziy">4 years ago</div>
                    <p className="content-fzr">
                      XT will be better...depends on budget.
                    </p>
                    <div className="act-3n8">
                      <div>
                        <div className="btn-gwe style-oIX5P" id="style-oIX5P">
                          <svg className="icon" viewBox="0 0 24 24">
                            <path d="M23,10C23,8.89 22.1,8 21,8H14.68L15.64,3.43C15.66,3.33 15.67,3.22 15.67,3.11C15.67,2.7 15.5,2.32 15.23,2.05L14.17,1L7.59,7.58C7.22,7.95 7,8.45 7,9V19A2,2 0 0,0 9,21H18C18.83,21 19.54,20.5 19.84,19.78L22.86,12.73C22.95,12.5 23,12.26 23,12V10M1,21H5V9H1V21Z"></path>
                          </svg>
                          <span>8</span>
                        </div>
                        <div className="btn-gwe">
                          <svg className="icon" viewBox="0 0 24 24">
                            <path d="M19,15H23V3H19M15,3H6C5.17,3 4.46,3.5 4.16,4.22L1.14,11.27C1.05,11.5 1,11.74 1,12V14A2,2 0 0,0 3,16H9.31L8.36,20.57C8.34,20.67 8.33,20.77 8.33,20.88C8.33,21.3 8.5,21.67 8.77,21.94L9.83,23L16.41,16.41C16.78,16.05 17,15.55 17,15V5C17,3.89 16.1,3 15,3Z"></path>
                          </svg>
                          <span>5</span>
                        </div>
                      </div>
                      <div className="btn-gwe">
                        <svg className="icon" viewBox="0 0 24 24">
                          <path d="M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="sm-6kg comment-fbf">
                  <div className="comment-v7n comment-csz">
                    <div className="u-elj">
                      <img
                        className="sm-nf8 avatar-7hc"
                        src="https://cdn1.smartprix.com/rx-ivvs6IaFj-w50-h50/vvs6IaFj.webp"
                      />
                      <div className="nam-o8n">Tacnical India</div>
                      <div className="poi-odw">@tacnical_ceyuliha</div>
                    </div>
                    <div className="dat-ziy">3 years ago</div>
                    <p className="content-fzr">Poco x2</p>
                    <div className="act-3n8">
                      <div>
                        <div className="btn-gwe style-EjUAk" id="style-EjUAk">
                          <svg className="icon" viewBox="0 0 24 24">
                            <path d="M23,10C23,8.89 22.1,8 21,8H14.68L15.64,3.43C15.66,3.33 15.67,3.22 15.67,3.11C15.67,2.7 15.5,2.32 15.23,2.05L14.17,1L7.59,7.58C7.22,7.95 7,8.45 7,9V19A2,2 0 0,0 9,21H18C18.83,21 19.54,20.5 19.84,19.78L22.86,12.73C22.95,12.5 23,12.26 23,12V10M1,21H5V9H1V21Z"></path>
                          </svg>
                          <span>4</span>
                        </div>
                        <div className="btn-gwe">
                          <svg className="icon" viewBox="0 0 24 24">
                            <path d="M19,15H23V3H19M15,3H6C5.17,3 4.46,3.5 4.16,4.22L1.14,11.27C1.05,11.5 1,11.74 1,12V14A2,2 0 0,0 3,16H9.31L8.36,20.57C8.34,20.67 8.33,20.77 8.33,20.88C8.33,21.3 8.5,21.67 8.77,21.94L9.83,23L16.41,16.41C16.78,16.05 17,15.55 17,15V5C17,3.89 16.1,3 15,3Z"></path>
                          </svg>
                          <span>1</span>
                        </div>
                      </div>
                      <div className="btn-gwe">
                        <svg className="icon" viewBox="0 0 24 24">
                          <path d="M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="sm-thread-iwv">Show More Replies (19)</div>
              </div>
            </div>
            <div className="sm-6kg comment-fbf">
              <div className="comment-v7n comment-csz">
                <div className="u-elj">
                  <img
                    className="sm-nf8 avatar-7hc"
                    src="https://cdn1.smartprix.com/rx-idummyusr-w50-h50/dummyusr.webp"
                  />
                  <div className="nam-o8n">Ajay chauhan</div>
                  <div className="poi-odw">@ajay_pisovuru</div>
                </div>
                <div className="dat-ziy">4 years ago</div>
                <p className="content-fzr">
                  Bhai log mujh rs.10000 aur 15000 ke beech lena h kaun sa achha
                  padega plzzz reply me
                </p>
                <div className="act-3n8">
                  <div>
                    <div className="btn-gwe style-YNWPz" id="style-YNWPz">
                      <svg className="icon" viewBox="0 0 24 24">
                        <path d="M23,10C23,8.89 22.1,8 21,8H14.68L15.64,3.43C15.66,3.33 15.67,3.22 15.67,3.11C15.67,2.7 15.5,2.32 15.23,2.05L14.17,1L7.59,7.58C7.22,7.95 7,8.45 7,9V19A2,2 0 0,0 9,21H18C18.83,21 19.54,20.5 19.84,19.78L22.86,12.73C22.95,12.5 23,12.26 23,12V10M1,21H5V9H1V21Z"></path>
                      </svg>
                      <span>24</span>
                    </div>
                    <div className="btn-gwe">
                      <svg className="icon" viewBox="0 0 24 24">
                        <path d="M19,15H23V3H19M15,3H6C5.17,3 4.46,3.5 4.16,4.22L1.14,11.27C1.05,11.5 1,11.74 1,12V14A2,2 0 0,0 3,16H9.31L8.36,20.57C8.34,20.67 8.33,20.77 8.33,20.88C8.33,21.3 8.5,21.67 8.77,21.94L9.83,23L16.41,16.41C16.78,16.05 17,15.55 17,15V5C17,3.89 16.1,3 15,3Z"></path>
                      </svg>
                      <span>31</span>
                    </div>
                  </div>
                  <div className="btn-gwe rep-w1o">
                    <svg className="icon" viewBox="0 0 24 24">
                      <path d="M18,8H6V6H18V8M18,11H6V9H18V11M18,14H6V12H18V14M22,4A2,2 0 0,0 20,2H4A2,2 0 0,0 2,4V16A2,2 0 0,0 4,18H18L22,22V4Z"></path>
                    </svg>
                    <span>Reply</span>
                  </div>
                  <div className="btn-gwe">
                    <svg className="icon" viewBox="0 0 24 24">
                      <path d="M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="sm-thread-pj6">
                <div className="sm-thread-iwv">Show Replies (23)</div>
              </div>
            </div>
            <div className="sm-6kg comment-fbf">
              <div className="comment-v7n comment-csz">
                <div className="u-elj">
                  <img
                    className="sm-nf8 avatar-7hc"
                    src="https://cdn1.smartprix.com/rx-iVZfp4VSU-w50-h50/VZfp4VSU.webp"
                  />
                  <div className="nam-o8n">Himadri Biswas</div>
                  <div className="poi-odw">@himadri_kolavibe</div>
                </div>
                <div className="dat-ziy">4 years ago</div>
                <p className="content-fzr">
                  Please suggest me best gaming phone under 15000
                </p>
                <div className="act-3n8">
                  <div>
                    <div className="btn-gwe style-SfIMB" id="style-SfIMB">
                      <svg className="icon" viewBox="0 0 24 24">
                        <path d="M23,10C23,8.89 22.1,8 21,8H14.68L15.64,3.43C15.66,3.33 15.67,3.22 15.67,3.11C15.67,2.7 15.5,2.32 15.23,2.05L14.17,1L7.59,7.58C7.22,7.95 7,8.45 7,9V19A2,2 0 0,0 9,21H18C18.83,21 19.54,20.5 19.84,19.78L22.86,12.73C22.95,12.5 23,12.26 23,12V10M1,21H5V9H1V21Z"></path>
                      </svg>
                      <span>19</span>
                    </div>
                    <div className="btn-gwe">
                      <svg className="icon" viewBox="0 0 24 24">
                        <path d="M19,15H23V3H19M15,3H6C5.17,3 4.46,3.5 4.16,4.22L1.14,11.27C1.05,11.5 1,11.74 1,12V14A2,2 0 0,0 3,16H9.31L8.36,20.57C8.34,20.67 8.33,20.77 8.33,20.88C8.33,21.3 8.5,21.67 8.77,21.94L9.83,23L16.41,16.41C16.78,16.05 17,15.55 17,15V5C17,3.89 16.1,3 15,3Z"></path>
                      </svg>
                      <span>20</span>
                    </div>
                  </div>
                  <div className="btn-gwe rep-w1o">
                    <svg className="icon" viewBox="0 0 24 24">
                      <path d="M18,8H6V6H18V8M18,11H6V9H18V11M18,14H6V12H18V14M22,4A2,2 0 0,0 20,2H4A2,2 0 0,0 2,4V16A2,2 0 0,0 4,18H18L22,22V4Z"></path>
                    </svg>
                    <span>Reply</span>
                  </div>
                  <div className="btn-gwe">
                    <svg className="icon" viewBox="0 0 24 24">
                      <path d="M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="sm-thread-pj6">
                <div className="sm-thread-iwv">Show Replies (20)</div>
              </div>
            </div>
            <div className="sm-6kg comment-fbf">
              <div className="comment-v7n comment-csz">
                <div className="u-elj">
                  <img
                    className="sm-nf8 avatar-7hc"
                    src="https://cdn1.smartprix.com/rx-idummyusr-w50-h50/dummyusr.webp"
                  />
                  <div className="nam-o8n">Appasaheb Wagare</div>
                  <div className="poi-odw">@appasaheb_kuwurama</div>
                </div>
                <div className="dat-ziy">4 years ago</div>
                <p className="content-fzr">
                  please suggest me best camera mobile phone under 18000rs.
                </p>
                <div className="act-3n8">
                  <div>
                    <div className="btn-gwe style-o2Eoi" id="style-o2Eoi">
                      <svg className="icon" viewBox="0 0 24 24">
                        <path d="M23,10C23,8.89 22.1,8 21,8H14.68L15.64,3.43C15.66,3.33 15.67,3.22 15.67,3.11C15.67,2.7 15.5,2.32 15.23,2.05L14.17,1L7.59,7.58C7.22,7.95 7,8.45 7,9V19A2,2 0 0,0 9,21H18C18.83,21 19.54,20.5 19.84,19.78L22.86,12.73C22.95,12.5 23,12.26 23,12V10M1,21H5V9H1V21Z"></path>
                      </svg>
                      <span>7</span>
                    </div>
                    <div className="btn-gwe">
                      <svg className="icon" viewBox="0 0 24 24">
                        <path d="M19,15H23V3H19M15,3H6C5.17,3 4.46,3.5 4.16,4.22L1.14,11.27C1.05,11.5 1,11.74 1,12V14A2,2 0 0,0 3,16H9.31L8.36,20.57C8.34,20.67 8.33,20.77 8.33,20.88C8.33,21.3 8.5,21.67 8.77,21.94L9.83,23L16.41,16.41C16.78,16.05 17,15.55 17,15V5C17,3.89 16.1,3 15,3Z"></path>
                      </svg>
                      <span>11</span>
                    </div>
                  </div>
                  <div className="btn-gwe rep-w1o">
                    <svg className="icon" viewBox="0 0 24 24">
                      <path d="M18,8H6V6H18V8M18,11H6V9H18V11M18,14H6V12H18V14M22,4A2,2 0 0,0 20,2H4A2,2 0 0,0 2,4V16A2,2 0 0,0 4,18H18L22,22V4Z"></path>
                    </svg>
                    <span>Reply</span>
                  </div>
                  <div className="btn-gwe">
                    <svg className="icon" viewBox="0 0 24 24">
                      <path d="M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="sm-thread-pj6">
                <div className="sm-thread-iwv">Show Replies (18)</div>
              </div>
            </div>
            <div className="sm-6kg comment-fbf">
              <div className="comment-v7n comment-csz">
                <div className="u-elj">
                  <img
                    className="sm-nf8 avatar-7hc"
                    src="https://cdn1.smartprix.com/rx-idummyusr-w50-h50/dummyusr.webp"
                  />
                  <div className="nam-o8n">Harshal Shah</div>
                  <div className="poi-odw">@harshal_kewiyape</div>
                </div>
                <div className="dat-ziy">5 years ago</div>
                <p className="content-fzr">
                  My budget is 12k to 15k. Which cellphone I should buy.? Asus
                  max pro me / honor 8x / real me up Or any other if u know
                  better..?
                </p>
                <div className="act-3n8">
                  <div>
                    <div className="btn-gwe style-RFs3b" id="style-RFs3b">
                      <svg className="icon" viewBox="0 0 24 24">
                        <path d="M23,10C23,8.89 22.1,8 21,8H14.68L15.64,3.43C15.66,3.33 15.67,3.22 15.67,3.11C15.67,2.7 15.5,2.32 15.23,2.05L14.17,1L7.59,7.58C7.22,7.95 7,8.45 7,9V19A2,2 0 0,0 9,21H18C18.83,21 19.54,20.5 19.84,19.78L22.86,12.73C22.95,12.5 23,12.26 23,12V10M1,21H5V9H1V21Z"></path>
                      </svg>
                      <span>22</span>
                    </div>
                    <div className="btn-gwe">
                      <svg className="icon" viewBox="0 0 24 24">
                        <path d="M19,15H23V3H19M15,3H6C5.17,3 4.46,3.5 4.16,4.22L1.14,11.27C1.05,11.5 1,11.74 1,12V14A2,2 0 0,0 3,16H9.31L8.36,20.57C8.34,20.67 8.33,20.77 8.33,20.88C8.33,21.3 8.5,21.67 8.77,21.94L9.83,23L16.41,16.41C16.78,16.05 17,15.55 17,15V5C17,3.89 16.1,3 15,3Z"></path>
                      </svg>
                      <span>17</span>
                    </div>
                  </div>
                  <div className="btn-gwe rep-w1o">
                    <svg className="icon" viewBox="0 0 24 24">
                      <path d="M18,8H6V6H18V8M18,11H6V9H18V11M18,14H6V12H18V14M22,4A2,2 0 0,0 20,2H4A2,2 0 0,0 2,4V16A2,2 0 0,0 4,18H18L22,22V4Z"></path>
                    </svg>
                    <span>Reply</span>
                  </div>
                  <div className="btn-gwe">
                    <svg className="icon" viewBox="0 0 24 24">
                      <path d="M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="sm-thread-pj6">
                <div className="sm-thread-iwv">Show Replies (13)</div>
              </div>
            </div>
            <div className="sm-6kg comment-fbf">
              <div className="comment-v7n comment-csz">
                <div className="u-elj">
                  <img
                    className="sm-nf8 avatar-7hc"
                    src="https://cdn1.smartprix.com/rx-imsGax47o-w50-h50/msGax47o.webp"
                  />
                  <div className="nam-o8n">abhishek gowdra</div>
                  <div className="poi-odw">@abhishek_qozepilo</div>
                </div>
                <div className="dat-ziy">5 years ago</div>
                <p className="content-fzr">
                  Which mobile is best under 20k I want to buy android phone
                  having dual camara
                </p>
                <div className="act-3n8">
                  <div>
                    <div className="btn-gwe style-S1xKx" id="style-S1xKx">
                      <svg className="icon" viewBox="0 0 24 24">
                        <path d="M23,10C23,8.89 22.1,8 21,8H14.68L15.64,3.43C15.66,3.33 15.67,3.22 15.67,3.11C15.67,2.7 15.5,2.32 15.23,2.05L14.17,1L7.59,7.58C7.22,7.95 7,8.45 7,9V19A2,2 0 0,0 9,21H18C18.83,21 19.54,20.5 19.84,19.78L22.86,12.73C22.95,12.5 23,12.26 23,12V10M1,21H5V9H1V21Z"></path>
                      </svg>
                      <span>21</span>
                    </div>
                    <div className="btn-gwe">
                      <svg className="icon" viewBox="0 0 24 24">
                        <path d="M19,15H23V3H19M15,3H6C5.17,3 4.46,3.5 4.16,4.22L1.14,11.27C1.05,11.5 1,11.74 1,12V14A2,2 0 0,0 3,16H9.31L8.36,20.57C8.34,20.67 8.33,20.77 8.33,20.88C8.33,21.3 8.5,21.67 8.77,21.94L9.83,23L16.41,16.41C16.78,16.05 17,15.55 17,15V5C17,3.89 16.1,3 15,3Z"></path>
                      </svg>
                      <span>21</span>
                    </div>
                  </div>
                  <div className="btn-gwe rep-w1o">
                    <svg className="icon" viewBox="0 0 24 24">
                      <path d="M18,8H6V6H18V8M18,11H6V9H18V11M18,14H6V12H18V14M22,4A2,2 0 0,0 20,2H4A2,2 0 0,0 2,4V16A2,2 0 0,0 4,18H18L22,22V4Z"></path>
                    </svg>
                    <span>Reply</span>
                  </div>
                  <div className="btn-gwe">
                    <svg className="icon" viewBox="0 0 24 24">
                      <path d="M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="sm-thread-pj6">
                <div className="sm-thread-iwv">Show Replies (9)</div>
              </div>
            </div>
          </div>
          <div className="item-p7q">
            <a>
              <b>VIEW ALL COMMENTS (1463)</b>→
            </a>
          </div>
        </div>
        <div className="box-5s6" style={{}}>
          <div className="header-gle">
            <div className="title-y8c">
              <h2>Related News</h2>
            </div>
          </div>
          <div className="article-ar9">
            <div className="article-nke">
              <img
                className="sm-nf8"
                src="https://i0.wp.com/www.smartprix.com/bytes/wp-content/uploads/2023/12/Canva-Graphics-10.jpg?ssl=1&quality=80&w=150&h=100"
              />
              <a
                href="/bytes/xiaomi-redmi-13c-5g-vs-redmi-12-5g-which-is-the-better-budget-5g-phone-to-buy/"
                className="clamp-1r9"
              >
                Xiaomi Redmi 13C 5G Vs. Redmi 12 5G: Which is the Better Budget
                5G Phone To Buy?
              </a>
              <p className="clamp-taw">
                Xiaomi has rolled out its latest Redmi Series phone of 2023 –
                the Redmi 13C 5G. This affordable 5G phone is a successor to the
                Redmi 12 5G. In this article, we have tried to explore the
                differences between th…
              </p>
            </div>
            <div className="article-nke">
              <img
                className="sm-nf8"
                src="https://i0.wp.com/www.smartprix.com/bytes/wp-content/uploads/2023/12/4-8.jpg?ssl=1&quality=80&w=150&h=100"
              />
              <a
                href="/bytes/xiaomi-redmi-note-13-pro-plus-launch-date-confirmed/"
                className="clamp-1r9"
              >
                Xiaomi Confirms Launch of Redmi Note 13 Pro Plus 5G on January
                4: Details Inside
              </a>
              <p className="clamp-taw">
                Yesterday, Xiaomi confirmed the launch of the Redmi Note 13
                flagship series in India on January 4, 2024. While the brand
                yesterday did not confirm whether all 3 Note 13 series devices
                that launched globally w…
              </p>
            </div>
            <div className="article-nke">
              <img
                className="sm-nf8"
                src="https://i0.wp.com/www.smartprix.com/bytes/wp-content/uploads/2023/12/cover-photoutils.com-8.jpg?ssl=1&quality=80&w=150&h=100"
              />
              <a
                href="/bytes/redmi-note-13-pro-plus-5g-details-confirmed/"
                className="clamp-1r9"
              >
                Redmi Note 13 Pro Plus 5G Confirmed to feature MediaTek
                Dimensity 7200 Ultra Chipset
              </a>
              <p className="clamp-taw">
                Last week, Xiaomi India confirmed the launch date for the Redmi
                Note 13 Pro Plus series to be January 4, 2024. The Redmi Note 13
                Series has already been launched in China and now in India, the
                series will rep…
              </p>
            </div>
            <div className="article-nke">
              <img
                className="sm-nf8"
                src="https://i0.wp.com/www.smartprix.com/bytes/wp-content/uploads/2023/12/cover-9.webp?ssl=1&quality=80&w=150&h=100"
              />
              <a
                href="/bytes/oppo-find-x7-series-to-feature-1-inch-sony-lyt-900-camera/"
                className="clamp-1r9"
              >
                Oppo Find X7 Series Confirmed to feature 1-inch Sony LYT-900
                Camera Sensor &amp; a Leather Finish Design
              </a>
              <p className="clamp-taw">
                In 2018, Oppo started a new flagship under the ‘Oppo Find’
                series, namely the Oppo Find X Series of smartphones. First
                launched in Paris in 2018 as Oppo Find X2, the smartphones under
                the Find X tag feature a…
              </p>
            </div>
          </div>
        </div>
        <div className="box-5s6" style={{}}>
          <div className="header-gle">
            <div className="title-y8c">
              <h2>Related Mobile Phones</h2>
            </div>
          </div>
          <div className="sm-nr5 grid-7pz size-grb img-bny">
            <div className="sm-hgy" style={{}}>
              <div className="sm-img-j65">
                <img
                  className="sm-nf8"
                  src="https://cdn1.smartprix.com/rx-incYGaGkq-w280-h280/xiaomi-redmi-note-13.webp"
                />
              </div>
              <a
                href="/mobiles/xiaomi-redmi-note-13-pro-plus-ppd17s27km27"
                className="nam-o8n clamp-1r9"
              >
                Xiaomi Redmi Note 13 Pro Plus
              </a>
              <span className="pri-jde">₹28,990</span>
              <svg className="icon" viewBox="0 0 24 24" style={{}}>
                <path d="M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z"></path>
              </svg>
            </div>
            <div className="sm-hgy" style={{}}>
              <div className="sm-img-j65">
                <img
                  className="sm-nf8"
                  src="https://cdn1.smartprix.com/rx-i4Nd6TBiw-w280-h280/xiaomi-redmi-note-13.webp"
                />
              </div>
              <a
                href="/mobiles/xiaomi-redmi-note-13-pro-5g-ppd1mhj6y50p"
                className="nam-o8n clamp-1r9"
              >
                Xiaomi Redmi Note 13 Pro 5G
              </a>
              <span className="pri-jde">₹15,990</span>
              <svg className="icon" viewBox="0 0 24 24" style={{}}>
                <path d="M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z"></path>
              </svg>
            </div>
            <div className="sm-hgy" style={{}}>
              <div className="sm-img-j65">
                <img
                  className="sm-nf8"
                  src="https://cdn1.smartprix.com/rx-i3TEsGJHe-w280-h280/motorola-edge-40-neo.webp"
                />
              </div>
              <a
                href="/mobiles/motorola-edge-40-neo-ppd13yt489op"
                className="nam-o8n clamp-1r9"
              >
                Motorola Edge 40 Neo
              </a>
              <span className="pri-jde">₹22,999</span>
              <svg className="icon" viewBox="0 0 24 24" style={{}}>
                <path d="M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z"></path>
              </svg>
            </div>
            <div className="sm-hgy" style={{}}>
              <div className="sm-img-j65">
                <img
                  className="sm-nf8"
                  src="https://cdn1.smartprix.com/rx-iflC8vwCe-w280-h280/samsung-galaxy-f54.webp"
                />
              </div>
              <a
                href="/mobiles/samsung-galaxy-f54-ppd1n8r3iy4m"
                className="nam-o8n clamp-1r9"
              >
                Samsung Galaxy F54
              </a>
              <span className="pri-jde">₹24,858</span>
              <svg className="icon" viewBox="0 0 24 24" style={{}}>
                <path d="M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z"></path>
              </svg>
            </div>
            <div className="sm-hgy" style={{}}>
              <div className="sm-img-j65">
                <img
                  className="sm-nf8"
                  src="https://cdn1.smartprix.com/rx-idEgUmuTV-w280-h280/oneplus-nord-ce-3-5g.webp"
                />
              </div>
              <a
                href="/mobiles/oneplus-nord-ce-3-5g-ppd1p2vvw021"
                className="nam-o8n clamp-1r9"
              >
                OnePlus Nord CE 3 5G
              </a>
              <span className="pri-jde">₹24,668</span>
              <svg className="icon" viewBox="0 0 24 24" style={{}}>
                <path d="M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z"></path>
              </svg>
            </div>
            <div className="sm-hgy" style={{}}>
              <div className="sm-img-j65">
                <img
                  className="sm-nf8"
                  src="https://cdn1.smartprix.com/rx-i5k8kTQcK-w280-h280/motorola-edge-40-5g.webp"
                />
              </div>
              <a
                href="/mobiles/motorola-edge-40-5g-ppd1u5zsytnd"
                className="nam-o8n clamp-1r9"
              >
                Motorola Edge 40 5G
              </a>
              <span className="pri-jde">₹26,499</span>
              <svg className="icon" viewBox="0 0 24 24" style={{}}>
                <path d="M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z"></path>
              </svg>
            </div>
            <div className="sm-hgy" style={{}}>
              <div className="sm-img-j65">
                <img
                  className="sm-nf8"
                  src="https://cdn1.smartprix.com/rx-imEyft0Zn-w280-h280/realme-11-pro-plus.webp"
                />
              </div>
              <a
                href="/mobiles/realme-11-pro-plus-5g-ppd1x5qpqidg"
                className="nam-o8n clamp-1r9"
              >
                Realme 11 Pro Plus
              </a>
              <span className="pri-jde">₹25,999</span>
              <svg className="icon" viewBox="0 0 24 24" style={{}}>
                <path d="M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z"></path>
              </svg>
            </div>
            <div className="sm-hgy" style={{}}>
              <div className="sm-img-j65">
                <img
                  className="sm-nf8"
                  src="https://cdn1.smartprix.com/rx-iHXECl09u-w280-h280/xiaomi-13-ultra-5g.webp"
                />
              </div>
              <a
                href="/mobiles/xiaomi-13-ultra-5g-ppd1pfqyj8vz"
                className="nam-o8n clamp-1r9"
              >
                Xiaomi 13 Ultra 5G
              </a>
              <span className="pri-jde">₹71,499</span>
              <svg className="icon" viewBox="0 0 24 24" style={{}}>
                <path d="M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z"></path>
              </svg>
            </div>
          </div>
        </div>
        <div className="box-5s6" style={{}}>
          <div className="header-gle">
            <div className="title-y8c">
              <h2>Related Searches</h2>
            </div>
          </div>
          <div className="link-tgp">
            <a href="/mobiles/xiaomi-brand/price-20000_to_25000">
              <span>Xiaomi Mobile Phones Between ₹20,000 and ₹25,000</span>
            </a>
            <a href="/mobiles/6-1-inch-display-phones-list">
              <span>6.1 inch Mobile Phones Price List</span>
            </a>
            <a href="/mobiles/oppo-brand">
              <span>OPPO Mobiles Price</span>
            </a>
            <a href="/mobiles/xiaomi-brand">
              <span>Xiaomi Mobiles Price</span>
            </a>
            <a href="/mobiles/7000-mah-battery-mobiles-list">
              <span>7000 mAh Battery Mobile Phones</span>
            </a>
            <a href="/mobiles/oppo-brand/price-below_15000">
              <span>OPPO Mobile Phones Under ₹15,000</span>
            </a>
            <a href="/mobiles/with-5g/upcoming-stock">
              <span>Upcoming 5G Mobile Phones</span>
            </a>
            <a href="/mobiles/motorola-brand/upcoming-stock">
              <span>Upcoming Motorola Mobile Phones</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Mobile_list;
