import React, { useState } from "react";

function Discription() {
  const [expanded, setExpanded] = useState(false);
  const [expanded2, setExpanded2] = useState(false);

  const handleReadMoreClick = () => {
    setExpanded(!expanded);
  };

  const handleReadMoreClick2 = () => {
    setExpanded2(!expanded2);
  };
  return (
    <>
      <div className="main-cir">
        <div className="pg-prd-2g3">
          <div className="pg-prd-lsm">
            <h1>Realme C67 5G</h1>
            <div className="text-wn8">
              <div className="pg-prd-xas">
                <span className="sm-aoj style-SoEvg" id="style-SoEvg">
                  <i></i>
                </span>
                <span id="style-MAsCG" className="style-MAsCG">
                  118 votes
                </span>
              </div>
              <div className="lin-am6">
                <strong>₹12,485</strong>
                <span>
                  &nbsp;•&nbsp;
                  <a>View Prices</a>
                </span>
                <span>
                  &nbsp;•&nbsp; By
                  <a href="/mobiles/realme-brand">Realme</a>
                </span>
              </div>
            </div>
          </div>
          <div className="sm-h7g">
            <div className={`content-vh1 ${expanded ? "expanded" : ""}`}>
              <p>
                Realme C67 5G price in India starts from ₹12,485. It is
                available at lowest price on Amazon in India as on Dec 31, 2023.
                Take a look at Realme C67 5G detailed specifications and
                features.
              </p>
              <table>
                <caption>Realme C67 5G Quick Specifications</caption>
                <thead>
                  <tr>
                    <th>Specification</th>
                    <th>Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <strong>OS</strong>
                    </td>
                    <td>Android v13</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Battery</strong>
                    </td>
                    <td>5000 mAh, Li-Po Battery</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>RAM</strong>
                    </td>
                    <td>4 GB</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Display</strong>
                    </td>
                    <td>6.72 inches, 1080 x 2400 pixels, 120 Hz</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Rear Camera</strong>
                    </td>
                    <td>
                      50 MP PDAF f/1.8 (Wide Angle)
                      <br />
                      2 MP f/2.4 (Depth Sensor) with autofocus
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <span>
              <a onClick={handleReadMoreClick}>
                {expanded ? "Read Less" : "Read More"}
              </a>
            </span>
          </div>
        </div>
        <sm-dap className="p-47o t-wwa style-2dY88" id="style-2dY88">
          <div>
            <div>
              <div id="goo-opl" className="style-tqjsw"></div>
            </div>
          </div>
        </sm-dap>
        <div className="sm-page-r65 pg-prd-poo">
          <ul>
            <li>
              <svg className="icon" viewBox="0 0 24 24">
                <path d="M17,13H13V17H11V13H7V11H11V7H13V11H17M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"></path>
              </svg>
              <span>Compare</span>
            </li>
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
        <div className="box-i44 pg-prd-h-11x">
          <div className="pg-prd-s3k">
            <div className="pri-cne">₹12,485</div>
            <div className="dro-3l2">
              <span className="sm-cr2">2%</span>
            </div>
            <a
              className="btn-8z2 fla-jyn btn-61n"
              href="https://l.smartprix.com/l?k=12boV_~VxWT7iH~Ojg3slib_3hrhArnrysuhyihDRPw101fX45h-hrhhaFhrhrhhacBrWahrhrBi5N5IAPinFhrFB50dseA04eP002"
            >
              Buy
              <img
                className="sm-6o6 logo-xsv"
                src="https://cdn1.smartprix.com/rx-iR2NxBi82-w32-h32/amazon.webp"
              />
            </a>
            <a className="text-pdp">available at 3 stores →</a>
          </div>
          <ul className="sm-store-f98">
            <li>
              <a href="https://l.smartprix.com/l?k=12boV_~VxWT7iH~Ojg3slib_3hrhArnrysuhyihDRPw101fX45h-hrhhaFhrhrhhacBrWahrhrBi5N5IAPinFhrFB50dseA04eP002">
                <div className="nam-d49">
                  <img
                    className="sm-6o6 logo-xsv"
                    src="https://cdn1.smartprix.com/rx-iR2NxBi82-w32-h32/amazon.webp"
                  />
                  <span>Amazon</span>
                </div>
                <span className="pri-cne">₹12,485</span>
              </a>
            </li>
            <li>
              <a href="https://l.smartprix.com/l?k=12eB0i_yyy_IIv6m_n30XDnxhrhAgTYBOr3Uh73arTnacAbGc4WcFCuuIcsrFYFc5oXcW6h-hDh85ab46oXXg5bbghmBYihkpkR700zqeVE0.XK7hrhhaFhrhrhhacBrWahrhrBi5N5IAPinFhrFB552gBzwn_.oGW">
                <div className="nam-d49">
                  <img
                    className="sm-6o6 logo-xsv"
                    src="https://cdn1.smartprix.com/rx-i1jV84HS1-w32-h32/flipkart.webp"
                  />
                  <span>Flipkart</span>
                </div>
                <span className="pri-cne">₹13,999</span>
              </a>
            </li>
          </ul>
          <div className="sm-h7g pg-prd-ofh">
          <div className={`content-vh2 ${expanded2 ? "expanded2" : ""}`}>
              Realme C67 5G price in India is ₹12,485. You can buy Realme C67 5G
              online on Amazon at lowest price. Realme C67 5G was last updated
              on December 31, 2023
              Realme C67 5G price in India is ₹12,485. You can buy Realme C67 5G
              online on Amazon at lowest price. Realme C67 5G was last updated
              on December 31, 2023
              Realme C67 5G price in India is ₹12,485. You can buy Realme C67 5G
              online on Amazon at lowest price. Realme C67 5G was last updated
              on December 31, 2023
            </div>
            <span>
              <a onClick={handleReadMoreClick2}>
                {expanded2 ? "Read Less" : "Read More"}
              </a>
            </span>
          </div>
          <ul className="pg-prd-price-1jm">
            <li>
              <svg className="icon" viewBox="0 0 24 24">
                <path d="M16,6L18.29,8.29L13.41,13.17L9.41,9.17L2,16.59L3.41,18L9.41,12L13.41,16L19.71,9.71L22,12V6H16Z"></path>
              </svg>
              <span>Price History</span>
            </li>
            <li>
              <svg className="icon" viewBox="0 0 24 24">
                <path d="M17 14V17H14V19H17V22H19V19H22V17H19V14M12 2A2 2 0 0 0 10 4A2 2 0 0 0 10 4.29C7.12 5.14 5 7.82 5 11V17L3 19V20H12.35A6 6 0 0 1 12 18A6 6 0 0 1 18 12A6 6 0 0 1 19 12.09V11C19 7.82 16.88 5.14 14 4.29A2 2 0 0 0 14 4A2 2 0 0 0 12 2M10 21A2 2 0 0 0 12 23A2 2 0 0 0 13.65 22.13A6 6 0 0 1 12.81 21Z"></path>
              </svg>
              <span>Set Price Alert</span>
            </li>
            <li>
              <svg className="icon" viewBox="0 0 24 24">
                <path d="M5,4H19A2,2 0 0,1 21,6V18A2,2 0 0,1 19,20H5A2,2 0 0,1 3,18V6A2,2 0 0,1 5,4M5,8V12H11V8H5M13,8V12H19V8H13M5,14V18H11V14H5M13,14V18H19V14H13Z"></path>
              </svg>
              <span>View Prices</span>
            </li>
          </ul>
        </div>
        <div className="box-i44 pg-prd-tty">
          <div className="header-r64">
            <div className="title-oel">
              <h2>Variants</h2>
            </div>
          </div>
          <div className="sm-og5 com-byn">
            <div className="act-z2z">
              <a href="/mobiles/realme-c67-ppd1q1yc0dms" className="clamp-k7k">
                4GB+128GB
              </a>
              ₹12,485
            </div>
            <div>
              <a
                href="/mobiles/realme-c67-5g-6gb-ram-128gb-ppd1n6qi6l1g"
                className="clamp-k7k"
              >
                6GB+128GB
              </a>
              ₹13,647
            </div>
          </div>
        </div>
        <div className="box-i44 pad-o77 pg-prd-h-6ig">
          <div className="header-r64">
            <div className="title-oel">
              <h2>Features</h2>
            </div>
          </div>
          <ul className="sm-joi">
            <li>Dual Sim, 3G, 4G, 5G, VoLTE, Wi-Fi</li>
            <li>Dimensity 6100 Plus, Octa Core, 2.2 GHz Processor</li>
            <li>4 GB RAM, 128 GB inbuilt</li>
            <li>5000 mAh Battery with 33W Fast Charging</li>
            <li>6.72 inches, 1080 x 2400 px, 120 Hz Display with Punch Hole</li>
            <li>50 MP + 2 MP Dual Rear &amp; 8 MP Front Camera</li>
            <li>Memory Card Supported, upto 2 TB</li>
            <li>Android v13</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Discription;
