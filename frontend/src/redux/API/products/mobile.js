/* eslint-disable no-unreachable */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "http://localhost:5000/api/product/";
const token = localStorage.getItem("ZoneHub");

export const mobileAPI = createApi({
  reducerPath: "mobileAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
  }),
  tagTypes: ["mobilepost"],
  endpoints: (builder) => ({
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

        //return;

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
          url: "editmobile",
          method: "POST",
          body: formData,
          headers: {
            Authorization: "Bearer " + token,
          },
        };
      },
      invalidatesTags: ["mobilepost"],
    }),

    getAllBrand: builder.mutation({
      query: () => {
        return {
          url: "allbrands",
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
    }),
    getAllBrandModal: builder.mutation({
      query: (brandId) => {
        return {
          url: "allmodelsonmodel",
          method: "POST",
          body: brandId,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
    }),

    getUserProducts: builder.query({
      query: () => {
        return {
          url: "userallproduct",
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
      providesTags: ["mobilepost"],
    }),
    deleteMobile: builder.mutation({
      query: (productId) => {
        return {
          url: "deletemobile",
          method: "POST",
          body: { id: productId },
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
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
} = mobileAPI;
