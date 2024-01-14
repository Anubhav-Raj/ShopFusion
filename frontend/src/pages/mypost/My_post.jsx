import React from "react";
import "./mypost.css";
import MY_post_list from "../../components/mypost/MY_post_list";

const tabItems = [
  { href: "/mobiles", label: "Seller", id: "", className: "" },
  { href: "/laptops", label: "Buyer", id: "", className: "" },
  {
    href: "/tvs",
    label: "Employers",
    id: "style-RSVdl",
    className: "style-RSVdl",
  },
  { href: "/deals", label: "Job Seekers", id: "", className: "" },
  { href: "/mobiles", label: "Rental Service Provider", id: "", className: "" },
  { href: "/laptops", label: "Rental Service Seekers", id: "", className: "" },
  {
    href: "/tvs",
    label: "Other Service Provider",
    id: "style-RSVdl",
    className: "style-RSVdl",
  },
  { href: "/deals", label: "Other Service Seekers", id: "", className: "" },
  { href: "/deals", label: "MATRIMONY", id: "", className: "" },
  { href: "/mobile", label: "Mobile", id: "", className: "" },
];

function My_post() {
  return (
    <>
      <div className="bgsetter">
        <MY_post_list tabItems={tabItems} />
        {/* <MY_post_list tabItems={selecteditem} /> */}
      </div>
    </>
  );
}

export default My_post;
