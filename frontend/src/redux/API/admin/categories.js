import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "http://localhost:5000/api/product/";
const token = localStorage.getItem("ZoneHub");

export const CategoryApi = createApi({
  reducerPath: "category",
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
  }),
  tagTypes: ["category"],
  endpoints: (builder) => ({
    createCategory: builder.mutation({
      query: (category) => {
        const formData = new FormData();
        formData.append("sallerType", category.sallerType);
        formData.append("department", category.department);
        formData.append("categoryName", category.categoryName);
        formData.append("categoryImage", category.categoryImage);
        formData.append("categoryDescription", category.categoryDescription);
        // for (let [key, value] of formData.entries()) {
        //   console.log(key, value);
        // }
        return {
          url: "createCategory",
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        };
      },
      invalidatesTags: ["category"],
      onQueryStarted: (_, { dispatch, queryFulfilled }) => {
        dispatch(
          queryFulfilled({
            endpointName: "createCategory",
            response: {},
          })
        );
      },
    }),

    fetchAllCategory: builder.query({
      query: () => {
        return {
          url: "fetchAllCategory",
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
      invalidatesTags: ["category"],
      onQueryStarted: (_, { dispatch, queryFulfilled }) => {
        dispatch(
          queryFulfilled({
            endpointName: "fetchAllCategory",
            response: {},
          })
        );
      },
    }),
  }),
});

export const { useCreateCategoryMutation, useFetchAllCategoryQuery } =
  CategoryApi;
