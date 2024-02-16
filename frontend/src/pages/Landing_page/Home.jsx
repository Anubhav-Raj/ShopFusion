import React, { useState } from "react";
import Department from "./departmrnt";
import Video_displayer from "../../components/Landing/Video_displayer";
import "./Homepg.css";

function Home() {
  const videoData = [
    {
      id: 1,
      src: "https://www.youtube.com/embed/ZvefBu_mdzk?autoplay=1&mute=1",
      thumbnail: "https://i.ytimg.com/vi/ZvefBu_mdzk/0.jpg",
      title: "Watch out these beautiful and fresh flowers and make your eyes",
    },
    {
      id: 2,
      src: "https://www.youtube.com/embed/ZkUMVndGCiw?autoplay=1&mute=1",
      thumbnail: "https://i.ytimg.com/vi/ZkUMVndGCiw/0.jpg",
      title:
        "Hoovu Fresh Flowers Review | Shark Tank India Season 2 Products Review | Online Pooja",
    },
    {
      id: 3,
      src: "https://www.youtube.com/embed/Z4_OMNnKFbI?autoplay=1&mute=1",
      thumbnail: "https://i.ytimg.com/vi/Z4_OMNnKFbI/0.jpg",
      title:
        "Diamond Press 'Fresh Flowers' Mini Slimline Envelope Stamps & Dies Set Review",
    },
    {
      id: 4,
      src: "https://www.youtube.com/embed/FlSqyinF6Rw?autoplay=1&mute=1",
      thumbnail: "https://i.ytimg.com/vi/FlSqyinF6Rw/0.jpg",
      title: "Fresh Flowers -",
    },
    {
      id: 5,
      src: "https://www.youtube.com/embed/N7Cv2O0rUHI?autoplay=1&mute=1",
      thumbnail: "https://i.ytimg.com/vi/N7Cv2O0rUHI/0.jpg",
      title:
        "Inspired by the Queen I make a funeral wreath with fresh flowers from the",
    },
    {
      id: 3,
      src: "https://www.youtube.com/embed/Z4_OMNnKFbI?autoplay=1&mute=1",
      thumbnail: "https://i.ytimg.com/vi/Z4_OMNnKFbI/0.jpg",
      title:
        "Diamond Press 'Fresh Flowers' Mini Slimline Envelope Stamps & Dies Set Review",
    },
    {
      id: 4,
      src: "https://www.youtube.com/embed/FlSqyinF6Rw?autoplay=1&mute=1",
      thumbnail: "https://i.ytimg.com/vi/FlSqyinF6Rw/0.jpg",
      title: "Fresh Flowers -",
    },
    {
      id: 5,
      src: "https://www.youtube.com/embed/N7Cv2O0rUHI?autoplay=1&mute=1",
      thumbnail: "https://i.ytimg.com/vi/N7Cv2O0rUHI/0.jpg",
      title:
        "Inspired by the Queen I make a funeral wreath with fresh flowers from the",
    },
  ];

  return (
    <>
      <Video_displayer videoData={videoData} />
      <Department/>
    </>
  );
}

export default Home;
