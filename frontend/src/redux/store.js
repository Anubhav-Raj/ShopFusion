// store.js
import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import brandReducer from "./brand.slice";
import productReducer from "./product.slice";
import { userReducer } from "./user.slice";
import { userAPI } from "./API/user";
import { PublicApi } from "./API/publicApi/publicApi.js";
// import { OtpAPI } from "./API/otp";
import { mobileAPI } from "./API/products/mobile";
import { AddressAPI } from "./API/products/profile";
import userinfo from "./API/user_slice/user.slice";
import loginReducer from "./API/user_slice/login.slice";
import { CheckUniqueAPI } from "./API/uniqueIdentification";
import { mobileproduct } from "./API/products/mobile.reducer.js";
import { rating_and_review } from "./API/products/rating_and_review.js";
//Admin
import { sallerTypeApi } from "./API/admin/saller.js";
import { CategoryApi } from "./API/admin/categories.js";
import { DepartmentApi } from "./API/admin/department.js";
import { SubCategoriesApi } from "./API/admin/subcategories.js";
import { ItemApi } from "./API/admin/item.js";
import { OtherProductAPI } from "./API/products/allOtherproduct.js";
import { brandApi } from "./API/admin/brand.js";
import { authApi } from "./API/user2.js";
import { userApi1 } from "./API/userApi.js";
import userReducer2 from "./API/userSlices";

const store = configureStore({
  reducer: {
    [userAPI.reducerPath]: userAPI.reducer,
    [userApi1.reducerPath]: userApi1.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [mobileAPI.reducerPath]: mobileAPI.reducer,
    [OtherProductAPI.reducerPath]: OtherProductAPI.reducer,
    // [OtpAPI.reducerPath]: OtpAPI.reducer,
    [CheckUniqueAPI.reducerPath]: CheckUniqueAPI.reducer,
    [AddressAPI.reducerPath]: AddressAPI.reducer,
    [mobileproduct.name]: mobileproduct.reducer,
    [userReducer.name]: userReducer2.reducer,
    [rating_and_review.reducerPath]: rating_and_review.reducer,
    // For Admin
    [sallerTypeApi.reducerPath]: sallerTypeApi.reducer,
    [DepartmentApi.reducerPath]: DepartmentApi.reducer,
    [CategoryApi.reducerPath]: CategoryApi.reducer,
    [SubCategoriesApi.reducerPath]: SubCategoriesApi.reducer,
    [ItemApi.reducerPath]: ItemApi.reducer,
    [brandApi.reducerPath]: brandApi.reducer,
    user2: userReducer2,
    brands: brandReducer,
    products: productReducer,
    userInfo: userinfo,
    login: loginReducer,
    [PublicApi.reducerPath]: PublicApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      userAPI.middleware,
      mobileAPI.middleware,
      AddressAPI.middleware,
      // OtpAPI.middleware,
      CheckUniqueAPI.middleware,
      sallerTypeApi.middleware,
      DepartmentApi.middleware,
      CategoryApi.middleware,
      SubCategoriesApi.middleware,
      ItemApi.middleware,
      brandApi.middleware,
      OtherProductAPI.middleware,
      rating_and_review.middleware,
      authApi.middleware,
      userApi1.middleware,
      PublicApi.middleware
    ),
});
export const RootState = store.getState;
export const AppDispatch = store.dispatch;
export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;

export default store;
