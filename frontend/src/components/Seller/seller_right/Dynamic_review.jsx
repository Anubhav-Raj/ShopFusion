import React, { useState } from "react";
import "./dynamicreview.css";
function DynamicReview() {
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const [reviews, setReviews] = useState([]);

  const handleAddReview = () => {
    const newReview = {
      username: username,
      message: message,
    };
    setReviews([newReview,...reviews]);
    setUsername("");
    setMessage("");
  };

  return (
    <>
      {/* Dynamic Reviews Section */}
      <section className="faq_dynamic-main">
        <div className="container">
          <div className="listing__faq">
            <div className="faq_inner-listing">
              <h2 className="secondary-color py-2 f-24">Seller Review</h2>
              <div className="faq_box-wrapper">
                <div className="faq_form-box-inner border border-1 border-secondary rounded p-3">
                  {/* <input
                    type="text"
                    name="username"
                    id="review-username"
                    placeholder="Name"
                    className="w-100 py-2 form-control rounded-0"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  /> */}
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
                      {/* <input
                        type="file"
                        name="userimage"
                        id="review-userimage"
                        placeholder="Name"
                        className="py-2 rounded-0"
                        required
                      /> */}
                      <div
                        className="list_add-review-cta rounded pointer"
                        onClick={handleAddReview}
                      >
                        Add Review
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Wrapper FAQ */}
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
