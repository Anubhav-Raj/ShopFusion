import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import axios from "axios";

const baseUrl = "http://localhost:5000/api/user/";
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
      query: (mobile) => ({
        url: "createMobile",
        method: "POST",
        body: mobile,
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "multipart/form-data",
        },
      }),
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
