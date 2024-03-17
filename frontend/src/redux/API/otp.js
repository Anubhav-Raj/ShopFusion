import { createApi } from "@reduxjs/toolkit/query/react";
import { customFetchBase } from "./coustomFetchBase";

export const OtpAPI = createApi({
  reducerPath: "otpApi",
  baseQuery: customFetchBase,
  tagTypes: ["otp"],
  endpoints: (builder) => ({
    emailotp: builder.mutation({
      query: (emailotp) => {
        return {
          url: "user/verifyemailotp",
          method: "POST",
          credentials: "include",
          body: emailotp,
        };
      },
      invalidatesTags: ["otp"],
    }),

    sendemailotp: builder.mutation({
      query: (email) => {
        return {
          url: "user/sendemailotp",
          method: "POST",
          credentials: "include",
          body: email,
        };
      },
      invalidatesTags: ["otp"],
    }),

    phoneOTP: builder.mutation({
      query: (phoneOTP) => ({
        url: "user/verifyemailotp",
        method: "POST",
        body: phoneOTP,
        credentials: "include",
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
