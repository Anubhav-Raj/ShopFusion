import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "http://localhost:5000/api/product/";
const token = localStorage.getItem("ZoneHub");

const baseQuery = fetchBaseQuery({ baseUrl });
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

        // console  from data into key pair
        // for (const pair of fromData.entries()) {
        //   console.log(pair[0] + ": " + pair[1]);
        // }

        return {
          url: "createbrand",
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: fromData,
        };
      },
      invalidatesTags: ["admin"],
    }),
    fetchAllBrand: builder.query({
      query: (id) => `/department/${id}`,
      providesTags: ["admin"],
    }),
  }),
});

export const { useCreateBrandMutation, useFetchAllBrandQuery } = brandApi;
