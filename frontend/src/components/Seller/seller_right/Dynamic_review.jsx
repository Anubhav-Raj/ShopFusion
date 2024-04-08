import React, { useState } from "react";
import "./dynamicreview.css";
import { Rate } from "antd";
import { useReviewSallerMutation } from "../../../redux/API/products/mobile";
import toast from "react-hot-toast";
import { useAppSelector } from "../../../redux/store";

function DynamicReview({ productid }) {
  const user = useAppSelector((state) => state.user2.user);

  const [message, setMessage] = useState("");
  const [reviews, setReviews] = useState([]);
  const [value, setValue] = useState(null); // State for rating value
  const desc = ["terrible", "bad", "normal", "good", "wonderful"];
  const [ReviewSaller, { loading, error }] = useReviewSallerMutation();
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
      const response = await ReviewSaller({
        productid,
        message: newMessage,
        rating: value,
      });
      console.log(response);
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

    setReviews([newReview, ...reviews]);
    setMessage("");
    setValue(null); // Reset rating value after adding review
    // ReviewSaller({ productid, message: newMessage, rating: value }); // Use the new message for the API call
  };

  return (
    <>
      <section className="faq_dynamic-main">
        <div className="container">
          <div className="listing__faq">
            <div className="faq_inner-listing">
              <hr className="horizontal-line" />
              <h2 className="secondary-color py-2 f-24">Seller Review</h2>
              <div className="faq_box-wrapper">
                <div className="faq_form-box-inner border border-1 border-secondary rounded p-3">
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

      <section className="content-wrapper-faq py-2">
        <div className="container">
          {reviews.length > 0 ? (
            <div className="main_reviews-container">
              {reviews.map((review, index) => (
                <div
                  key={index}
                  className="border py-3 my-2 border-dark rounded faq_inner container"
                >
                  <div className="accordian-link d-flex align-items-center pointer py-2">
                    <img
                      src="https://source.unsplash.com/random/2200x1200/?person"
                      alt="user"
                      className="img-fluid user_image"
                    />
                    <h3 className="reveiew_user_name ps-3">
                      {review.username}
                    </h3>
                  </div>
                  <p className="review_answer">{review.message}</p>
                  <p className="review_rating">
                    Rating: {review.rating ? review.rating : "No rating"}
                  </p>
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
