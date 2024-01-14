import React, { useRef } from "react";

function MY_post_list({ tabItems }) {
  const tabListRef = useRef(null);

  const handleScrollLeft = () => {
    if (tabListRef.current) {
      const scrollAmount = 200; // You can adjust the scroll distance as needed
      animateScroll(tabListRef.current, tabListRef.current.scrollLeft, tabListRef.current.scrollLeft - scrollAmount, 500);
    }
  };

  const handleScrollRight = () => {
    if (tabListRef.current) {
      const scrollAmount = 200; // You can adjust the scroll distance as needed
      animateScroll(tabListRef.current, tabListRef.current.scrollLeft, tabListRef.current.scrollLeft + scrollAmount, 500);
    }
  };

  const handleWheelScroll = (e) => {
    e.preventDefault(); // Prevent the default behavior of the mouse wheel event
    if (tabListRef.current) {
      // You can adjust the scroll distance as needed
      tabListRef.current.scrollLeft += e.deltaY;
    }
  };

  const animateScroll = (element, start, end, duration) => {
    const startTime = performance.now();

    const animate = (currentTime) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const easing = easeInOutQuad(progress);
      const scrollPosition = start + (end - start) * easing;
      element.scrollLeft = scrollPosition;

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  };

  const easeInOutQuad = (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);

  return (
    <div className="sm-top-tabs">
      <button onClick={handleScrollLeft}><h2>&#60;</h2></button>
      <div className="insetlines" ref={tabListRef} onWheel={handleWheelScroll}>
        {tabItems.map((tab, index) => (
          <a
            key={index}
            href={tab.href}
            data-way=""
            aria-label={tab.label}
            id={tab.id}
            className={tab.className}
          >
            {tab.label}
          </a>
        ))}
      </div>
      <button onClick={handleScrollRight}><h2>&#62;</h2></button>
    </div>
  );
}

export default MY_post_list;
