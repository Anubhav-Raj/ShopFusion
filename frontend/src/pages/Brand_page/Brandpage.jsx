/* eslint-disable jsx-a11y/alt-text */
import "./brand.css";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBrands } from "../../redux/brand.slice";
import Loader from "../../components/loader";

function Brandpage() {
  const dispatch = useDispatch();
  const brandsResponse = useSelector((state) => state.brands);
  const status = brandsResponse.status;
  const error = brandsResponse.error;
  const brands = brandsResponse.brands;
  console.log(status);
  const baseURL =
    process.env.NODE_ENV === "production"
      ? "https://production-api.com"
      : process.env.REACT_APP_API_BASE_URL || "http://localhost:4026";

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchBrands());
    }
  }, [status, dispatch]);

  if (status === "loading") {
    return <Loader />;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }
  return (
    <>
      <main>
        <div>
          <div>
            <div className="box-o3x style-bd5" id="sty-dlo">
              <div className="header-219">
                <div className="title-ttc">
                  <h2>Shop By Brands</h2>
                </div>
                <div className="box-hf8"></div>
              </div>
              <div className="sm-91v rou-p1a scr-tgg">
                {Array.isArray(brands.data) &&
                  brands.data.map((brand, index) => (
                    <a href={`/`} key={index}>
                      <img
                        width={50}
                        height={50}
                        className="sm-i8i"
                        src={`${baseURL}${brand.img}`}
                        alt={`${brand.name} Logo`}
                      />
                      <span>{brand.name}</span>
                    </a>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Brandpage;
