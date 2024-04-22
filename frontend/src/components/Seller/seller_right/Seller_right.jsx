import React, { useEffect } from "react";
import Thumbnailgallary from "./Thumbnailgallary";
// import Progressbar from "./Progressbar";
import "./seller_right.css";
import { useGetSubCategoryproductQuery } from "../../../redux/API/products/mobile";
import { useGetDepartmentsProductQuery } from "../../../redux/API/products/mobile";
import { useGetAllproductQuery } from "../../../redux/API/products/mobile";
import { Spin } from "antd";
import { useSelector } from "react-redux";

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
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <Spin tip="Loading" size="large">
          <div className="content" />
        </Spin>
      </div>
    );
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
  const Type = useSelector((state) => state.sort.sortType);
  const sortType = Type && Type.value;
  // console.log(sortType);
  const sortProducts = (products, sortType) => {
    let sortedProducts = [...products];
    if (sortType === "HightoLow") {
      sortedProducts.sort((a, b) => b.price - a.price);
    } else if (sortType === "LowtoHigh") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (sortType === "Newest") {
      // Sort by newest first (most recent date)
      sortedProducts.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
    } else if (sortType === "Oldest") {
      // Sort by oldest first (earliest date)
      sortedProducts.sort(
        (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
      );
    }
    return sortedProducts;
  };

  const sortedProducts = sortProducts(productsToRender, sortType);
  console.log(sortedProducts);
  return (
    <>
      {sortedProducts.length > 0 ? (
        sortedProducts.map((product) => (
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
