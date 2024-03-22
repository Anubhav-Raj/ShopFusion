import React from "react";
import { Card } from "antd";
const { Meta } = Card;

function Itemcard({ data }) {
  // Check if data is present
  if (!data) {
    return null; // If data is not present, return null to render nothing
  }

  return (
    <div class="w-60 h-80 bg-gray-800 p-3 flex flex-col gap-1 rounded-br-3xl">
      <div class="duration-500 contrast-50 h-48 bg-gradient-to-bl from-black via-orange-900 to-indigo-600  hover:contrast-100">
        <img
          alt={data._id} // Unique alt attribute for the image
          src={`http://localhost:5000/uploads/images/${data.images[0]}`}
          style={{ objectFit: "contain", width: "100%", height: "200px" }} // Adjust height as needed
        />
      </div>
      <div class="flex flex-col gap-4">
        <div class="flex flex-row justify-between">
          <div class="flex flex-col">
            <span class="text-xl text-gray-50 font-bold">Long Chair</span>
            <p class="text-xs text-gray-400">ID: 23432252</p>
          </div>
          <span class="font-bold  text-red-600">$25.99</span>
        </div>
        <button class="hover:bg-sky-700 text-gray-50 bg-sky-800 py-2 rounded-br-xl">
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default Itemcard;
