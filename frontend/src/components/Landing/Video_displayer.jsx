import React, { useState } from 'react';
import "./video_displayer.css"

function Video_displayer({ videoData }) {
  const [currentVideoSrc, setCurrentVideoSrc] = useState(videoData[0].src);

  const handleVideoClick = (src) => {
    setCurrentVideoSrc(src);
  };

  return (
    <>
      <div className="bgfff mb30px br2px p20px pt10px ffos dn snipcss-eyoVN style-R5Qn9" id="you_tube_video_section">
        <div className="rvg-sec">
          <div className="rvg-large">
            <div className="video-container">
              <iframe className="video-iframe" src={currentVideoSrc} title="BigVideo" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
            </div>
            <div className="video-txt">{videoData.find(video => video.src === currentVideoSrc)?.title}</div>
          </div>
          <div className="bx-wrapper style-ioyB8" id="style-ioyB8">
            <div className="bx-viewport style-B4io3" id="style-B4io3">
              <div className="rvg-list style-pOtv2" id="style-pOtv2">
                {videoData.map((video) => (
                  <div key={video.id} className="rvg-iteam style-D2nwo" onClick={() => handleVideoClick(video.src)}>
                    <div className="video-thumb">
                      <img loading="lazy" decoding="async" fetchpriority="low" src={video.thumbnail} alt={video.title} />
                      <div className="icon-play">
                        <i className="fa fa-youtube-play" />
                      </div>
                    </div>
                    <div className="video-txt">{video.title}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Video_displayer;
