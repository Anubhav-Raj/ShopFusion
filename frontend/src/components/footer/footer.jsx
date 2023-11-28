import React from "react";
import "./footer.css"
function footer() {
  return (
    <>
      <footer className="snipcss-yjz4r">
        <div className="sm-footer">
          <div className="sm-footer-top">
            <div>
              <a className="logo hide-on-small-screen1" href="/" data-way="">
                <img
                  src="https://www.smartprix.com/img/sm_small.png"
                  
                  alt="Smartprix"
                  width={186}
                  height={60}
                />
              </a>
              <div className="sm-footer-social">
                <a
                  href="/about/contact"
                  title="Contact Us"
                  target="_blank"
                  rel="nofollow noopener"
                >
                  <svg className="icon" viewBox="0 0 24 24" style={{}}>
                    <path d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z"></path>
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/smartprix"
                  title="Facebook"
                  target="_blank"
                  rel="nofollow noopener"
                >
                  <svg className="icon" viewBox="0 0 24 24" style={{}}>
                    <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z"></path>
                  </svg>
                </a>
                <a
                  href="https://twitter.com/smartprix"
                  title="Twitter"
                  target="_blank"
                  rel="nofollow noopener"
                >
                  <svg className="icon" viewBox="0 0 24 24" style={{}}>
                    <path d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z"></path>
                  </svg>
                </a>
                <a
                  href="https://www.youtube.com/channel/UCvkQPgMQX_C1i9JnDZmOY2Q"
                  title="YouTube"
                  target="_blank"
                  rel="nofollow noopener"
                >
                  <svg className="icon" viewBox="0 0 24 24" style={{}}>
                    <path d="M10,15L15.19,12L10,9V15M21.56,7.17C21.69,7.64 21.78,8.27 21.84,9.07C21.91,9.87 21.94,10.56 21.94,11.16L22,12C22,14.19 21.84,15.8 21.56,16.83C21.31,17.73 20.73,18.31 19.83,18.56C19.36,18.69 18.5,18.78 17.18,18.84C15.88,18.91 14.69,18.94 13.59,18.94L12,19C7.81,19 5.2,18.84 4.17,18.56C3.27,18.31 2.69,17.73 2.44,16.83C2.31,16.36 2.22,15.73 2.16,14.93C2.09,14.13 2.06,13.44 2.06,12.84L2,12C2,9.81 2.16,8.2 2.44,7.17C2.69,6.27 3.27,5.69 4.17,5.44C4.64,5.31 5.5,5.22 6.82,5.16C8.12,5.09 9.31,5.06 10.41,5.06L12,5C16.19,5 18.8,5.16 19.83,5.44C20.73,5.69 21.31,6.27 21.56,7.17Z"></path>
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/smartprix/"
                  title="Instagram"
                  target="_blank"
                  rel="nofollow noopener"
                >
                  <svg className="icon" viewBox="0 0 24 24" style={{}}>
                    <path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z"></path>
                  </svg>
                </a>
                <a
                  href="https://smpx.to/telegram?utm_source=desktop_footer"
                  title="Telegram"
                  target="_blank"
                  rel="nofollow noopener"
                >
                  <svg className="icon" viewBox="0 0 24 24" style={{}}>
                    <path d="M20.7 3.7 2.9 10.6c-1.2.4-1.2 1.1-.2 1.4l4.6 1.4 10.5-6.6c.5-.3 1-.1.6.2l-8.6 7.7-.3 4.7c.5 0 .7-.2 1-.5l2.2-2.1 4.6 3.4c.8.4 1.4.2 1.6-.8l3-14.2c.4-1.3-.4-1.8-1.2-1.5z"></path>
                  </svg>
                </a>
                <a
                  href="https://www.smartprix.com/bytes/feed/"
                  title="RSS Feed"
                  target="_blank"
                  rel="nofollow noopener"
                >
                  <svg className="icon" viewBox="0 0 24 24" style={{}}>
                    <path d="M6.18,15.64A2.18,2.18 0 0,1 8.36,17.82C8.36,19 7.38,20 6.18,20C5,20 4,19 4,17.82A2.18,2.18 0 0,1 6.18,15.64M4,4.44A15.56,15.56 0 0,1 19.56,20H16.73A12.73,12.73 0 0,0 4,7.27V4.44M4,10.1A9.9,9.9 0 0,1 13.9,20H11.07A7.07,7.07 0 0,0 4,12.93V10.1Z"></path>
                  </svg>
                </a>
                <a
                  href="https://smpx.to/app?utm_source=desktop_footer"
                  title="Android App"
                  target="_blank"
                  rel="nofollow noopener"
                >
                  <svg className="icon" viewBox="0 0 24 24" style={{}}>
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="sm-footer-nav hide-on-small-screen1">
              <div>
                <h3>Categories</h3>
                <a href="/mobiles" data-way="">
                  Mobile Phones
                </a>
                <a href="/tablets" data-way="">
                  Tablets
                </a>
                <a href="/mobile_headphones" data-way="">
                  Earphones
                </a>
                <a href="/laptops" data-way="">
                  Laptops
                </a>
                <a href="/tvs" data-way="">
                  TVs
                </a>
                <a href="/cameras" data-way="">
                  Cameras
                </a>
                <a href="/air_conditioners" data-way="">
                  ACs
                </a>
                <a href="/refrigerators" data-way="">
                  Fridge
                </a>
                <a href="/washing_machines" data-way="">
                  Washing Machines
                </a>
                <a href="/trimmers" data-way="">
                  Trimmers
                </a>
                <a href="/induction_cooktops" data-way="">
                  Induction Cooktops
                </a>
                <a href="/deals" data-way="">
                  Deals
                </a>
              </div>
              <div>
                <h3>Mobile Brands</h3>
                <a href="/mobiles/samsung-brand" data-way="">
                  Samsung Mobiles
                </a>
                <a href="/mobiles/xiaomi-brand" data-way="">
                  Redmi / Mi Mobiles
                </a>
                <a href="/mobiles/realme-brand" data-way="">
                  Realme Mobiles
                </a>
                <a href="/mobiles/vivo-brand" data-way="">
                  Vivo Mobiles
                </a>
                <a href="/mobiles/motorola-brand" data-way="">
                  Motorola Mobiles
                </a>
                <a href="/mobiles/oneplus-brand" data-way="">
                  OnePlus Mobiles
                </a>
                <a href="/mobiles/oppo-brand" data-way="">
                  Oppo Mobiles
                </a>
                <a href="/mobiles/apple-brand" data-way="">
                  Apple iPhones
                </a>
                <a href="/mobiles/infinix-brand" data-way="">
                  Infinix Mobiles
                </a>
                <a href="/mobiles/poco-brand" data-way="">
                  Poco Mobiles
                </a>
                <a href="/mobiles/tecno-brand" data-way="">
                  Tecno Mobiles
                </a>
                <a href="/mobiles/nokia-brand" data-way="">
                  Nokia Mobiles
                </a>
              </div>
              <div>
                <h3>Mobile Lists</h3>
                <a href="/mobiles/smartphone-type" data-way="">
                  Smartphones
                </a>
                <a href="/mobiles/with-5g" data-way="">
                  5G Mobiles
                </a>
                <a href="/mobiles/with-4g" data-way="">
                  4G Mobiles
                </a>
                <a href="/mobiles/latest-mobiles" data-way="">
                  New Mobiles
                </a>
                <a href="/mobiles/upcoming-stock" data-way="">
                  Upcoming Mobiles
                </a>
                <a href="/mobiles/4_gb_above-ram" data-way="">
                  4GB RAM Mobiles
                </a>
                <a href="/mobiles/6_gb_above-ram" data-way="">
                  6GB RAM Mobiles
                </a>
                <a href="/mobiles/android-os" data-way="">
                  Android Mobiles
                </a>
                <a href="/mobiles/with-fingerprint" data-way="">
                  Fingerprint Phones
                </a>
                <a href="/mobiles/with-waterproof" data-way="">
                  Waterproof Mobiles
                </a>
                <a href="/mobiles/5000_mah_above-battery_size" data-way="">
                  5000 mAh Mobiles
                </a>
                <a href="/mobiles/keypad-mobiles-list" data-way="">
                  Keypad Mobiles
                </a>
              </div>
              <div>
                <h3>About</h3>
                <a href="/about/smartprix" data-way="">
                  About Smartprix
                </a>
                <a href="/about/us" data-way="">
                  Team
                </a>
                <a href="/about/jobs" data-way="">
                  Jobs
                </a>
                <a href="/about/contact" data-way="">
                  Contact Us
                </a>
                <a href="/about/help" data-way="">
                  Help
                </a>
                <a href="/about/tools" data-way="">
                  Tools
                </a>
                <a href="/mobiles" data-way="">
                  Find A Mobile
                </a>
                <a href="/mobiles/compare.php" data-way="">
                  Compare Mobiles
                </a>
                <a href="/bytes/" data-way="">
                  Latest News
                </a>
              </div>
            </div>
          </div>
          <div className="sm-footer-c">
            <div id="style-9THwv" className="style-9THwv">
              Copyright © 2023,
              <a href="/" data-way="">
                Smartprix.com
              </a>
              . All Rights Reserved
            </div>
            <div>
              <a href="/about/contact" data-way="">
                Contact Us
              </a>
              <span id="style-ilOT7" className="style-ilOT7">
                •
              </span>
              <a href="/about/privacy-policy" data-way="">
                Privacy Policy
              </a>
              <span id="style-kdQoD" className="style-kdQoD">
                •
              </span>
              <a href="/about/terms-of-services" data-way="">
                Terms of Services
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default footer;
