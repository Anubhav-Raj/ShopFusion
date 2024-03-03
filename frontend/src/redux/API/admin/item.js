import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const baseUrl = "http://localhost:5000/api/product/";
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
        formData.append("subCategory", item.subCategory);
        formData.append("itemName", item.itemName);
        formData.append("itemImage", item.itemImage);
        formData.append("itemDescription", item.itemDescription);
        return {
          url: "createItem",
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        };
      },
      invalidatesTags: ["item"],
      onQueryStarted: (_, { dispatch, queryFulfilled }) => {
        dispatch(
          queryFulfilled({
            endpointName: "createItem",
            response: {},
          })
        );
      },
    }),

    fetchAllItem: builder.query({
      query: () => {
        return {
          url: "fetchAllItem",
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
      invalidatesTags: ["item"],
      onQueryStarted: (_, { dispatch, queryFulfilled }) => {
        dispatch(
          queryFulfilled({
            endpointName: "fetchAllItem",
            response: {},
          })
        );
      },
    }),
  }),
});

export const { useCreateItemMutation, useFetchAllItemQuery } = ItemApi;
