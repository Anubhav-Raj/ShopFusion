import React from "react";
import "./navlist.css";
import { Link } from "react-router-dom";

function navlist() {
  // Open the sidebar
  function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
  }

  // Close the sidebar
  function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
  }

  return (
    <>
      <nav className="sm-desktop-nav snipcss-wyBYr hide-on-small-screen">
        <ul>
          {/* <li>
            <button onClick={w3_open} className="menu-button">
              <svg className="icon i-menu" viewBox="0 0 24 24">
                <path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z"></path>
              </svg>
            </button>
          </li> */}
          <li>
            <a href="/" data-way="">
              HOME
            </a>
          </li>
          <li>
            <a href="/seller" >
              SELLERS
            </a>
          </li>
          <li>
            <a href="/laptops" data-way="">
              BUYERS
            </a>
          </li>
          <li>
            <a href="/tvs" data-way="">
              EMPLOYERS
            </a>
          </li>
          <li>
            <div className="sm-dropdown">JOB SEEKERS</div>
          </li>
          <li>
            <div className="sm-dropdown">RENTAL SERVICE PROVIDER</div>
          </li>
          <li>
            <div className="sm-dropdown visible">RENTAL SERVIECE SEEKERS</div>
          </li>
          <li>
            <div className="sm-dropdown">OTHER SERVICE PROVIDER</div>
          </li>
          <li>
            <a href="/deals" data-way="">
              OTHER SERVICE PROVIDER
            </a>
          </li>
          <li>
            <a href="/bytes/" data-way="">
              MATRIMONY
            </a>
          </li>
          <li>
            <Link to="/brand">MOBILE</Link>
          </li>
        </ul>
      </nav>

      <div
        className="w3-sidebar w3-bar-block w3-border-right"
        style={{ display: "none" }}
        id="mySidebar"
      >
        <div className=" background_col_f"></div>

        <ul className="sidebar_flx">
          <li className="slidebarrow">
            <button onClick={w3_close} className="w3-bar-item w3-large">
              <span>&#10005;</span>
            </button>
          </li>
          <li className="slidebarrow">
            <a href="seller" className="w3-bar-item w3-button">
              SELLER
            </a>
          </li>
          <li className="slidebarrow">
            <a href="#" className="w3-bar-item w3-button">
              BUYERS
            </a>
          </li>
          <li className="slidebarrow">
            <a href="#" className="w3-bar-item w3-button">
              EMPLOYERS
            </a>
          </li>
          <li className="slidebarrow">
            <a href="#" className="w3-bar-item w3-button">
              JOB SEEKERS
            </a>
          </li>
          <li className="slidebarrow">
            <a href="#" className="w3-bar-item w3-button">
              RENTAL SERVICE SEEKERS
            </a>
          </li>
          <li className="slidebarrow">
            <a href="#" className="w3-bar-item w3-button">
              RENTAL SERVICE PROVIDERS
            </a>
          </li>
          <li className="slidebarrow">
            <a href="#" className="w3-bar-item w3-button">
              OTHER SERVICE PROVIDERS
            </a>
          </li>
          <li className="slidebarrow">
            <a href="#" className="w3-bar-item w3-button">
              OTHER SERVICE SEEKERS
            </a>
          </li>
          <li className="slidebarrow">
            <a href="#" className="w3-bar-item w3-button">
              MATRIMONY
            </a>
          </li>
          <li className="slidebarrow">
            <a href="#" className="w3-bar-item w3-button">
              MOBILE{" "}
            </a>
          </li>
        </ul>
        {/* ... (other sidebar links) */}
      </div>
    </>
  );
}

export default navlist;
