// store.js
import { configureStore } from "@reduxjs/toolkit";
import brandReducer from "./brand.slice";
import productReducer from "./product.slice";

const store = configureStore({
  reducer: {
    brands: brandReducer,
    products: productReducer,
  },
});

export default store;
