import React, { useState } from "react";
import Mobilepopupfilter from "./Mobilepopupfilter";

function Filter() {
  const [isFilterVisible, setFilterVisible] = useState(false);

  const toggleFilter = () => {
    setFilterVisible(!isFilterVisible);
  };
  return (
    <>
      <div className="pg-prf-o5c only-m6p">
        <div className="only-m6p">
          <svg className="icon" viewBox="0 0 24 24" style={{}}>
            <path d="M3,13H15V11H3M3,6V8H21V6M3,18H9V16H3V18Z"></path>
          </svg>
          &nbsp;Sort
          <select>
            <option value="rel">Relevance</option>
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
        <div onClick={toggleFilter} style={{ cursor: "pointer" }}>
          <svg className="icon" viewBox="0 0 24 24" style={{}}>
            <path d="M14,12V19.88C14.04,20.18 13.94,20.5 13.71,20.71C13.32,21.1 12.69,21.1 12.3,20.71L10.29,18.7C10.06,18.47 9.96,18.16 10,17.87V12H9.97L4.21,4.62C3.87,4.19 3.95,3.56 4.38,3.22C4.57,3.08 4.78,3 5,3V3H19V3C19.22,3 19.43,3.08 19.62,3.22C20.05,3.56 20.13,4.19 19.79,4.62L14.03,12H14Z"></path>
          </svg>
          &nbsp;Filter
        </div>
        
      </div>
      {isFilterVisible && <Mobilepopupfilter />}
    </>
  );
}

export default Filter;
