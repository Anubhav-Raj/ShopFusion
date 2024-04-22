import React, { useEffect, useState } from "react";
import "./dynamicreview.css";
import { Rate, Select } from "antd";
import {
  SortAscendingOutlined,
  DownOutlined,
  FilterOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useReviewSallerMutation } from "../../../redux/API/products/mobile";
import toast from "react-hot-toast";
import { useGetreviewSallerQuery } from "../../../redux/API/products/mobile";
import { useAppSelector } from "../../../redux/store";
import { useReviewProductMutation } from "../../../redux/API/products/mobile";
import { useGetproductReviewsQuery } from "../../../redux/API/products/mobile";
import Progressbar from "./Progressbar";
import { addReview, selectReviews } from "../../../redux/review.slice.js";
import { useDispatch, useSelector } from "react-redux";
function DynamicReview({ productid, Sellerid, type, data }) {
  const user = useAppSelector((state) => state.user2.user);
  console.log("reviews", data);

  const [message, setMessage] = useState("");
  const [reviews, setReviews] = useState(data ? data.reviews : []);
  const [value, setValue] = useState(null);
  const desc = ["terrible", "bad", "normal", "good", "wonderful"];

  const [ReviewSaller, { loading, error }] = useReviewSallerMutation();
  const [ReviewProduct, { loading: prodctloding, error: productre }] =
    useReviewProductMutation();

  const handleAddReview = async () => {
    let newMessage = message; // Use the provided message by default
    // If no message is provided but there's a rating, set the description as the message
    if (!message && value !== null) {
      newMessage = desc[Math.floor(value) - 1]; // Index starts from 0, so subtract 1
    }
    const newReview = {
      message: newMessage, // Use the new message
      rating: value, // Include rating in the new review object
    };
    try {
      let response;
      if (type === "seller") {
        response = await ReviewSaller({
          productid,
          message: newMessage,
          rating: value,
        });
      } else if (type === "product") {
        // console.log("sdf");
        response = await ReviewProduct({
          productid,
          message: newMessage,
          rating: value,
        });
      }
      // console.log(response);
      if (response && response.data && response.data.reviewSaller) {
        // Handle successful response
        toast.success("Review submitted successfully");
      } else {
        // Handle unsuccessful response
        toast.error("Failed to submit review");
      }
    } catch (err) {
      console.error("Error adding review:", err);
      toast.error("An error occurred while submitting review");
    }

    // setReviews([newReview, ...reviews]);
    setReviews(Array.isArray(reviews) ? [newReview, ...reviews] : [newReview]);

    setMessage("");
    setValue(null);
  };

  const calculateDaysAgo = (createdAt) => {
    const currentDate = new Date();
    const reviewDate = new Date(createdAt);
    const timeDifference = currentDate.getTime() - reviewDate.getTime();
    const daysDifference = Math.floor(timeDifference / (1000 * 3600 * 24));
    return daysDifference;
  };
  const [sortType, setSortType] = useState("newest");

  // Function to sort reviews based on sortType
  const sortReviews = (reviews, sortType) => {
    if (!Array.isArray(reviews)) {
      console.error("Reviews is not an array:", reviews);
      return [];
    }

    const sortedReviews = [...reviews];
    if (sortType === "newest") {
      sortedReviews.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
    } else if (sortType === "oldest") {
      sortedReviews.sort(
        (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
      );
    } else if (sortType === "Negative") {
      sortedReviews.sort((a, b) => (a.rating || 0) - (b.rating || 0));
    } else if (sortType === "Positive") {
      sortedReviews.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    }
    return sortedReviews;
  };

  useEffect(() => {
    const sortedReviews = sortReviews(reviews, sortType);
    setReviews(sortedReviews);
  }, [sortType]);

  return (
    <>
      <Progressbar reviews={reviews} />
      <section className="faq_dynamic-main">
        <div className="container">
          <div className="listing__faq">
            <div className="faq_inner-listing">
              <hr className="horizontal-line" />
              <div className="faq_box-wrapper">
                <div className="faq_form-box-inner border border-1 border-secondary rounded p-3">
                  <h6>Write Your Review</h6>
                  Rating:{" "}
                  <Rate
                    tooltips={desc}
                    allowHalf
                    value={value}
                    onChange={(newValue) => setValue(newValue)}
                  />
                  <div className="input-group">
                    <textarea
                      aria-label="With textarea"
                      rows="4"
                      cols="50"
                      id="rewiew_message"
                      name="message"
                      placeholder="Message"
                      className="form-control mt-3 w-100 rounded-0"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                    ></textarea>
                  </div>
                  <div className="list_add-faq pt-4">
                    <div className="input-group align-items-center">
                      {user ? (
                        <div
                          className="list_add-review-cta rounded pointer"
                          onClick={handleAddReview}
                        >
                          Add Review
                        </div>
                      ) : (
                        <label>Login To Give Review</label>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="content-wrapper-faq py-1">
        <Select
          suffixIcon={<SortAscendingOutlined style={{ color: "black" }} />}
          labelInValue
          defaultValue={{
            value: "",
            label: "Sort By",
          }}
          style={{
            width: 160,
            paddingLeft: 10,
          }}
          onChange={(value) => setSortType(value.value)}
          options={[
            {
              value: "newest",
              label: "Newest First",
            },
            {
              value: "oldest",
              label: "Oldest First",
            },
            {
              value: "Negative",
              label: "Negative review",
            },
            {
              value: "Positive",
              label: "Positive review",
            },
          ]}
        />
        <div className="container">
          {reviews && reviews.length > 0 ? (
            <div className="main_reviews-container">
              {reviews.map((review, index) => (
                <div
                  key={index}
                  className="border py-1 my-2 border-dark rounded faq_inner container"
                >
                  <div className="accordian-link d-flex align-items-center pointer py-2">
                    <img
                      src={review?.userId?.photo}
                      className="user_image"
                      alt="user"
                    />
                    <h5 className="reveiew_user_name ps-3">
                      {review?.userId?.name}
                      <p className="review_rating">
                        <Rate
                          tooltips={desc}
                          disabled
                          allowHalf
                          style={{ fontSize: "15px" }}
                          value={review.rating || 0}
                        />{" "}
                        <span style={{ fontSize: "10px" }}>
                          {calculateDaysAgo(review.createdAt)} days ago
                        </span>
                      </p>
                    </h5>
                  </div>

                  <p className="review_answer">{review.review}</p>
                </div>
              ))}
            </div>
          ) : (
            <h3 className="main-head text-center">No Reviews Yet !!</h3>
          )}
        </div>
      </section>
    </>
  );
}

export default DynamicReview;
