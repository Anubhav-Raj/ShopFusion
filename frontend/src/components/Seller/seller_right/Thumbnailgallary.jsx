import React, { useState } from "react";
import callIcon from "./icons8-phone-48.png";
import saveIcon from "./icons8-save-48.png";
import shareIcon from "./icons8-share-48.png";
import whatsappIcon from "./icons8-whatsapp-48.png";
import DynamicReviews from "./Dynamic_review";
import { FaCaretDown } from "react-icons/fa";
import Progressbar from "./Progressbar";
import { Collapse, Rate } from "antd";
function ThumbnailGallery() {
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

  const [selectedImage, setSelectedImage] = useState(initialImages[0]);

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
            {initialImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Thumbnail ${index + 1}`}
                onClick={() => handleThumbnailClick(image)}
                className={selectedImage === image ? "selected-thumbnail" : ""}
              />
            ))}
          </div>
          <div className="main-image">
            {selectedImage && <img src={selectedImage} alt="Main Image" />}
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
              <h2>ProductProductProduct Title</h2>
              <div className="flexviewmr">
                <p>Price: ₹2344</p>
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
                  <p>Seller Name - xyz kasknsksk</p>
                  <p>Seller Id - 920402002</p>
                  <p>Total Published Posts - 67</p>
                </div>
                <div class="vertical-line"></div>
                <div className="righdetail">
                  <p>Mobile No. - 972929729</p>
                  <p>E-mail - 972929729@ndnd</p>
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
