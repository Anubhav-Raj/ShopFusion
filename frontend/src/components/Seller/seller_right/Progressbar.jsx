import React from "react";
import "./progressbar.css";

const Progressbar = () => {
  // Sample data
  const data = {
    ratings: [5, 4, 3, 2, 1],
    type: ["Excellent","Very Good","Good","Average","Poor"],
    counts: ["51", "9", "31", "7", "2"],
  };

  // Function to calculate progress value based on counts
  const calculateProgressWidth = (count, totalSum) => {
    const countValue = parseFloat(count.replace(",", ""));
    const progressWidth = (countValue / totalSum) * 100;
    return progressWidth;
  };

  // Calculate the total sum of counts
  const totalSum = data.counts.reduce((sum, count) => {
    const countValue = parseFloat(count.replace(",", ""));
    return sum + countValue;
  }, 0);

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
            {data.ratings.map((rating, index) => (
              <li key={index} className="_28Xb_u">
                <div className="omG9iE">
                  <span className="_26f_zl">{rating}</span>
                  <span className="_2xBWPJ">★</span>
                </div>
              </li>
            ))}
          </ul>
          <ul className="_36LmXx">
            {data.type.map((count, index) => (
              <li key={index} className="_28Xb_u">
                <div className="_144uJVNT">{count}</div>
              </li>
            ))}
          </ul>
          <ul className="_2Plkj9">
            {data.counts.map((count, index) => (
              <li key={index} className="_28Xb_u">
                <div>
                  <div className="_3UaKsS">
                    <span
                      className={`EkB-Xt ${getColorClass(calculateProgressWidth(count, totalSum))}`}
                      style={{ width: `${calculateProgressWidth(count, totalSum)}%` }}
                    ></span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <ul className="_36LmXx">
            {data.counts.map((count, index) => (
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
