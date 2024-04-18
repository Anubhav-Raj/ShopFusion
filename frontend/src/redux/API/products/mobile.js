/* eslint-disable no-unreachable */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { customFetchBase } from "../coustomFetchBase";

export const mobileAPI = createApi({
  reducerPath: "mobileAPI",
  baseQuery: customFetchBase,
  tagTypes: ["mobilepost", "productpost"],
  endpoints: (builder) => ({
    createMobile: builder.mutation({
      query: (mobile) => {
        console.log(mobile);
        const formData = new FormData();
        formData.append("sellerType", mobile.sellerType);
        formData.append("sellerName", mobile.sellerName);
        formData.append("gstNumber", mobile.gstNumber);
        formData.append("color", mobile.color);
        formData.append("selectBrand", mobile.selectBrand);
        formData.append("selectModel", mobile.selectModel);
        formData.append("productName", mobile.mobileName);
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
        formData.append("productDescription", mobile.mobileDescription);
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
        // console.log(mobile);
        const formData = new FormData();
        formData.append("id", mobile.id);
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

        // Handle uploadPhotos
        mobile.uploadPhotos.forEach((photo, index) => {
          formData.append("uploadPhotos", photo.originFileObj);
        });

        // Handle uploadEditImage
        mobile.uploadeditimage.forEach((photo, index) => {
          formData.append("edituplaodphoto", photo);
        });

        // Handle uploadVideo
        if (mobile.uploadVideo && mobile.uploadVideo.file) {
          formData.append("uploadVideo", mobile.uploadVideo.file.originFileObj);
        }

        // Handle uploadFile
        if (mobile.uploadFile && mobile.uploadFile.file) {
          formData.append("uploadFile", mobile.uploadFile.file.originFileObj);
        }
        if (mobile.uploadVideo) {
          formData.append("uploadVideo", mobile.uploadVideo);
        }
        if (mobile.uploadFile) {
          formData.append("uploadFile", mobile.uploadFile);
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
        return {
          url: "product/userallproduct",
          method: "GET",
          credentials: "include",
        };
      },
      providesTags: ["mobilepost"],
    }),
    getAllproduct: builder.query({
      query: () => {
        return {
          url: `product/getallproduct`,
          method: "GET",
          credentials: "include",
        };
      },
      providesTags: ["mobilepost"],
    }),
    getSubCategoryproduct: builder.query({
      query: (id) => {
        console.log("Entering", id);
        return {
          url: `product/subcategoriesProducts/${id}`,
          method: "GET",
          credentials: "include",
        };
      },
      providesTags: ["mobilepost"],
    }),
    getDepartmentsProduct: builder.query({
      query: (id) => {
        return {
          url: `product/getProductsByDepartment/${id}`,
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
    // Review  the   product
    reviewProduct: builder.mutation({
      query: (data) => {
        // console.log(data);
        return {
          url: "product/productReviews",
          method: "POST",
          body: data,
          credentials: "include",
        };
      },
      invalidatesTags: ["mobilepost"],
    }),
    reviewSaller: builder.mutation({
      query: (data) => {
        console.log(data);
        return {
          url: "product/sallerReviews",
          method: "POST",
          body: data,
          credentials: "include",
        };
      },
      invalidatesTags: ["mobilepost"],
    }),
    getreviewSaller: builder.query({
      query: (id) => {
        // console.log("Entering", id);
        return {
          url: `product/getsallerReviews/${id}`,
          method: "GET",
          credentials: "include",
        };
      },
      providesTags: ["mobilepost"],
    }),
    getproductReviews: builder.query({
      query: (id) => {
        console.log("Entering", id);
        return {
          url: `product/getproductReviews/${id}`,
          method: "GET",
          credentials: "include",
        };
      },
      providesTags: ["mobilepost"],
    }),

    //CREATE OTHER PRODUCT
    createProduct: builder.mutation({
      query: (product) => {
        console.log(product);
        const formData = new FormData();
        formData.append("sellerType", product.sellerType);
        formData.append("sellerName", product.sellerName);
        formData.append("gstNumber", product.gstNumber);
        formData.append("selectBrand", product.selectBrand);
        formData.append("selectModel", product.selectModel);
        formData.append("productName", product.mobileName);
        formData.append("condition", product.condition);
        formData.append("yearOfPurchase", product.yearOfPurchase);
        formData.append("availableQuantity", product.availableQuantity);
        formData.append("minimumOrder", product.minimumOrder);
        formData.append("price", product.price);
        formData.append("paymentMode", product.paymentMode);
        formData.append("serviceMode", product.serviceMode);
        formData.append("enterAddress", product.enterAddress);
        formData.append("googleDriveLink", product.googleDriveLink);
        formData.append("productDescription", product.mobileDescription);
        formData.append("selectedType", product.selectedType);
        formData.append("selecteddepartment", product.selecteddepartment);
        formData.append("selectedcategories", product.selectedcategories);
        formData.append("selectedsubcategories", product.selectedsubcategories);
        formData.append(
          "selectedsubcategoriesitem",
          product.selectedsubcategoriesitem
        );
        const otherFeatureArray = product.values.otherfeature;
        const otherFeatureString = JSON.stringify(otherFeatureArray);

        formData.append("otherFeature", otherFeatureString);

        // Handle uploadPhotos
        product.uploadPhotos.forEach((photo, index) => {
          formData.append("uploadPhotos", photo.originFileObj);
        });

        // Handle uploadVideo
        if (product.uploadVideo && product.uploadVideo.file) {
          formData.append(
            "uploadVideo",
            product.uploadVideo.file.originFileObj
          );
        }

        // Handle uploadFile
        if (product.uploadFile && product.uploadFile.file) {
          formData.append("uploadFile", product.uploadFile.file.originFileObj);
        }

        // Append other product-specific fileds or data to FormData

        return {
          url: "product/createProduct", // Adjust URL according to your backend endpoint for creating other products
          method: "POST",
          body: formData,
          credentials: "include",
        };
      },

      invalidatesTags: ["productpost"], // Adjust invalidation tag if needed
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
  useGetAllproductQuery,
  useGetDepartmentsProductQuery,
  useGetSubCategoryproductQuery,
  useCreateProductMutation,
  useReviewProductMutation,
  useReviewSallerMutation,
  useGetreviewSallerQuery,
  useGetproductReviewsQuery,
} = mobileAPI;
