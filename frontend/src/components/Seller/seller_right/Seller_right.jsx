import React from "react";
import Thumbnailgallary from "./Thumbnailgallary";
import Progressbar from "./Progressbar";
import "./seller_right.css";
import { useGetproductbasedonSubCategoryQuery } from "../../../redux/API/products/mobile";

function Seller_right({ subcategoryName }) {
  const { data, isLoading, isError } =
    useGetproductbasedonSubCategoryQuery(subcategoryName);

  if (isLoading) {
    return <Progressbar />;
  }

  if (isError) {
    return <div>Error occurred while fetching data</div>;
  }

  return (
    <>
      {data && data.products && data.products.length > 0 ? (
        data.products.map((product) => (
          <div key={product.id} style={{ marginTop: "10px" }}>
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
