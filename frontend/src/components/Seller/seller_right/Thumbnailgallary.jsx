/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from "react";
import { Button, Modal, Rate, Table } from "antd";
import callIcon from "./icons8-phone-48.png";
import saveIcon from "./icons8-save-48.png";
import shareIcon from "./icons8-share-48.png";
import whatsappIcon from "./icons8-whatsapp-48.png";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import Progressbar from "./Progressbar";
import DynamicReviews from "./Dynamic_review";
import {
  useGetproductReviewsQuery,
  useGetreviewSallerQuery,
} from "../../../redux/API/products/mobile";

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

  const handleSave = (id) => {
    try {
      // Fetch existing saved products array from local storage
      const existingSavedProducts =
        JSON.parse(localStorage.getItem("savedProducts")) || [];

      // Check if the product to be saved already exists in the array
      const isProductSaved = existingSavedProducts.some(
        (savedProduct) => savedProduct.id === id
      );

      // If the product doesn't exist, add it to the array
      if (!isProductSaved) {
        // Here, you would replace `product` with the object you want to save, including its ID
        const updatedSavedProducts = [...existingSavedProducts, { id }];

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
  const data = [
    {
      key: "1",
      name: "Brand",
      specification: product.selectBrand.brandName,
    },
    {
      key: "2",
      name: "Model",
      specification: product.selectModel
        ? product.selectModel.modelName
        : "N/A",
    },
    {
      key: "3",
      name: "Payment Mode",
      specification: product.paymentMode,
    },
    {
      key: "4",
      name: "Condition",
      specification: product.condition,
    },
    {
      key: "5",
      name: "Year of Purchase",
      specification: product.yearOfPurchase || "N/A",
    },
    {
      key: "6",
      name: "Available Quantity",
      specification: product.availableQuantity.toString(),
    },
    {
      key: "7",
      name: "Minimum Order",
      specification: product.minimumOrder.toString(),
    },
    {
      key: "8",
      name: "Service Mode",
      specification: product.serviceMode,
    },
    {
      key: "8",
      name: "Google Drive",
      specification: (
        <a
          href={product.googleDriveLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          {product.googleDriveLink}
        </a>
      ),
    },
  ];

  // fetcha  review
  const [reviews, setReviews] = useState([]);
  const { data: reviewData, isLoading } = useGetproductReviewsQuery(
    product._id
  );

  // console.log(product);
  const [sallerreview, setSellerreview] = useState([]);
  const { data: sellerreviewData } = useGetreviewSallerQuery(product.user);

  useEffect(() => {
    setReviews(reviewData?.reviews || []);
    setSellerreview(sellerreviewData?.reviews || []);
  }, [isLoading, reviewData, sellerreviewData]);

  const totalCount = reviews && reviews.length;
  const sallertotalCount = sallerreview ? sallerreview.length : 0;

  const averageRatingforsaller =
    sallerreview &&
    sallerreview.reduce(
      (total, sallerreview) => total + sallerreview.rating,
      0
    ) / totalCount;

  const averageRatingValuesalller = averageRatingforsaller || 0; // Set a default value if averageRating is undefined
  const formattedAverageRatingsaller = averageRatingValuesalller.toFixed(1);
  const averageRating =
    reviews &&
    reviews.reduce((total, review) => total + review.rating, 0) / totalCount;
  const averageRatingValue = averageRating || 0; // Set a default value if averageRating is undefined
  const formattedAverageRating = averageRatingValue.toFixed(1);
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
          <div className="detail-item" onClick={() => handleSave(product._id)}>
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
        <Modal
          open={isModalOpen}
          onOk={handleOk}
          footer={null}
          onCancel={handleCancel}
        >
          <div style={{ marginLeft: "10px" }}>
            <h3>Product Ratings & Reviews</h3>
            <p style={{ fontSize: "20px" }}>
              {formattedAverageRating}
              <Rate
                disabled
                allowHalf
                defaultValue={averageRating || 1}
                style={{ fontSize: "30px" }}
              />
              <p style={{ color: "#5086fa" }}>
                {totalCount} Ratings & {totalCount} Reviews
              </p>
            </p>
          </div>
          <DynamicReviews
            productid={product._id}
            Sellerid={product.user}
            type="product"
            data={reviewData}
          />
        </Modal>

        <Modal
          style={{ width: "50%" }}
          open={isModalOpen1}
          onOk={handleOk1}
          footer={null}
          onCancel={handleCancel1}
        >
          <h3>Seller Ratings & Reviews </h3>
          <p style={{ fontSize: "20px" }}>
            {formattedAverageRatingsaller}
            <Rate
              disabled
              allowHalf
              defaultValue={averageRating}
              style={{ fontSize: "20px" }}
            />
            <p style={{ color: "#5086fa" }}>
              {sallertotalCount
                ? `${sallertotalCount} Ratings & ${sallertotalCount} Reviews`
                : "No reviews yet"}
            </p>
          </p>
          <DynamicReviews
            productid={product._id}
            Sellerid={product.user}
            type="seller"
            data={sellerreviewData}
          />
        </Modal>

        {showproductdetails && (
          <div className="sellerreviw">
            <div className="product-detail">
              <p>{product.productDescription}</p>
            </div>

            <Table
              columns={columns}
              dataSource={data}
              showHeader={false}
              pagination={false}
              rowHoverable={false}
            />

            <div>
              <h5>Product Ratings & Reviews</h5>
              <p style={{ fontSize: "20px" }} onClick={showModal}>
                <span>{averageRating.toFixed(1)}</span>
                <Rate
                  disabled
                  allowHalf
                  defaultValue={averageRating || 0} // Remove the empty expression here
                  style={{ fontSize: "20px" }}
                />
                <p style={{ color: "#5086fa" }}>
                  {totalCount
                    ? `${totalCount} Ratings & ${totalCount} Reviews`
                    : "No reviews yet"}
                </p>
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
                  {/* <p>Total Published Posts -1</p> */}
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
                  <h5>Seller Ratings & Reviews!! </h5>
                  <p style={{ fontSize: "20px" }} onClick={showModal1}>
                    <span>{formattedAverageRatingsaller}</span>
                    <Rate
                      disabled
                      allowHalf
                      defaultValue={formattedAverageRatingsaller} // Remove the empty expression here
                      style={{ fontSize: "20px" }}
                    />
                    <p style={{ color: "#5086fa" }}>
                      {sallertotalCount
                        ? `${sallertotalCount} Ratings & ${sallertotalCount} Reviews`
                        : "No reviews yet"}
                    </p>
                  </p>
                </div>
              </div>
            )}
            <hr className="horizontal-line" />
          </div>
        )}
      </div>
    </>
  );
}

export default ThumbnailGallery;
