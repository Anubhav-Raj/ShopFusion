/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";
import { Button, Modal, Rate, Table } from "antd";
import callIcon from "./icons8-phone-48.png";
import saveIcon from "./icons8-save-48.png";
import shareIcon from "./icons8-share-48.png";
import whatsappIcon from "./icons8-whatsapp-48.png";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import Progressbar from "./Progressbar";
import DynamicReviews from "./Dynamic_review";
import { useGetreviewSallerQuery } from "../../../redux/API/products/mobile";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Specification",
    dataIndex: "specification",
  },
];
const data = [
  {
    key: "1",
    name: "Brand",
    specification: "Samsung",
  },
  {
    key: "2",
    name: "Model",
    specification: "Galaxy S20",
  },
  {
    key: "3",
    name: "Color",
    specification: "Black",
  },
  {
    key: "4",
    name: "Storage Capacity",
    specification: "128 GB",
  },
  {
    key: "5",
    name: "RAM",
    specification: "8 GB",
  },
  {
    key: "6",
    name: "Display Size",
    specification: "6.2 inches",
  },
  {
    key: "7",
    name: "Resolution",
    specification: "1440 x 3200 pixels",
  },
  {
    key: "8",
    name: "Processor",
    specification: "Qualcomm Snapdragon 865",
  },
  {
    key: "9",
    name: "Operating System",
    specification: "Android 10, One UI 2.5",
  },
  {
    key: "10",
    name: "Camera",
    specification: "Quad - 64MP + 12MP + 12MP + 0.3MP",
  },
  {
    key: "11",
    name: "Battery",
    specification: "4000 mAh",
  },
];

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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen1, setIsModalOpen1] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const showModal1 = () => {
    setIsModalOpen1(true);
  };
  const handleOk1 = () => {
    setIsModalOpen1(false);
  };
  const handleCancel1 = () => {
    setIsModalOpen1(false);
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
  // console.log(product);

  return (
    <>
      <div className="cjjjnsjsnjsn">
        <div className="thumbnail-gallery">
          <div className="thumbnail-list">
            {product.images.map((image, index) => (
              <>
                <img
                  key={index}
                  src={`${process.env.REACT_APP_API_BASE_URL}uploads/images/${image}`}
                  alt={`Thumbnail ${index + 1}`}
                  onClick={() => handleThumbnailClick(image)}
                  className={
                    selectedImage === image ? "selected-thumbnail" : ""
                  }
                />
                <hr
                  className="horizontal-line"
                  style={{ margin: "0px", opacity: "0.50" }}
                />
              </>
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
              <h3>{product.productName}</h3>
              <div className="flexviewmr">
                <p class="new-price">
                  Price: <span>₹{product.price}</span>
                </p>

                <h6
                  onClick={() => setshowproductdetails((prev) => !prev)}
                  className="view_mrbtn"
                >
                  {showproductdetails ? <FaCaretDown /> : <FaCaretUp />}
                </h6>
              </div>
            </div>
          </div>
        </div>
        <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
          <div style={{ marginLeft: "10px" }}>
            {" "}
            <h3>Product Ratings & Reviews</h3>
            <p style={{ fontSize: "20px" }}>
              4.1{" "}
              <Rate
                disabled
                allowHalf
                defaultValue={2.5} // Remove the empty expression here
                style={{ fontSize: "30px" }}
              />
              <p style={{ color: "#5086fa" }}> 1 Ratings & 1 Reviewers</p>
            </p>
          </div>
          <Progressbar />
          <DynamicReviews
            productid={product._id}
            Sellerid={product.user}
            type="product"
          />
        </Modal>
        <Modal
          style={{ width: "50%" }}
          open={isModalOpen1}
          onOk={handleOk1}
          onCancel={handleCancel1}
        >
          <h3>Seller Ratings & Reviews</h3>
          <p style={{ fontSize: "20px" }}>
            4.1{" "}
            <Rate
              disabled
              allowHalf
              defaultValue={2.5}
              style={{ fontSize: "20px" }}
            />
            <p style={{ color: "#5086fa" }}> 1 Ratings & 1 Reviewers</p>
          </p>
          <Progressbar />
          <DynamicReviews
            productid={product._id}
            Sellerid={product.user}
            type="seller"
          />
        </Modal>
        {showproductdetails && (
          <div className="sellerreviw">
            <div className="product-detail">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
                eveniet veniam tempora fuga tenetur placeat sapiente architecto
                illum soluta consequuntur, ask me
              </p>
            </div>

            <Table
              columns={columns}
              dataSource={data}
              showHeader={false}
              pagination={false}
              rowHoverable={false}
            />

            <div>
              {" "}
              <h5>Product Ratings & Reviews</h5>
              <p style={{ fontSize: "20px" }} onClick={showModal}>
                4.1{" "}
                <Rate
                  disabled
                  allowHalf
                  defaultValue={2.5} // Remove the empty expression here
                  style={{ fontSize: "20px" }}
                />
                <p style={{ color: "#5086fa" }}> 1 Ratings & 1 Reviewers</p>
              </p>
            </div>
            <hr className="horizontal-line" />
            <div className="flexviewmr">
              <h3>Seller Details</h3>
              <h6
                onClick={() => setshowsellerdetails((prev) => !prev)}
                className="view_mrbtn"
              >
                {showsellerdetails ? <FaCaretDown /> : <FaCaretUp />}
              </h6>
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
                    {product.enterAddress.phoneNumber.show === true
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
                <div>
                  {" "}
                  <h5>Product Ratings & Reviews</h5>
                  <p style={{ fontSize: "20px" }} onClick={showModal1}>
                    4.1{" "}
                    <Rate
                      disabled
                      allowHalf
                      defaultValue={2.5} // Remove the empty expression here
                      style={{ fontSize: "20px" }}
                    />
                    <p style={{ color: "#5086fa" }}> 1 Ratings & 1 Reviewers</p>
                  </p>
                </div>
                {/* <Button
                  className="list_add-review-cta rounded pointer"
                  onClick={showModal1}
                  block
                >
                  Seller Reviews
                </Button> */}
              </div>
            )}
            <hr className="horizontal-line" />
          </div>
        )}
        {/* <Button
          className="list_add-review-cta rounded pointer"
          onClick={showModal}
          block
        >
          Product Reviews
        </Button> */}
      </div>
    </>
  );
}

export default ThumbnailGallery;
