import { createApi } from "@reduxjs/toolkit/query/react";
import { customFetchBase } from "../coustomFetchBase";

export const SubCategoriesApi = createApi({
  reducerPath: "subCategories",
  baseQuery: customFetchBase,
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

        return {
          url: "admin/createsubcategory",
          method: "POST",
          credentials: "include",
          body: formData,
        };
      },
      invalidatesTags: ["subCategories"],
    }),

    fetchAllSubCategories: builder.query({
      query: (id) => {
        // console.log(id);
        const formData = {
          choose_category_id: id,
        };
        return {
          url: "admin/fetchallsubcategories",
          method: "POST",
          body: formData,
          credentials: "include",
        };
      },
      invalidatesTags: ["subCategories"],
    }),
  }),
});
export const { useCreateSubCategoriesMutation, useFetchAllSubCategoriesQuery } =
  SubCategoriesApi;
