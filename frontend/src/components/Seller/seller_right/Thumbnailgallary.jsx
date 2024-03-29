import React, { useState } from "react";
import callIcon from "./icons8-phone-48.png";
import saveIcon from "./icons8-save-48.png";
import shareIcon from "./icons8-share-48.png";
import whatsappIcon from "./icons8-whatsapp-48.png";
import { Collapse, Space } from "antd";
function ThumbnailGallery() {
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
              <p>Price: ₹2344</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ThumbnailGallery;
