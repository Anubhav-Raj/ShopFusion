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
        // console.log(subCategories);
        const formData = new FormData();
        formData.append("sellerType", subCategories.sellerType);
        formData.append("department", subCategories.department);
        formData.append("choose_category_id", subCategories.category);
        formData.append("subCategoryImage", subCategories.subCategoryImage);
        formData.append("subcategoryName", subCategories.subcategoryName);
        formData.append(
          "subcategoryDescription",
          subCategories.subcategoryDescription
        );
        for (let [key, value] of formData.entries()) {
          console.log(key, value);
        }

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
      // onQueryStarted: (_, { dispatch, queryFulfilled }) => {
      //   dispatch(
      //     queryFulfilled({
      //       endpointName: "createSubCategories",
      //       response: {},
      //     })
      //   );
      // },
    }),

    fetchAllSubCategories: builder.query({
      query: (id) => {
        console.log(id);
        const formData = {
          choose_category_id: id,
        };
        return {
          url: "fetchallsubcategories",
          method: "POST",
          body: formData,
        };
      },
      invalidatesTags: ["subCategories"],
    }),
  }),
});
export const { useCreateSubCategoriesMutation, useFetchAllSubCategoriesQuery } =
  SubCategoriesApi;
