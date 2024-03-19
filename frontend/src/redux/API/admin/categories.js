import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { customFetchBase } from "../coustomFetchBase";

export const CategoryApi = createApi({
  reducerPath: "category",
  baseQuery: customFetchBase,
  tagTypes: ["category"],
  endpoints: (builder) => ({
    createCategory: builder.mutation({
      query: (category) => {
        // console.log(category);
        const formData = new FormData();
        formData.append("sellerType", category.sallerType);
        formData.append("choose_department_id", category.department);
        formData.append("categoryName", category.categoryName);
        formData.append("categoryImage", category.categoryImage);
        formData.append("categoryDescription", category.categoryDescription);

        return {
          url: "admin/createCategory",
          method: "POST",
          credentials: "include",
          body: formData,
        };
      },
      invalidatesTags: ["category"],
      // onQueryStarted: (_, { dispatch, queryFulfilled }) => {
      //   dispatch(
      //     queryFulfilled({
      //       endpointName: "createCategory",
      //       response: {},
      //     })
      //   );
      // },
    }),

    fetchAllCategory: builder.query({
      query: (id) => {
        const formData = {
          choose_department_id: id,
        };
        return {
          url: "admin/fetchallcategories",
          method: "POST",
          credentials: "include",
          body: formData,
        };
      },
      invalidatesTags: ["category"],
    }),
  }),
});

export const { useCreateCategoryMutation, useFetchAllCategoryQuery } =
  CategoryApi;
