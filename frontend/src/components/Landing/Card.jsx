import React from "react";
import { CaretDownOutlined } from "@ant-design/icons";
import { useGetproductbasedonSubCategoryQuery } from "../../redux/API/products/mobile";

function Category({ category, onClick }) {
  const { id, name, image, type } = category;
  const handleClick = () => {
    // console.log("Clicked ID:", id);
    // console.log("Clicked Name:", name);
    // Call the onClick prop with id and name
    onClick(id, name);
  };
  return (
    <div className="col-20">
      <div
        style={{ marginBottom: "0px" }}
        className="content"
        onClick={handleClick}
      >
        <div className="icon">
          {image && (
            <img
              className="departimg"
              src={`http://localhost:5000/${image}`}
              alt={name}
            />
          )}
          <span className="topings" style={{ fontSize: "1vw" }}>
            {name}
          </span>
          <span className="topings1" style={{ fontSize: "0.8vw" }}>
            0
          </span>
        </div>
      </div>
      {type && (
        <label>
          <CaretDownOutlined />
        </label>
      )}
    </div>
  );
}

function Card({ categories, onClick }) {
  return (
    <div className="categories segments snipcss-jPyl7">
      <div className="container">
        <div className="row">
          {categories && categories.length > 0 ? (
            categories.map((category) => (
              <Category
                key={category.id}
                category={category}
                onClick={onClick}
              />
            ))
          ) : (
            <div>No data found</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
