import { createApi } from "@reduxjs/toolkit/query/react";
import { customFetchBase } from "../coustomFetchBase";

export const AddressAPI = createApi({
  reducerPath: "AddressAPI",
  baseQuery: customFetchBase,
  tagTypes: ["Address", "otp"],
  endpoints: (builder) => ({
    allAddress: builder.query({
      query: () => {
        return {
          url: "user/useralladdress",
          method: "GET",
          credentials: "include",
        };
      },
      providesTags: ["Address", "otp"],
    }),
    AddAddress: builder.mutation({
      query: (address) => {
        console.log(address);
        return {
          url: "user/addaddress",
          method: "POST",
          body: address,
          credentials: "include",
        };
      },
      invalidatesTags: ["Address"],
    }),
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
    fetchPayment: builder.mutation({
      query: (formData) => ({
        url: "payment/otppayment",
        method: "POST",
        body: formData,
        credentials: "include",
      }),
    }),
    verifyPayment: builder.mutation({
      query: (responseData) => ({
        url: "payment/addresspaymentverification",
        method: "POST",
        body: responseData,
        credentials: "include",
      }),
      invalidatesTags: ["otp"],
    }),
  }),
});

export const {
  useAddAddressMutation,
  useAllAddressQuery,
  useEmailotpMutation,
  usePhoneOTPMutation,
  useSendemailotpMutation,
  useFetchPaymentMutation,
  useVerifyPaymentMutation,
} = AddressAPI;
