import React from "react";
import "./progressbar.css";

const Progressbar = ({ reviews }) => {
  // Function to calculate the count for each rating category
  const calculateRatingCounts = (reviews) => {
    const ratingCounts = {
      ratings: [5, 4, 3, 2, 1],
      type: ["Excellent", "Very Good", "Good", "Average", "Poor"],
      counts: [0, 0, 0, 0, 0],
    };

    // Iterate through reviews and update counts
    reviews.forEach((review) => {
      const index = ratingCounts.ratings.indexOf(review.rating);
      if (index !== -1) {
        ratingCounts.counts[index]++;
      }
    });

    return ratingCounts;
  };

  // Calculate rating counts based on reviews
  const ratingCounts = calculateRatingCounts(reviews);

  // Calculate the total sum of counts
  const totalSum = ratingCounts.counts.reduce((sum, count) => sum + count, 0);

  // Function to calculate progress value based on counts
  const calculateProgressWidth = (count) => {
    return (count / totalSum) * 100;
  };

  // Function to determine color class based on progress width
  const getColorClass = (width) => {
    if (width < 30) {
      return "redcol";
    } else if (width >= 30 && width < 50) {
      return "orangecol";
    } else {
      return "greencol";
    }
  };

  return (
    <>
      <div className="col-8-12 _3qpj74 _31DkEZ snipcss-paalR">
        <div className="_13sFCC miQW6D ">
          <ul className="_2jr1F_">
            {ratingCounts.ratings.map((rating, index) => (
              <li key={index} className="_28Xb_u">
                <div className="omG9iE">
                  <span className="_26f_zl">{rating}</span>
                  <span className="_2xBWPJ">★</span>
                </div>
              </li>
            ))}
          </ul>
          <ul className="_36LmXx">
            {ratingCounts.type.map((type, index) => (
              <li key={index} className="_28Xb_u">
                <div className="_144uJVNT">{type}</div>
              </li>
            ))}
          </ul>
          <ul className="_2Plkj9">
            {ratingCounts.counts.map((count, index) => (
              <li key={index} className="_28Xb_u">
                <div>
                  <div className="_3UaKsS">
                    <span
                      className={`EkB-Xt ${getColorClass(
                        calculateProgressWidth(count)
                      )}`}
                      style={{ width: `${calculateProgressWidth(count)}%` }}
                    ></span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <ul className="_36LmXx">
            {ratingCounts.counts.map((count, index) => (
              <li key={index} className="_28Xb_u">
                <div className="_1uJVNT">{count}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Progressbar;
