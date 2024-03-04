import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "http://localhost:5000/api/admin/";
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
        return {
          url: "createsallertype",
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: sallerType,
        };
      },
      invalidatesTags: ["sallerType"],
      // Add a tag for this endpoint
      // onQueryStarted: (_, { dispatch, queryFulfilled }) => {
      //   dispatch(
      //     queryFulfilled({
      //       endpointName: "createSallerType",
      //       response: {},
      //     })
      //   );
      // },
    }),

    fetchAllSallerType: builder.query({
      query: () => {
        return {
          url: "fetchallsallertypes",
          method: "GET",
        };
      },
      invalidatesTags: ["sallerType"],
    }),
  }),
});

export const { useCreateSallerTypeMutation, useFetchAllSallerTypeQuery } =
  sallerTypeApi;
