import React from "react";
import Imgss from "./monitor-removebg-preview.png";

function Card({ categories, onClick }) {
  return (
    <div className="categories segments snipcss-jPyl7">
      <div className="container">
        <div className="row">
          {categories &&
            categories.map((category, index) => (
              <div key={index} className="col-20">
                <div className="content" onClick={() => onClick(category.name)}>
                  {/* Add onClick event to trigger handleDepartmentClick with category name */}
                  <div className="icon">
                    <img
                      className="departimg"
                      // src={category.image}
                      src={Imgss}
                      // alt={category.name}
                    />
                    <span className="topings">{category.name}</span>
                    <span className="topings1">10k</span>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Card;
