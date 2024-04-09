import React, { useEffect } from "react";
import Thumbnailgallary from "./Thumbnailgallary";
import Progressbar from "./Progressbar";
import "./seller_right.css";
import { useGetSubCategoryproductQuery } from "../../../redux/API/products/mobile";
import { useGetDepartmentsProductQuery } from "../../../redux/API/products/mobile";
import { useGetAllproductQuery } from "../../../redux/API/products/mobile";
import { Spin } from "antd";

function SubcategoryDataFetcher({ data }) {
  const { id, type } = data;

  // Determine which hook to use based on the type
  const fetchHook =
    type === "subcategory"
      ? useGetSubCategoryproductQuery
      : type === "dept"
      ? useGetDepartmentsProductQuery
      : useGetAllproductQuery;

  const { data: fetchedData, isLoading, isError } = fetchHook(id);

  useEffect(() => {}, [id, type]);

  if (isLoading) {
    return <Spin tip="Loading" size="large"></Spin>;
  }

  if (isError) {
    return (
      <div>{`No ${
        type === "subcategory"
          ? "Subcategory"
          : type === "dept"
          ? "Department"
          : "All"
      } Data`}</div>
    );
  }

  return <SellerRightWithData data={fetchedData} />;
}

function SellerRightWithData({ data }) {
  const productsToRender =
    data && data.products && data.products.length > 0 ? data.products : [];

  return (
    <>
      {productsToRender.length > 0 ? (
        productsToRender.map((product) => (
          <div key={product._id} style={{ marginTop: "10px" }}>
            <Thumbnailgallary product={product} />
          </div>
        ))
      ) : (
        <div style={{ margin: "10rem" }}>No products found</div>
      )}
    </>
  );
}

function Seller_right({ data }) {
  return (
    <>
      <SubcategoryDataFetcher data={data} />
    </>
  );
}

export default Seller_right;
