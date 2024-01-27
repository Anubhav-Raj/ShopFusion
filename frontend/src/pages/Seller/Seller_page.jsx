import React from "react";
import "./seller.css";
import Location_list from "../../components/Seller/location_list";
import Dropdown_right from "../../components/Seller/Dropdown_right";
import Seller_right from "../../components/Seller/seller_right/Seller_right";

function Seller_page() {
  const Peripherals = [
    {
      href: "/mobiles/xiaomi-brand",
      imgSrc: "/img/mobiles.png",
      imgAlt: "Xiaomi",
      brandName: "Mobiles",
    },
    {
      href: "/mobiles/samsung-brand",
      imgSrc: "/img/tablet.png",
      imgAlt: "Samsung",
      brandName: "Tablets",
    },
    {
      href: "/mobiles/vivo-brand",
      imgSrc: "/img/laptop.png",
      imgAlt: "Vivo",
      brandName: "Laptops",
    },
    {
      href: "/mobiles/realme-brand",
      imgSrc: "/img/computer-removebg-preview.png",
      imgAlt: "Realme",
      brandName: "Computers",
    },
    {
      href: "/mobiles/oneplus-brand",
      imgSrc: "/img/monitor-removebg-preview.png",
      imgAlt: "OnePlus",
      brandName: "Monitors",
    },
    {
      href: "/mobiles/oneplus-brand",
      imgSrc: "/img/tv_s-removebg-preview.png",
      imgAlt: "OnePlus",
      brandName: "Tv's",
    },
    {
      href: "/mobiles/oneplus-brand",
      imgSrc: "/img/printer-removebg-preview.png",
      imgAlt: "OnePlus",
      brandName: "Printers",
    },
    {
      href: "/mobiles/oneplus-brand",
      imgSrc: "/img/projector-removebg-preview.png",
      imgAlt: "OnePlus",
      brandName: "Projectors",
    },
    {
      href: "/mobiles/oneplus-brand",
      imgSrc: "/img/router-removebg-preview.png",
      imgAlt: "OnePlus",
      brandName: "Routers & Modems",
    },
  ];

  return (
    <>
      <div className="seller_main">
        <div className="box-o3x style-bd5" id="sty-dlo">
          <Location_list />
          <div className="smalldivcompo">
            <div className="header-219">
              <div className="title-ttc">
                <h2>Electronics Peripherals</h2>
              </div>
              <div className="box-hf8"></div>
            </div>
            <div className="sm-911v rou-p1a scr-tgg">
              {Peripherals.map((brand, index) => (
                <BrandCard11 key={index} {...brand} />
              ))}
            </div>
          </div>
          <div className="smalldivcompo">
            <div className="header-219">
              <div className="title-ttc">
                <h2>Electronics Components</h2>
              </div>
              <div className="box-hf8"></div>
            </div>
            <div className="sm-911v rou-p1a scr-tgg">
              {Peripherals.map((brand, index) => (
                <BrandCard11 key={index} {...brand} />
              ))}
            </div>
          </div>
          <div className="smalldivcompo">
            <div className="header-219">
              <div className="title-ttc">
                <h2>Electronics Accessories</h2>
              </div>
              <div className="box-hf8"></div>
            </div>
            <div className="sm-911v rou-p1a scr-tgg">
              {Peripherals.map((brand, index) => (
                <BrandCard11 key={index} {...brand} />
              ))}
            </div>
          </div>
        </div>
        <div className="rightdiv">
                <Dropdown_right/>
                <Seller_right/>
                
        </div>
      </div>
    </>
  );
}

export default Seller_page;

function BrandCard11({ href, imgSrc, imgAlt, brandName }) {
  return (
    <a className="card_amazon" href={href}>
      <img
        width={50}
        height={50}
        className="sm-i8i"
        src={imgSrc}
        alt={imgAlt}
      />
      <span>{brandName}</span>
    </a>
  );
}
