// store.js
import { configureStore } from "@reduxjs/toolkit";
import brandReducer from "./brand.slice";
import productReducer from "./product.slice";
import { userReducer } from "./user.slice";
import { userAPI } from "./API/user";
import { mobileAPI } from "./API/products/mobile";
import { AddressAPI } from "./API/products/profile";
const store = configureStore({
  reducer: {
    [userAPI.reducerPath]: userAPI.reducer,
    [mobileAPI.reducerPath]: mobileAPI.reducer,
    [AddressAPI.reducerPath]: AddressAPI.reducer,
    [userReducer.name]: userReducer.reducer,
    brands: brandReducer,
    products: productReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      userAPI.middleware,
      mobileAPI.middleware,
      AddressAPI.middleware
    ),
});

export default store;
