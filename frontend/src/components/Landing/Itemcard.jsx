import React from "react";
import { Card } from "antd";
const { Meta } = Card;

function Itemcard({ data }) {
  console.log(data);
  if (!data) {
    return null;
  }

  return (
    <div className="minihight">
      <div className="overflow-clip ">
        <img
          alt={data._id}
          src={`${process.env.REACT_APP_API_BASE_URL}uploads/images/${data.images[0]}`}
          style={{ objectFit: "contain", width: "100%", height: "150px" }} // Adjust height as needed
          className="hoverig bg-none"
        />
      </div>
      <div className="with100">
        <div className="with100">
          <div className="flex flex-col">
            <h5 className="productnamee">{data.mobileName}</h5>
          </div>
          <span className="pricesh">₹{data.price}</span>
        </div>
        {/* <button class="Buttond">Add to cart</button> */}
      </div>
    </div>
  );
}

export default Itemcard;
