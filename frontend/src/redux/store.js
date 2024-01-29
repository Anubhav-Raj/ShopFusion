// store.js
import { configureStore } from "@reduxjs/toolkit";
import brandReducer from "./brand.slice";
import productReducer from "./product.slice";
import { userReducer } from "./user.slice";
import { userAPI } from "./API/user";
import { mobileAPI } from "./API/products/mobile";
const store = configureStore({
  reducer: {
    [userAPI.reducerPath]: userAPI.reducer,
    [mobileAPI.reducerPath]: mobileAPI.reducer,
    [userReducer.name]: userReducer.reducer,
    brands: brandReducer,
    products: productReducer,
  },
  // middleware: (mid) => [...mid(), userAPI.middleware],
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userAPI.middleware, mobileAPI.middleware),
});

export default store;
