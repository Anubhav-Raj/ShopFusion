import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { customFetchBase } from "../coustomFetchBase";
const baseUrl = "http://localhost:5000/api/";
const token = localStorage.getItem("ZoneHub");

export const sallerTypeApi = createApi({
  reducerPath: "sallerType",
  baseQuery: customFetchBase,
  tagTypes: ["sallerType"],
  endpoints: (builder) => ({
    createSallerType: builder.mutation({
      query: (sallerType) => {
        return {
          url: "admin/createsallertype",
          method: "POST",
          credentials: "include",
          body: sallerType,
        };
      },
      invalidatesTags: ["sallerType"], // Specify the tag to invalidate
    }),

    fetchAllSallerType: builder.query({
      query: () => {
        return {
          url: "admin/fetchallsallertypes",
          credentials: "include",
          method: "GET",
        };
      },
      invalidatesTags: ["sallerType"],
    }),
  }),
});

export const { useCreateSallerTypeMutation, useFetchAllSallerTypeQuery } =
  sallerTypeApi;
