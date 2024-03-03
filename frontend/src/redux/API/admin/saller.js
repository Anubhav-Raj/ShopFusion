import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "http://localhost:5000/api/product/";
const token = localStorage.getItem("ZoneHub");

export const sallerTypeApi = createApi({
  reducerPath: "sallerType",
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
  }),
  tagTypes: ["sallerType"],
  endpoints: (builder) => ({
    createSallerType: builder.mutation({
      query: (sallerType) => {
        const formData = new FormData();
        formData.append("sallerType", sallerType.SallerName);
        formData.append("sallerTypeDescription", sallerType.sallerDescription);
        for (let [key, value] of formData.entries()) {
          console.log(key, value);
        }
        return {
          url: "createSallerType",
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        };
      },
      invalidatesTags: ["sallerType"],
      // Add a tag for this endpoint
      onQueryStarted: (_, { dispatch, queryFulfilled }) => {
        dispatch(
          queryFulfilled({
            endpointName: "createSallerType",
            response: {},
          })
        );
      },
    }),

    fetchAllSallerType: builder.query({
      query: () => {
        return {
          url: "fetchAllSallerType",
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
      invalidatesTags: ["sallerType"],
      // Add a tag for this endpoint
      onQueryStarted: (_, { dispatch, queryFulfilled }) => {
        dispatch(
          queryFulfilled({
            endpointName: "fetchAllSallerType",
            response: {},
          })
        );
      },
    }),
  }),
});

export const { useCreateSallerTypeMutation, useFetchAllSallerTypeQuery } =
  sallerTypeApi;
