import React from "react";
import Aside_fileter from "../../components/Mobile_Home/filter/Aside_fileter";
import Filter from "../../components/Mobile_Home/mobile_view_filter/Filter";
import Mobile_list from "../../components/Mobile_Home/mobile_list/Mobile_list";
import "./mobile_home.css";

function MobileHome() {
  const isMobile = window.innerWidth <= 750;

  return (
    <>
      <main
        className={`pg-wof aside-xg9 aside-fpw ${isMobile ? "mobile" : ""}`}
      >
        {!isMobile && <Aside_fileter />}
        <Mobile_list />
        <Filter />
      </main>
    </>
  );
}

export default MobileHome;
