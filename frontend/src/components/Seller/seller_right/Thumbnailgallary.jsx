import React, { useState } from "react";
import { Button, Drawer, Rate } from "antd";
import callIcon from "./icons8-phone-48.png";
import saveIcon from "./icons8-save-48.png";
import shareIcon from "./icons8-share-48.png";
import whatsappIcon from "./icons8-whatsapp-48.png";
import { FaCaretDown } from "react-icons/fa";
import Progressbar from "./Progressbar";
import DynamicReviews from "./Dynamic_review";

// Define WhatsappButton component outside ThumbnailGallery
function WhatsappButton({ phoneNumber }) {
  const handleOpenWhatsapp = () => {
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="detail-item" onClick={handleOpenWhatsapp}>
      <img src={whatsappIcon} alt="WhatsApp" style={{ cursor: "pointer" }} />
      <span>WhatsApp</span>
    </div>
  );
}

function ThumbnailGallery({ product }) {
  const [showproductdetails, setshowproductdetails] = useState(false);
  const [showsellerdetails, setshowsellerdetails] = useState(false);
  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const handleThumbnailClick = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  const handleSave = () => {
    try {
      // Fetch existing saved products array from local storage
      const existingSavedProducts =
        JSON.parse(localStorage.getItem("savedProducts")) || [];

      // Check if the product to be saved already exists in the array
      const isProductSaved = existingSavedProducts.some(
        (savedProduct) => savedProduct.id === product.id
      );

      // If the product doesn't exist, add it to the array
      if (!isProductSaved) {
        const updatedSavedProducts = [...existingSavedProducts, product];

        // Update local storage with the updated array
        localStorage.setItem(
          "savedProducts",
          JSON.stringify(updatedSavedProducts)
        );

        alert("Product saved successfully!");
      } else {
        alert("Product already saved!");
      }
    } catch (error) {
      console.error("Error saving product:", error);
      alert("Error saving product. Please try again later.");
    }
  };

  const handleShare = () => {
    try {
      // Share logic here
      if (navigator.share) {
        navigator.share({
          title: product.mobileName,
          text: "Check out this product!",
          url: window.location.href,
        });
      } else {
        console.log("Sharing not supported on this browser");
        alert("Sharing not supported on this browser");
      }
    } catch (error) {
      console.error("Error sharing product:", error);
      alert("Error sharing product. Please try again later.");
    }
  };
  const handleCallSeller = (phoneNumber) => {
    const phoneUrl = `tel:${phoneNumber}`;
    window.open(phoneUrl);
  };

  return (
    <>
      <div className="cjjjnsjsnjsn">
        <div className="thumbnail-gallery">
          <div className="thumbnail-list">
            {product.images.map((image, index) => (
              <img
                key={index}
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
          <div
            className="detail-item"
            onClick={() =>
              handleCallSeller(product.enterAddress.phoneNumber.phoneNumber)
            }
          >
            <img src={callIcon} alt="Call" style={{ cursor: "pointer" }} />
            <span>Call</span>
          </div>
          <div className="detail-item" onClick={handleSave}>
            <img src={saveIcon} alt="Save" style={{ cursor: "pointer" }} />
            <span>Save</span>
          </div>
          <WhatsappButton
            phoneNumber={product.enterAddress.phoneNumber.phoneNumber}
          />
          <div className="detail-item" onClick={handleShare}>
            <img src={shareIcon} alt="Share" style={{ cursor: "pointer" }} />
            <span>Share</span>
          </div>
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
            <hr className="horizontal-line" />
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
                <div className="vertical-line"></div>
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
            <hr className="horizontal-line" />
            <h3>Coustomer Ratings & Reviews</h3>
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
            <Button
              className="list_add-review-cta rounded pointer"
              onClick={showDrawer}
              block
            >
              Product Reviews
            </Button>

            <Drawer width={450} closable={false} onClose={onClose} open={open}>
              <h3>Product Ratings & Reviews</h3>
              <p style={{ fontSize: "20px" }}>
                4.1{" "}
                <Rate
                  disabled
                  allowHalf
                  defaultValue={2.5} // Remove the empty expression here
                  style={{ fontSize: "30px" }}
                />
              </p>
              <Progressbar />
              <DynamicReviews />
            </Drawer>
            <DynamicReviews productid={product._id} />
          </div>
        )}
      </div>
    </>
  );
}

export default ThumbnailGallery;
