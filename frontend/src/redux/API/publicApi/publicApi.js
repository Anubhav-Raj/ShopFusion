import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const baseUrl = "http://localhost:5000/api/";
export const PublicApi = createApi({
  reducerPath: "PublicApi",
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
  }), // Adjust the base URL as per your API endpoint
  tagTypes: ["department"],
  endpoints: (builder) => ({
    publicfetchAllDepartment: builder.query({
      query: (selectedItems) => {
        // console.log(selectedItems);
        const formData = {
          choose_type_id: selectedItems,
        };
        return {
          url: "admin/publicfetchAllDepartment",
          method: "POST",
          body: formData,
        };
      },
      invalidatesTags: ["department"],
    }),
    publicfetchAllCategories: builder.query({
      query: (selectedItems) => {
        // console.log(selectedItems);
        const formData = {
          choose_department_id: selectedItems,
        };
        return {
          url: "admin/publicfetchallcategories",
          method: "POST",
          body: formData,
        };
      },
      invalidatesTags: ["department"],
    }),

    publicfetchAllSubCategories: builder.query({
      query: (selectedItems) => {
        // console.log(selectedItems);
        const formData = {
          choose_category_id: selectedItems,
        };
        return {
          url: "admin/publicfetchallsubcategories",
          method: "POST",
          body: formData,
        };
      },
      invalidatesTags: ["department"],
    }),
    publicfetchProduct: builder.query({
      query: (id) => {
        const formData = {
          SubCategories_id: id,
        };
        return {
          url: "product/subcategoriesProducts",
          method: "POST",
          body: formData,
        };
      },
      invalidatesTags: ["department"], // Uncomment this line if necessary
    }),
  }),
});

export const {
  usePublicfetchAllDepartmentQuery,
  usePublicfetchAllCategoriesQuery,
  usePublicfetchAllSubCategoriesQuery,
  usePublicfetchProductQuery,
} = PublicApi;
