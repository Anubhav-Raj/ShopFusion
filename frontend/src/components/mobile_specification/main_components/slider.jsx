import React, { useState, useEffect } from "react";

function Slider() {
  const images = [
    "https://cdn1.smartprix.com/rx-iev3MZ6d8-w420-h420/realme-c67-5g.webp",
    "https://www.smartprix.com/ui/img/specs/pd1q1yc0dms?v=1s5nd10",
    "https://cdn1.smartprix.com/rx-izY3YntM9-w60-h60/realme-c67-5g.webp",
    "https://cdn1.smartprix.com/rx-iSzQnlLny-w60-h60/realme-c67-5g.webp",
    "https://cdn1.smartprix.com/rx-i7VRrrdxI-w60-h60/realme-c67-5g.webp",
  ];

  const [selectedImage, setSelectedImage] = useState(0);

  const handleListItemClick = (index) => {
    setSelectedImage(index);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Update selectedImage with the next image index
      setSelectedImage((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000);

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, [images.length]); // Run effect when images length changes

  return (
    <div className="main-5s7">
      <div className="wrapper-sha pg-prd-jb9">
        <div className="sm-emg">
          <div>
            <img
              className="sm-6o6"
              src={images[selectedImage]}
              alt={`Image ${selectedImage + 1}`}
            />
          </div>
        </div>
        <div className="sm-swiper-xg8">
          <ul>
            {images.map((image, index) => (
              <li
                key={index}
                className={index === selectedImage ? "nimld" : ""}
                onClick={() => handleListItemClick(index)}
              >
                <img className="sm-6o6" src={image} alt={`Image ${index + 1}`} />
              </li>
            ))}
          </ul>
        </div>
        
      </div>
    </div>
  );
}

export default Slider;
