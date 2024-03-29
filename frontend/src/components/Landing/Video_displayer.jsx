import React, { useState } from "react";
import "./video_displayer.css";
import { Select } from "antd";
import { CaretDownOutlined } from "@ant-design/icons";
import { CaretUpOutlined } from "@ant-design/icons";

function Video_displayer({ videoData }) {
  const [videovisible, isvideovisible] = useState(false);
  const [currentVideoSrc, setCurrentVideoSrc] = useState(videoData[0].src);
  const [selectedType, setSelectedselectedType] = useState();
  const handleVideoClick = (src) => {
    setCurrentVideoSrc(src);
  };
  const tabItems = [
    { label: "India", value: "India" },
    { label: "Russia", value: "Russia" },
    { label: "America", value: "America" },
    { label: "UAE", value: "UAE" },
    { label: "UK", value: "UK" },
  ];
  const Languagelist = [
    { label: "Hindi", value: "Hindi" },
    { label: "Russian", value: "Russian" },
    { label: "English", value: "English" },
    { label: "Arbi", value: "Arbi" },
    { label: "French", value: "French" },
  ];
  const handleType = (value) => {
    setSelectedselectedType(value);
  };

  return (
    <>
      <div className="form-data-wrapper221">
        <div className="form-data-wrapper">
          {videovisible && (
            <div className="formbold-form-wrapper1">
              <Select
                showSearch
                style={{
                  width: 150,
                }}
                placeholder="Language"
                optionFilterProp="children"
                filterOption={(input, option) =>
                  (option?.label ?? "").includes(input)
                }
                filterSort={(optionA, optionB) =>
                  (optionA?.label ?? "")
                    .toLowerCase()
                    .localeCompare((optionB?.label ?? "").toLowerCase())
                }
                options={Languagelist}
                onChange={handleType}
              />
            </div>
          )}
          <h3
            onClick={() => {
              isvideovisible(!videovisible);
            }}
            className="watchmorevide"
          >
            Watch Related Video
            {videovisible ? (
              <span>
                <CaretUpOutlined />
              </span>
            ) : (
              <span>
                <CaretDownOutlined />
              </span>
            )}
          </h3>

          <div className="formbold-form-wrapper1">
            <Select
              showSearch
              style={{
                width: 150,
              }}
              placeholder="All Countries"
              optionFilterProp="children"
              filterOption={(input, option) =>
                (option?.label ?? "").includes(input)
              }
              filterSort={(optionA, optionB) =>
                (optionA?.label ?? "")
                  .toLowerCase()
                  .localeCompare((optionB?.label ?? "").toLowerCase())
              }
              options={tabItems}
              onChange={handleType}
            />
          </div>
        </div>
      </div>
      {videovisible && (
        <div
          className="bgfff mb30px br2px p20px pt10px ffos dn snipcss-eyoVN style-R5Qn9"
          id="you_tube_video_section"
        >
          <div className="rvg-sec">
            <div className="rvg-large">
              <div className="video-container">
                <iframe
                  className="video-iframe"
                  src={currentVideoSrc}
                  title="BigVideo"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="video-txt">
                {
                  videoData.find((video) => video.src === currentVideoSrc)
                    ?.title
                }
              </div>
            </div>
            <div className="bx-wrapper style-ioyB8" id="style-ioyB8">
              <div className="bx-viewport style-B4io3" id="style-B4io3">
                <div className="rvg-list style-pOtv2" id="style-pOtv2">
                  {videoData.map((video) => (
                    <div
                      key={video.id}
                      className="rvg-iteam style-D2nwo"
                      onClick={() => handleVideoClick(video.src)}
                    >
                      <div className="video-thumb">
                        <img
                          loading="lazy"
                          decoding="async"
                          fetchpriority="low"
                          src={video.thumbnail}
                          alt={video.title}
                        />
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
      )}
    </>
  );
}

export default Video_displayer;
