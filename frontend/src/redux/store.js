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
//Admin
import { sallerTypeApi } from "./API/admin/saller.js";
import { CategoryApi } from "./API/admin/categories.js";
import { DepartmentApi } from "./API/admin/department.js";
import { SubCategoriesApi } from "./API/admin/subcategories.js";
import { ItemApi } from "./API/admin/item.js";

const store = configureStore({
  reducer: {
    [userAPI.reducerPath]: userAPI.reducer,
    [mobileAPI.reducerPath]: mobileAPI.reducer,
    [OtpAPI.reducerPath]: OtpAPI.reducer,
    [CheckUniqueAPI.reducerPath]: CheckUniqueAPI.reducer,
    [AddressAPI.reducerPath]: AddressAPI.reducer,
    [mobileproduct.name]: mobileproduct.reducer,
    [userReducer.name]: userReducer.reducer,
    // For Admin
    [sallerTypeApi.name]: sallerTypeApi.reducer,
    [CategoryApi.name]: CategoryApi.reducer,
    [DepartmentApi.name]: DepartmentApi.reducer,
    [SubCategoriesApi.name]: SubCategoriesApi.reducer,
    [ItemApi.name]: ItemApi.reducer,

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
      CheckUniqueAPI.middleware,
      sallerTypeApi.middleware,
      CategoryApi.middleware,
      DepartmentApi.middleware,
      SubCategoriesApi.middleware,
      ItemApi.middleware
    ),
});

export default store;
