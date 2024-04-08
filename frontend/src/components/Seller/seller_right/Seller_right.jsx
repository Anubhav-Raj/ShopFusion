import React from "react";
import Thumbnailgallary from "./Thumbnailgallary";
import Progressbar from "./Progressbar";
import "./seller_right.css";
import { useGetAllproductQuery } from "../../../redux/API/products/mobile";

function Seller_right({ id }) {
  // console.log(id);
  const { data, isLoading, isError } = useGetAllproductQuery();

  if (isLoading) {
    return <Progressbar />;
  }

  if (isError) {
    return <div>No Data</div>;
  }

  return (
    <>
      {data && data.products && data.products.length > 0 ? (
        data.products.map((product) => (
          <div key={product._id} style={{ marginTop: "10px" }}>
            <Thumbnailgallary product={product} />
          </div>
        ))
      ) : (
        <div>No products found</div>
      )}
    </>
  );
}

export default Seller_right;
