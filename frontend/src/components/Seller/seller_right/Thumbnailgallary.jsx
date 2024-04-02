/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";
import callIcon from "./icons8-phone-48.png";
import saveIcon from "./icons8-save-48.png";
import shareIcon from "./icons8-share-48.png";
import whatsappIcon from "./icons8-whatsapp-48.png";
import DynamicReviews from "./Dynamic_review";
import { FaCaretDown } from "react-icons/fa";
import Progressbar from "./Progressbar";
import { Collapse, Rate } from "antd";
function ThumbnailGallery({ product }) {
  console.log(product);
  const [showproductdetails, setshowproductdetails] = useState(false);
  const [showsellerdetails, setshowsellerdetails] = useState(false);
  const initialImages = [
    "https://jooinn.com/images/fruits-62.jpg",
    "https://jooinn.com/images/fruits-62.jpg",
    "https://jooinn.com/images/fruits-62.jpg",
    "https://jooinn.com/images/fruits-62.jpg",
    "https://jooinn.com/images/fruits-62.jpg",
    "https://jooinn.com/images/fruits-62.jpg",
    "https://jooinn.com/images/fruits-62.jpg",
    "https://jooinn.com/images/fruits-62.jpg",
  ];

  const [selectedImage, setSelectedImage] = useState(product.images[0]);

  const handleThumbnailClick = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  const detailsList = [
    { icon: callIcon, name: "Call" },
    { icon: whatsappIcon, name: "WhatsApp" },
    { icon: saveIcon, name: "Save" },
    { icon: shareIcon, name: "Share" },
  ];

  return (
    <>
      <div className="cjjjnsjsnjsn">
        <div className="thumbnail-gallery">
          <div className="thumbnail-list">
            {product.images.map((image, index) => (
              <img
                key={index}
                // src={image}
                src={`${process.env.REACT_APP_API_BASE_URL}uploads/images/${image}`}
                alt={`Thumbnail ${index + 1}`}
                onClick={() => handleThumbnailClick(image)}
                className={selectedImage === image ? "selected-thumbnail" : ""}
              />
            ))}
          </div>
          <div className="main-image">
            {selectedImage && (
              <img
                src={`${process.env.REACT_APP_API_BASE_URL}uploads/images/${selectedImage}`}
                alt="Main Image"
              />
            )}
          </div>
        </div>
        <div className="details-list-seller">
          {detailsList.map((detail, index) => (
            <div key={index} className="detail-item">
              <img src={detail.icon} alt={detail.name} />
              <span>{detail.name}</span>
            </div>
          ))}
        </div>
        <div className="product-container">
          <div className="product-header">
            <div className="product-title ">
              <h2>{product.mobileName}</h2>
              <div className="flexviewmr">
                <p>Price:{product.price}</p>
                <h5
                  onClick={() => setshowproductdetails((prev) => !prev)}
                  className="view_mrbtn"
                >
                  view {showproductdetails ? "Less" : "More"} <FaCaretDown />
                </h5>
              </div>
            </div>
          </div>
        </div>
        {showproductdetails && (
          <div className="sellerreviw">
            <hr class="horizontal-line" />
            <div className="flexviewmr">
              <h3>Seller Details</h3>
              <h5
                onClick={() => setshowsellerdetails((prev) => !prev)}
                className="view_mrbtn"
              >
                view {showsellerdetails ? "Less" : "More"} <FaCaretDown />
              </h5>
            </div>
            {showsellerdetails && (
              <div className="detailsseller">
                <div className="leftdetailseller">
                  <p>Seller Name - {product.sellerName}</p>
                  <p>Seller Id - {product.user}</p>
                  <p>Total Published Posts -1</p>
                </div>
                <div class="vertical-line"></div>
                <div className="righdetail">
                  <p>
                    Mobile No. -{" "}
                    {product.enterAddress.phoneNumber.show
                      ? product.enterAddress.phoneNumber.phoneNumber
                      : null}
                  </p>
                  <p>
                    E-mail -{" "}
                    {product.enterAddress.email.show
                      ? product.enterAddress.email.email
                      : null}
                  </p>
                </div>
              </div>
            )}
            <hr class="horizontal-line" />
            <h3>Product Ratings & Reviews</h3>

            <p style={{ fontSize: "20px" }}>
              4.1{" "}
              <Rate
                disabled
                allowHalf
                defaultValue={2.5}
                style={{ fontSize: "30px" }}
              />
            </p>
            <Progressbar />
            <DynamicReviews />
          </div>
        )}
      </div>
    </>
  );
}

export default ThumbnailGallery;
