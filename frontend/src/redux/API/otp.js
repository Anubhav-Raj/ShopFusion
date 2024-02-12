import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Get the API base URL from the environment variable
const baseUrl = "http://localhost:5000/api/user/";
const token = localStorage.getItem("ZoneHub");

export const OtpAPI = createApi({
  reducerPath: "otpApi",
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
  }),
  tagTypes: ["otp"],
  endpoints: (builder) => ({
    emailotp: builder.mutation({
      query: (emailotp) => {
        // console.log("Email OTP:", emailotp); // Log the email OTP
        return {
          url: "verifyemailotp",
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: emailotp,
        };
      },
      invalidatesTags: ["otp"],
    }),

    sendemailotp: builder.mutation({
      query: (email) => {
        return {
          url: "sendemailotp",
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: email,
        };
      },
      invalidatesTags: ["otp"],
    }),

    phoneOTP: builder.mutation({
      query: (phoneOTP) => ({
        url: "verifyemailotp",
        method: "POST",
        body: phoneOTP,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: ["otp"],
    }),
  }),
});

// Fix: Correct mutation exports to use otpAPI
export const {
  useEmailotpMutation,
  usePhoneOTPMutation,
  useSendemailotpMutation,
} = OtpAPI;
