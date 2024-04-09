import React, { useEffect } from "react";
import Thumbnailgallary from "./Thumbnailgallary";
import Progressbar from "./Progressbar";
import "./seller_right.css";
import { useGetAllproductQuery } from "../../../redux/API/products/mobile";
import { useGetSubCategoryproductQuery } from "../../../redux/API/products/mobile";

function SubcategoryDataFetcher({ id }) {
  // Fetch data for a specific subcategory
  const {
    data: subcategoryData,
    isLoading: subcategoryLoading,
    isError: subcategoryError,
  } = useGetSubCategoryproductQuery(id);

  useEffect(() => {
    console.log("ID:", id);
  }, [id]);

  if (subcategoryLoading) {
    return <Progressbar />;
  }

  if (subcategoryError) {
    return <div>No Subcategory Data</div>;
  }

  return <SellerRightWithData data={subcategoryData} />;
}

function SellerRightWithData({ data }) {
  const {
    data: allProductData,
    isLoading: allProductLoading,
    isError: allProductError,
  } = useGetAllproductQuery();

  if (allProductLoading) {
    return <Progressbar />;
  }

  if (allProductError) {
    return <div>No All Product Data</div>;
  }

  // Determine which data to render based on availability
  const productsToRender =
    data && data.products && data.products.length > 0
      ? data.products
      : allProductData &&
        allProductData.products &&
        allProductData.products.length > 0
      ? allProductData.products
      : [];

  return (
    <>
      {productsToRender.length > 0 ? (
        productsToRender.map((product) => (
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

function Seller_right({ id }) {
  console.log(id);

  return (
    <>
      {id ? (
        <SubcategoryDataFetcher id={id} />
      ) : (
        <SellerRightWithData data={null} />
      )}
    </>
  );
}

export default Seller_right;
