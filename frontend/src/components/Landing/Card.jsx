/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { CaretDownOutlined } from "@ant-design/icons";

function Card({ categories, onClick }) {
  return (
    <div className="categories segments snipcss-jPyl7">
      <div className="container">
        <div className="row">
          {categories && categories.length > 0 ? (
            categories.map((category, index) => (
              <div key={index} className="col-20">
                <div
                  style={{ marginBottom: "0px" }}
                  className="content"
                  onClick={() => onClick(category.id)}
                >
                  <div className="icon">
                    {category.image && (
                      <img
                        className="departimg"
                        src={`http://localhost:5000/${category.image}`}
                        // alt={category.name}
                      />
                    )}

                    <span className="topings" style={{ fontSize: "1vw" }}>
                      {category.name}
                    </span>
                    <span className="topings1" style={{ fontSize: "0.8vw" }}>
                      10k
                    </span>
                  </div>
                </div>
                <label>
                  {category.type && index === 0 ? "More" : ""}
                  {category.type && index === 0 && <CaretDownOutlined />}
                </label>
              </div>
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
