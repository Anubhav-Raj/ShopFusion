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
          alt={data._id} // Unique alt attribute for the image
          // src={`http://localhost:5000/uploads/images/${data.images[0]}`}
          // src={`https://5.imimg.com/data5/RI/BH/MY-3018752/sopan-5-ltr-pure-cow-ghee-/1000x1000.jpg`}
          style={{ objectFit: "contain", width: "100%", height: "200px" }} // Adjust height as needed
          className="hoverig bg-none"
        />
      </div>
      <div className="with100">
        <div className="with100">
          <div className="flex flex-col">
            <h5 className="productnamee">PRODUCT NAME</h5>
            {/* <p className="text-xs text-gray-400">ID: 23432252</p> */}
          </div>
          <span className="pricesh">$ 25.99</span>
        </div>
        <button class="Buttond">Add to cart</button>
      </div>
    </div>
  );
}

export default Itemcard;
