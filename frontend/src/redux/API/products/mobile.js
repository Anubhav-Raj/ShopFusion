/* eslint-disable no-unreachable */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { customFetchBase } from "../coustomFetchBase";

export const mobileAPI = createApi({
  reducerPath: "mobileAPI",
  baseQuery: customFetchBase,
  tagTypes: ["mobilepost"],
  endpoints: (builder) => ({
    createMobile: builder.mutation({
      query: (mobile) => {
        // console.log(mobile);
        const formData = new FormData();
        formData.append("sellerType", mobile.sellerType);
        formData.append("sellerName", mobile.sellerName);
        formData.append("gstNumber", mobile.gstNumber);
        formData.append("color", mobile.color);
        formData.append("selectBrand", mobile.selectBrand);
        formData.append("selectModel", mobile.selectModel);
        formData.append("mobileName", mobile.mobileName);
        formData.append("condition", mobile.condition);
        formData.append("user", mobile.user);
        formData.append("yearOfPurchase", mobile.yearOfPurchase);
        formData.append("availableQuantity", mobile.availableQuantity);
        formData.append("minimumOrder", mobile.minimumOrder);
        formData.append("price", mobile.price);
        formData.append("paymentMode", mobile.paymentMode);
        formData.append("serviceMode", mobile.serviceMode);
        formData.append("enterAddress", mobile.enterAddress);
        formData.append("googleDriveLink", mobile.googleDriveLink);
        formData.append("mobileDescription", mobile.mobileDescription);
        formData.append("selectedType", mobile.selectedType);
        formData.append("selecteddepartment", mobile.selecteddepartment);
        formData.append("selectedcategories", mobile.selectedcategories);
        formData.append("selectedsubcategories", mobile.selectedsubcategories);
        formData.append(
          "selectedsubcategoriesitem",
          mobile.selectedsubcategoriesitem
        );

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

        for (let pair of formData.entries()) {
          console.log(pair[0] + ", " + pair[1]);
        }

        return {
          url: "product/createMobile",
          method: "POST",
          body: formData,
          credentials: "include",
        };
      },

      invalidatesTags: ["mobilepost"],
    }),

    editMobile: builder.mutation({
      query: (mobile) => {
        const formData = new FormData();
        formData.append("sellerType", mobile.sellerType);
        formData.append("sellerName", mobile.sellerName);
        formData.append("gstNumber", mobile.gstNumber);
        formData.append("color", mobile.color);
        formData.append("selectBrand", mobile.selectBrand._id);
        formData.append("selectModel", mobile.selectModel._id);
        formData.append("mobileName", mobile.mobileName);
        formData.append("condition", mobile.condition);
        formData.append("yearOfPurchase", mobile.yearOfPurchase);
        formData.append("availableQuantity", mobile.availableQuantity);
        formData.append("minimumOrder", mobile.minimumOrder);
        formData.append("price", mobile.price);
        formData.append("paymentMode", mobile.paymentMode);
        formData.append("serviceMode", mobile.serviceMode);
        formData.append("enterAddress", mobile.enterAddress.value);
        formData.append("googleDriveLink", mobile.googleDriveLink);
        formData.append("mobileDescription", mobile.mobileDescription);
        formData.append("selectedType", mobile.selectedType);
        formData.append("selecteddepartment", mobile.selecteddepartment);
        formData.append("selectedcategories", mobile.selectedcategories);
        formData.append("selectedsubcategories", mobile.selectedsubcategories);
        formData.append(
          "selectedsubcategoriesitem",
          mobile.selectedsubcategoriesitem
        );
        // formData.append("edituplaodphoto", mobile.uploadeditimage);

        // Log formData entries
        // console.log("Form Data Entries:");
        // for (const pair of formData.entries()) {
        //   console.log(pair[0] + ", " + pair[1]);
        // }

        // Handle uploadPhotos
        mobile.uploadPhotos.forEach((photo, index) => {
          formData.append("uploadPhotos", photo.originFileObj);
        });
        console.log("Uploaded Photos:", mobile.uploadPhotos);

        // Handle uploadEditImage
        mobile.uploadeditimage.forEach((photo, index) => {
          formData.append("edituplaodphoto", photo);
        });
        console.log("Uploaded Edit Images:", mobile.uploadeditimage);

        // Handle uploadVideo
        if (mobile.uploadVideo && mobile.uploadVideo.file) {
          formData.append("uploadVideo", mobile.uploadVideo.file.originFileObj);
        }

        // Handle uploadFile
        if (mobile.uploadFile && mobile.uploadFile.file) {
          formData.append("uploadFile", mobile.uploadFile.file.originFileObj);
        }

        // Return the mutation query
        return {
          url: "product/editmobile",
          method: "POST",
          body: formData,
          credentials: "include",
        };
      },
      invalidatesTags: ["mobilepost"],
    }),

    deleteMobile: builder.mutation({
      query: (productId) => {
        return {
          url: "product/deletemobile",
          method: "POST",
          body: { id: productId },
          credentials: "include",
        };
      },
      invalidatesTags: ["mobilepost"],
    }),

    getAllBrand: builder.mutation({
      query: () => {
        return {
          url: "product/allbrands",
          method: "GET",
          credentials: "include",
        };
      },
    }),

    getAllBrandModal: builder.mutation({
      query: (brandId) => {
        return {
          url: "product/allmodelsonmodel",
          method: "POST",
          body: brandId,
          credentials: "include",
        };
      },
    }),

    getUserProducts: builder.query({
      query: () => {
        console.log("Productfetxhing");
        return {
          url: "product/userallproduct",
          method: "GET",
          credentials: "include",
        };
      },
      providesTags: ["mobilepost"],
    }),

    fetchPayment: builder.mutation({
      query: (formData) => ({
        url: "payment/productpayment",
        method: "POST",
        body: formData,
        credentials: "include",
      }),
    }),
    verifyPayment: builder.mutation({
      query: (responseData) => ({
        url: "payment/mobilepaymentverification",
        method: "POST",
        body: responseData,
        credentials: "include",
      }),
      invalidatesTags: ["mobilepost"],
    }),
  }),
});

export const {
  useCreateMobileMutation,
  useGetAllBrandMutation,
  useGetAllBrandModalMutation,
  useGetUserProductsQuery,
  useEditMobileMutation,
  useDeleteMobileMutation,
  useFetchPaymentMutation,
  useVerifyPaymentMutation,
} = mobileAPI;
