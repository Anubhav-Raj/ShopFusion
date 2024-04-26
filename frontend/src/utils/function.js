import { useSelector } from "react-redux";

// utils/function.js
export function useSortProducts(productData) {
  const sortType = useSelector((state) => state.sort.sortType.value);
  if (!productData || !productData.products) {
    return [];
  }

  const sortProducts = (products, sortType) => {
    let sortedProducts = [...products];
    if (sortType === "HightoLow") {
      sortedProducts.sort((a, b) => b.price - a.price);
    } else if (sortType === "LowtoHigh") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (sortType === "Newest") {
      sortedProducts.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
    } else if (sortType === "Oldest") {
      sortedProducts.sort(
        (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
      );
    }
    return sortedProducts;
  };

  return sortProducts(productData.products, sortType);
}
