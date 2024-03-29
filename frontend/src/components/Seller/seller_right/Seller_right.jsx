import React from "react";
import Thumbnailgallary from "./Thumbnailgallary";
import Progressbar from "./Progressbar";
import "./seller_right.css";

function Seller_right() {
  return (
    <>
      <div style={{ marginTop: "10px" }}>
        <Thumbnailgallary />
      </div>
      <div style={{ marginTop: "10px" }}>
        <Thumbnailgallary />
      </div>
      <div style={{ marginTop: "10px" }}>
        <Thumbnailgallary />
      </div>
      <div style={{ marginTop: "10px" }}>
        <Thumbnailgallary />
      </div>
      <button className="load-more-button">Load More</button>

      {/* <Progressbar /> */}
    </>
  );
}

export default Seller_right;
