import React, { useState } from "react";
import callIcon from "./icons8-phone-48.png";
import saveIcon from "./icons8-save-48.png";
import shareIcon from "./icons8-share-48.png";
import whatsappIcon from "./icons8-whatsapp-48.png";

function ThumbnailGallery() {
  const initialImages = [
    "http://localhost:3000/img/laptop.png",
    "https://cdn.pixabay.com/photo/2017/03/22/18/18/forest-2165911_960_720.jpg",
    "https://cdn.pixabay.com/photo/2017/03/19/22/12/lighthouse-2157753_960_720.jpg",
    "https://cdn.pixabay.com/photo/2017/03/22/18/18/forest-2165911_960_720.jpg",
    "http://localhost:3000/img/laptop.png",
    "https://cdn.pixabay.com/photo/2017/03/22/18/18/forest-2165911_960_720.jpg",
    "https://cdn.pixabay.com/photo/2017/03/19/22/12/lighthouse-2157753_960_720.jpg",
    "https://cdn.pixabay.com/photo/2017/03/22/18/18/forest-2165911_960_720.jpg",
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

        <div className="product-container">
          <div className="product-header">
            <div className="product-title ">
              <h2>ProductProductProduct Title</h2>
              <p>Price: ₹2344</p>
            </div>
          </div>
          <div className="seller-details">
            <div>
              <h2>Seller Details</h2>
              <p>
                <strong>Seller Name:</strong> xyz
              </p>
              <p>
                <strong>Shop ID:</strong> 28y823
              </p>
              <p>
                <strong>Mobile No:</strong> 29329882828
              </p>
              <p>
                <strong>Email:</strong> 289273822937
              </p>
            </div>
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
      </div>
    </>
  );
}

export default ThumbnailGallery;
