import React from "react";
import "./catagries.css"
function catagries() {
  return (
    <div className="sm-box pg-hom-cats" style={{}}>
      <div className="sm-cats" style={{}}>
        <a href="/deals" data-way="">
          <img
            loading="lazy"
            width={50}
            height={50}
            className="sm-img"
            src="https://cdn1.smartprix.com/rx-iX3AGVYAz-w100-h100/X3AGVYAz.webp"
            alt="Deals"
          />
          <span>Deals</span>
        </a>
        <a href="/bytes/" data-way="">
          <img
            loading="lazy"
            width={50}
            height={50}
            className="sm-img"
            src="https://cdn1.smartprix.com/rx-iOHl0XlbN-w100-h100/OHl0XlbN.webp"
            alt="News"
          />
          <span>News</span>
        </a>
        <a href="/mobiles" data-way="">
          <img
            loading="lazy"
            width={50}
            height={50}
            className="sm-img"
            src="https://cdn1.smartprix.com/rx-iViQd4cI8-w100-h100/ViQd4cI8.webp"
            alt="Mobiles"
          />
          <span>Mobiles</span>
        </a>
        <a href="/tablets" data-way="">
          <img
            loading="lazy"
            width={50}
            height={50}
            className="sm-img"
            src="https://cdn1.smartprix.com/rx-iG5DXN6vc-w100-h100/G5DXN6vc.webp"
            alt="Tablets"
          />
          <span>Tablets</span>
        </a>
        <a href="/laptops" data-way="">
          <img
            loading="lazy"
            width={50}
            height={50}
            className="sm-img"
            src="https://cdn1.smartprix.com/rx-i6invpMY2-w100-h100/6invpMY2.webp"
            alt="Laptops"
          />
          <span>Laptops</span>
        </a>
        <a href="/tvs" data-way="">
          <img
            loading="lazy"
            width={50}
            height={50}
            className="sm-img"
            src="https://cdn1.smartprix.com/rx-idTmyxzGZ-w100-h100/dTmyxzGZ.webp"
            alt="TVs"
          />
          <span>TVs</span>
        </a>
        <a href="/cameras" data-way="">
          <img
            loading="lazy"
            width={50}
            height={50}
            className="sm-img"
            src="https://cdn1.smartprix.com/rx-iR6SKymCH-w100-h100/R6SKymCH.webp"
            alt="Cameras"
          />
          <span>Cameras</span>
        </a>
        <a href="/air_conditioners" data-way="">
          <img
            loading="lazy"
            width={50}
            height={50}
            className="sm-img"
            src="https://cdn1.smartprix.com/rx-ikAfBBj8K-w100-h100/kAfBBj8K.webp"
            alt="ACs"
          />
          <span>ACs</span>
        </a>
        <a href="/refrigerators" data-way="">
          <img
            loading="lazy"
            width={50}
            height={50}
            className="sm-img"
            src="https://cdn1.smartprix.com/rx-i0g6nr7Fk-w100-h100/0g6nr7Fk.webp"
            alt="Fridge"
          />
          <span>Fridge</span>
        </a>
        <a href="/mobile_headphones" data-way="">
          <img
            loading="lazy"
            width={50}
            height={50}
            className="sm-img"
            src="https://cdn1.smartprix.com/rx-iUfE0ayqy-w100-h100/UfE0ayqy.webp"
            alt="Earphones"
          />
          <span>Earphones</span>
        </a>
      </div>
      <a
        href="/amazon-hub"
        data-way=""
        className="c-b amzn-hub-cat only-mobile"
      >
        <img
          loading="lazy"
          src="https://cdn1.smartprix.com/rx-iVfuJyeog-h80/amazon_hub.webp"
          alt="Amazon Hub"
          width={460}
          height={100}
        />
      </a>
    </div>
  );
}

export default catagries;
