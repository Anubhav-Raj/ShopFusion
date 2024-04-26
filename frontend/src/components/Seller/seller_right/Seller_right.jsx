import React, { useEffect } from "react";
import Thumbnailgallary from "./Thumbnailgallary";
import "./seller_right.css";
import { Spin } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductData } from "../../../redux/product.slice";
import { useSortProducts } from "../../../utils/function";

function Seller_right({ data }) {
  const { id, type } = data;
  const filters = useSelector((state) => state.filter.selectedOptions);

  const dispatch = useDispatch();

  useEffect(() => {
    // Define a function to fetch product data and dispatch it
    const fetchData = () => {
      const filterData = filters.reduce((acc, filter) => {
        const existingEntry = acc.find(
          (entry) => entry.parent === filter.parent
        );
        if (existingEntry) {
          existingEntry.value.push(filter.value);
        } else {
          acc.push({ parent: filter.parent, value: [filter.value] });
        }
        return acc;
      }, []);

      dispatch(fetchProductData({ id, type, filterData }));
    };

    // Call the fetchData function
    fetchData();
  }, [dispatch, id, type, filters]);

  const productData = useSelector((state) => state.products.productData);
  const status = useSelector((state) => state.products.status);
  const error = useSelector((state) => state.products.error);
  const sortedProducts = useSortProducts(productData);

  if (status === "loading") {
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

  if (status === "failed") {
    return <div>{error}</div>;
  }

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

export default Seller_right;
