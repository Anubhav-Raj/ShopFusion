// api.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = `${process.env.REACT_APP_API_BASE_URL}api/`;
console.log(baseUrl);

export const PublicApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
  }),
  tagTypes: ["department"],
  endpoints: (builder) => ({
    publicfetchAllDepartment: builder.query({
      query: (selectedItems) => ({
        url: "admin/publicfetchAllDepartment",
        method: "POST",
        body: { choose_type_id: selectedItems },
      }),
      invalidatesTags: ["department"],
    }),
    publicfetchAllCategories: builder.query({
      query: (selectedItems) => ({
        url: "admin/publicfetchallcategories",
        method: "POST",
        body: { choose_department_id: selectedItems },
      }),
      invalidatesTags: ["department"],
    }),
    publicfetchAllSubCategories: builder.query({
      query: (selectedItems) => ({
        url: "admin/publicfetchallsubcategories",
        method: "POST",
        body: { choose_category_id: selectedItems },
      }),
      invalidatesTags: ["department"],
    }),

    publicfetchProduct: builder.query({
      query: (id) => ({
        url: "product/subcategoriesProducts",
        method: "POST",
        body: { SubCategories_id: id },
      }),
      invalidatesTags: ["department"], // Uncomment if necessary
    }),
    publicfetchAllBrandBasedCategory: builder.query({
      query: (id) => ({
        url: `product/publicfetchAllBrandBasedCategory/${id}`,
        method: "GET",
      }),
      invalidatesTags: ["department"],
    }),

    publicFilterproduct: builder.query({
      query: (data) => ({
        url: `product/filterproduct`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["department"],
    }),
    // for saved post
    publicfetchSavedPost: builder.query({
      query: (ids) => ({
        url: "product/productbasedonid",
        method: "GET",
        body: ids,
      }),
      invalidatesTags: ["department"],
    }),
  }),
});

export const {
  usePublicfetchAllDepartmentQuery,
  usePublicfetchAllCategoriesQuery,
  usePublicfetchAllSubCategoriesQuery,
  usePublicfetchProductQuery,
  usePublicfetchAllBrandBasedCategoryQuery,
  usePublicFilterproductQuery,
  usePublicfetchSavedPostQuery,
} = PublicApi;
