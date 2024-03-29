import React from "react";
import "./navlist.css";
import { Link } from "react-router-dom";

const navItems = [
  { label: "HOME", path: "/" },
  { label: "SELLERS", path: "/seller" },
  { label: "BUYERS", path: "/laptops" },
  { label: "EMPLOYERS", path: "/tvs" },
  { label: "JOB SEEKERS" },
  // { label: "RENTAL SERVICE PROVIDER" },
  // { label: "RENTAL SERVICE SEEKERS" },
  // { label: "OTHER SERVICE PROVIDER" },
  { label: "OTHER SERVICE PROVIDER", path: "/deals" },
  { label: "MATRIMONY", path: "/bytes/" },
  { label: "MOBILE", path: "/brand" },
];

function NavList() {
  return (
    <nav className="sm-desktop-nav snipcss-wyBYr hide-on-small-screen">
      <ul>
        {navItems.map((item, index) => (
          <li key={index}>
            {item.path ? (
              <Link to={item.path} data-way="">
                {item.label}
              </Link>
            ) : (
              <div>{item.label}</div>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavList;
