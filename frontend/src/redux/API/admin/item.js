import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const baseUrl = "http://localhost:5000/api/admin/";
const token = localStorage.getItem("ZoneHub");

export const ItemApi = createApi({
  reducerPath: "item",
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
  }),
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
          url: "createitem",
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
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
          url: "fetchallitems",
          method: "POST",
          body: formData,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
      invalidatesTags: ["item"],
    }),
  }),
});

export const { useCreateItemMutation, useFetchAllItemQuery } = ItemApi;
