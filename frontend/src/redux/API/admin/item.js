import { createApi } from "@reduxjs/toolkit/query/react";
import { customFetchBase } from "../coustomFetchBase";

export const ItemApi = createApi({
  reducerPath: "item",
  baseQuery: customFetchBase,
  tagTypes: ["item"],
  endpoints: (builder) => ({
    createItem: builder.mutation({
      query: (item) => {
        const formData = new FormData();
        formData.append("sallerType", item.sallerType);
        formData.append("department", item.department);
        formData.append("category", item.category);
        formData.append("choose_subcategory_id", item.subCategory);
        formData.append("itemName", item.itemName);
        formData.append("itemImage", item.itemImage);
        formData.append("itemDescription", item.itemDescription);
        return {
          url: "admin/createitem",
          method: "POST",
          credentials: "include",
          body: formData,
        };
      },
      invalidatesTags: ["item"],
    }),

    fetchAllItem: builder.query({
      query: (id) => {
        const formData = {
          choose_subcategory_id: id,
        };
        return {
          url: "admin/fetchallitems",
          method: "POST",
          body: formData,
          credentials: "include",
        };
      },
      invalidatesTags: ["item"],
    }),
  }),
});

export const { useCreateItemMutation, useFetchAllItemQuery } = ItemApi;
