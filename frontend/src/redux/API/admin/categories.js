import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "http://localhost:5000/api/admin/";
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
        console.log(category);
        const formData = new FormData();
        formData.append("sellerType", category.sallerType);
        formData.append("choose_department_id", category.department);
        formData.append("categoryName", category.categoryName);
        formData.append("categoryImage", category.categoryImage);
        formData.append("categoryDescription", category.categoryDescription);

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
          url: "fetchallcategories",
          method: "POST",
          body: formData,
        };
      },
      invalidatesTags: ["category"],
    }),
  }),
});

export const { useCreateCategoryMutation, useFetchAllCategoryQuery } =
  CategoryApi;
