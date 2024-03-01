// store.js
import { configureStore } from "@reduxjs/toolkit";
import brandReducer from "./brand.slice";
import productReducer from "./product.slice";
import { userReducer } from "./user.slice";
import { userAPI } from "./API/user";
import { OtpAPI } from "./API/otp";
import { mobileAPI } from "./API/products/mobile";
import { AddressAPI } from "./API/products/profile";
import userinfo from "./API/user_slice/user.slice";
import loginReducer from "./API/user_slice/login.slice";
import { CheckUniqueAPI } from "./API/uniqueIdentification";
import { mobileproduct } from "./API/products/mobile.reducer.js";
const store = configureStore({
  reducer: {
    [userAPI.reducerPath]: userAPI.reducer,
    [mobileAPI.reducerPath]: mobileAPI.reducer,
    [OtpAPI.reducerPath]: OtpAPI.reducer,
    [CheckUniqueAPI.reducerPath]: CheckUniqueAPI.reducer,
    [AddressAPI.reducerPath]: AddressAPI.reducer,
    [mobileproduct.name]: mobileproduct.reducer,
    [userReducer.name]: userReducer.reducer,
    brands: brandReducer,
    products: productReducer,
    userInfo: userinfo,
    login: loginReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      userAPI.middleware,
      mobileAPI.middleware,
      AddressAPI.middleware,
      OtpAPI.middleware,
      CheckUniqueAPI.middleware
    ),
});

export default store;
