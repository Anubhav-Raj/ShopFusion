import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const baseUrl = `${process.env.REACT_APP_API_BASE_URL}api/user/`;
const token = localStorage.getItem("ZoneHub");

export const CheckUniqueAPI = createApi({
  reducerPath: "checkunique",
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
  }),
  teg: ["email", "phone"],
  endpoints: (builder) => ({
    phoneNumberUnique: builder.mutation({
      query: (phone) => {
        return {
          url: "isnumberunique",
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: phone,
        };
      },
      invalidatesTags: ["phone"],
    }),
  }),
});
export const { usePhoneNumberUniqueMutation } = CheckUniqueAPI;
