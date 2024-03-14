import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "http://localhost:5000/api/product/";
const token = localStorage.getItem("ZoneHub");

// const baseQuery = fetchBaseQuery({ baseUrl });
export const brandApi = createApi({
  reducerPath: "brandApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
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
          url: "createbrand",
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: fromData,
        };
      },
      invalidatesTags: ["brand"],
    }),
    fetchAllBrand: builder.query({
      query: (id) => `/department/${id}`,
      providesTags: ["brand"],
    }),

    createBrandModal: builder.mutation({
      query: (modal) => {
        const formData = new FormData();
        formData.append("modalData", JSON.stringify(modal)); // Assuming modal is an object
        return {
          url: "createbrandmodal",
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        };
      },
      invalidatesTags: ["brand"],
    }),

    fetchAllBrandModal: builder.query({
      query: (id) => {
        const formData = new FormData();
        formData.append("brand_id", id);
        return {
          url: "fetchallBrandModal",
          method: "POST",
          body: formData,
        };
      },
      providesTags: ["brand"],
    }),
  }),
});

export const {
  useCreateBrandMutation,
  useFetchAllBrandQuery,
  useCreateBrandModalMutation,
  useFetchAllBrandModalQuery,
} = brandApi;
