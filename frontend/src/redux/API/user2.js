// const { createApi } = require("@reduxjs/toolkit/query/react");
// const { userApi } = require("./userApi");
// const customFetchBase = require("./customFetchBase");
import { createApi } from "@reduxjs/toolkit/query/react";
import { userApi1 } from "./userApi";
import { customFetchBase } from "./coustomFetchBase";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: customFetchBase,
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (data) => {
        console.log(data);
        return {
          url: "user/register",
          method: "POST",
          body: data,
        };
      },
    }),
    loginUser: builder.mutation({
      query: (data) => {
        console.log("redux data", data); // Log the data before returning the query object
        return {
          url: "user/login",
          method: "POST",
          body: data,
          credentials: "include",
        };
      },
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          // console.log("Login query started successfully.");
          // alert("Login query started successfully.");
          await dispatch(userApi1.endpoints.getMe.initiate(null));
        } catch (error) {
          console.error("Error occurred during login query:", error);
        }
      },
    }),

    logoutUser: builder.mutation({
      query: () => {
        console.log("logout user");
        return {
          url: "user/logout",
          credentials: "include",
        };
      },
    }),
    verifyEmail: builder.mutation({
      query: (verificationCode) => ({
        url: `auth/verifyemail/${verificationCode}`,
        credentials: "include",
      }),
    }),
    forgotPassword: builder.mutation({
      query: (body) => ({
        url: `auth/forgotpassword`,
        method: "POST",
        credentials: "include",
        body,
      }),
    }),
    resetPassword: builder.mutation({
      query: ({ resetToken, password, passwordConfirm }) => ({
        url: `auth/resetpassword/${resetToken}`,
        method: "PATCH",
        body: { password, passwordConfirm },
        credentials: "include",
      }),
    }),
  }),
});

export const {
  useLoginUserMutation,
  useRegisterUserMutation,
  useLogoutUserMutation,
  useVerifyEmailMutation,
  useForgotPasswordMutation,
  useResetPasswordMutation,
} = authApi;

// module.exports = {
//   useLoginUserMutation,
//   useRegisterUserMutation,
//   useLogoutUserMutation,
//   useVerifyEmailMutation,
//   useForgotPasswordMutation,
//   useResetPasswordMutation,
// };
