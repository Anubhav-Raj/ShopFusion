import React from "react";

const tabItems = [
  { href: "/mobiles", label: "Seller", id: "", className: "" },
  { href: "/laptops", label: "Buyer", id: "", className: "" },
  { href: "/tvs", label: "Employers", id: "style-RSVdl", className: "style-RSVdl" },
  { href: "/deals", label: "Job Seekers", id: "", className: "" },
  { href: "/mobiles", label: "Rental Service Provider", id: "", className: "" },
  { href: "/laptops", label: "Rental Service Seekers", id: "", className: "" },
  { href: "/tvs", label: "Other Service Provider", id: "style-RSVdl", className: "style-RSVdl" },
  { href: "/deals", label: "Other Service Seekers", id: "", className: "" },
  { href: "/deals", label: "MATRIMONY", id: "", className: "" },
  { href: "/mobile", label: "Mobile", id: "", className: "" },
];

function Mobile_headlist() {
  return (
    <div className="sm-top-tabs only-mobile">
      <a
        href="/"
        data-way=""
        aria-label="Home"
        id="style-aKTdT"
        className="style-aKTdT"
      >
        <svg className="icon" viewBox="0 0 24 24" style={{ top: "-1px" }}>
          <path d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z"></path>
        </svg>
      </a>
      <div>
        {tabItems.map((tab, index) => (
          <a
            key={index}
            href={tab.href}
            data-way=""
            aria-label={tab.label}
            id={tab.id}
            className={tab.className}
          >
            {tab.label}
          </a>
        ))}
      </div>
    </div>
  );
}

export default Mobile_headlist;
