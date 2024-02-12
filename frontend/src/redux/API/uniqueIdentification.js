import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const baseUrl = "http://localhost:5000/api/user/";
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
        // console.log("phone :", phone); // Log the email OTP
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
