import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { customFetchBase } from "../coustomFetchBase";

// const baseQuery = fetchBaseQuery({ baseUrl });
export const brandApi = createApi({
  reducerPath: "brandApi",
  baseQuery: customFetchBase,
  tagTypes: ["brand"],
  endpoints: (builder) => ({
    createBrand: builder.mutation({
      query: (barnd) => {
        const fromData = new FormData();
        fromData.append("sellerType", barnd.type);
        fromData.append("category_id", barnd.categories);
        fromData.append("department_id", barnd.department);
        const brandNames = [];
        const brandImages = [];

        barnd.brandFields.forEach((brand, index) => {
          brandNames.push(brand.Brandname);
          brandImages.push(brand.brandImage);
        });
        fromData.append(`brandName`, brandNames);
        brandImages.forEach((photo, index) => {
          fromData.append("brandImage", photo);
        });

        return {
          url: "product/createbrand",
          method: "POST",
          credentials: "include",
          body: fromData,
        };
      },
      invalidatesTags: ["brand"],
    }),
    allbrand: builder.query({
      query: () => {
        return {
          url: "product/fetchallBrand",
          method: "GET",
          credentials: "include",
        };
      },
      providesTags: ["brand"],
    }),

    fetchCategoriesBrand: builder.query({
      query: (id) => {
        const fromData = {
          categories_id: id,
        };
        return {
          url: "product/fetchcategoriesbrands",
          method: "POST",
          body: fromData,
          credentials: "include",
        };
      },
      providesTags: ["brand"],
    }),

    createBrandModal: builder.mutation({
      query: (modal) => {
        return {
          url: "product/createbrandmodal",
          method: "POST",
          credentials: "include",
          body: modal,
        };
      },
      invalidatesTags: ["brand"],
    }),

    fetchAllBrandModal: builder.query({
      query: (id) => {
        const form = {
          id,
        };
        return {
          url: "product/fetchallbrandmodal",
          method: "POST",
          body: form,
          credentials: "include",
        };
      },
      providesTags: ["brand"],
    }),
  }),
});

export const {
  useCreateBrandMutation,
  useFetchCategoriesBrandQuery,
  useCreateBrandModalMutation,
  useFetchAllBrandModalQuery,
  useAllbrandQuery,
} = brandApi;
