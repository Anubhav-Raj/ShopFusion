import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const baseUrl = "http://localhost:5000/api/admin/";
const token = localStorage.getItem("ZoneHub");

export const SubCategoriesApi = createApi({
  reducerPath: "subCategories",
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
  }),
  tagTypes: ["subCategories"],
  endpoints: (builder) => ({
    createSubCategories: builder.mutation({
      query: (subCategories) => {
        console.log(subCategories);
        const formData = new FormData();
        formData.append("sallerType", subCategories.sallerType);
        formData.append("department", subCategories.department);
        formData.append("category", subCategories.category);
        formData.append("subCategoryImage", subCategories.subCategoryimage);
        formData.append("subcategoryName", subCategories.subcategoryName);
        formData.append(
          "subcategoryDescription",
          subCategories.subcategoryDescription
        );

        return {
          url: "createsubcategory",
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        };
      },
      invalidatesTags: ["subCategories"],
      onQueryStarted: (_, { dispatch, queryFulfilled }) => {
        dispatch(
          queryFulfilled({
            endpointName: "createSubCategories",
            response: {},
          })
        );
      },
    }),

    fetchAllSubCategories: builder.query({
      query: () => {
        return {
          url: "fetchAllSubCategories",
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
      invalidatesTags: ["subCategories"],
      onQueryStarted: (_, { dispatch, queryFulfilled }) => {
        dispatch(
          queryFulfilled({
            endpointName: "fetchAllSubCategories",
            response: {},
          })
        );
      },
    }),
  }),
});
export const { useCreateSubCategoriesMutation, useFetchAllSubCategoriesQuery } =
  SubCategoriesApi;
