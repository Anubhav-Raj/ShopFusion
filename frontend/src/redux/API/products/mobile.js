/* eslint-disable no-unreachable */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import axios from "axios";

const baseUrl = "http://localhost:5000/api/product/";
const token = localStorage.getItem("ZoneHub");

export const mobileAPI = createApi({
  reducerPath: "mobileAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
  }),
  tagTypes: ["mobilepost"],
  endpoints: (builder) => ({
    providesTags: ["mobilepost"],

    createMobile: builder.mutation({
      query: (mobile) => {
        const formData = new FormData();
        formData.append("sellerType", mobile.sellerType);
        formData.append("sellerName", mobile.sellerName);
        formData.append("gstNumber", mobile.gstNumber);
        formData.append("color", mobile.color);
        formData.append("selectBrand", mobile.selectBrand);
        formData.append("selectModel", mobile.selectModel);
        formData.append("mobileName", mobile.mobileName);
        formData.append("condition", mobile.condition);
        formData.append("yearOfPurchase", mobile.yearOfPurchase);
        formData.append("availableQuantity", mobile.availableQuantity);
        formData.append("minimumOrder", mobile.minimumOrder);
        formData.append("price", mobile.price);
        formData.append("paymentMode", mobile.paymentMode);
        formData.append("serviceMode", mobile.serviceMode);
        formData.append("enterAddress", mobile.enterAddress);
        formData.append("googleDriveLink", mobile.googleDriveLink);
        formData.append("mobileDescription", mobile.mobileDescription);

        //  return console.log(mobile);
        // Handle uploadPhotos
        mobile.uploadPhotos.forEach((photo, index) => {
          formData.append("uploadPhotos", photo.originFileObj);
        });

        // Handle uploadVideo
        if (mobile.uploadVideo && mobile.uploadVideo.file) {
          formData.append("uploadVideo", mobile.uploadVideo.file.originFileObj);
        }

        // Handle uploadFile
        if (mobile.uploadFile && mobile.uploadFile.file) {
          formData.append("uploadFile", mobile.uploadFile.file.originFileObj);
        }

        return {
          url: "createMobile",
          method: "POST",
          body: formData,
          headers: {
            Authorization: "Bearer " + token,
          },
        };
      },

      invalidatesTags: ["mobilepost"],
    }),
    getProductById: builder.query({
      query: (productId) => `product/${productId}`,
    }),
    getAllProducts: builder.query({
      query: () => "allProducts",
    }),
  }),
});

export const {
  useCreateMobileMutation,
  useGetProductByIdQuery,
  useGetAllProductsQuery,
} = mobileAPI;
