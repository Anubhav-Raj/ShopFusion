import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import axios from "axios";

const baseUrl = "http://localhost:5000/api/user/";
const token = localStorage.getItem("ZoneHub");
export const AddressAPI = createApi({
  reducerPath: "AddressAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
  }),
  tagTypes: ["Address"],
  endpoints: (builder) => ({
    providesTags: ["Address"],

    AddAddress: builder.mutation({
      query: (address) => ({
        url: "addaddress",
        method: "POST",
        body: address,
        headers: {
          Authorization: "Bearer " + token,
        },
      }),
      invalidatesTags: ["Address"],
    }),
  }),
});

export const { useAddAddressMutation } = AddressAPI;
