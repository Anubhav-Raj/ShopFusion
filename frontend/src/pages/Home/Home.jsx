import React from "react";

import Bootom from "../../components/home_compnents/bottomdetails/Bootom"
import Topstories from "../../components/home_compnents/top_stories/Topstories"
import Slider from "../../components/home_compnents/top_left_slider/slider"
import Websites from "../../components/home_compnents/website_names/websites";
import Catagries from "../../components/home_compnents/caetagries/catagries";
function Home() {
  
  return (
    <>
      <main className="pg-hom snipcss-WCyck">
        <Websites/>
        <Slider/>
        <Topstories/>
        <Catagries/>
        <Bootom/>
      </main>
    </>
  );
}

export default Home;
