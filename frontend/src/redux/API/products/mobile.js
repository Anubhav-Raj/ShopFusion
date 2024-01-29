import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import axios from "axios";

const baseUrl = "http://localhost:5000/api/user/";

export const mobileAPI = createApi({
  reducerPath: "mobileAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
  }),
  endpoints: (builder) => ({
    createMobile: builder.mutation({
      query: (mobile) => ({
        url: "createMobile",
        method: "POST",
        body: mobile,
      }),
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
