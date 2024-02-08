import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import axios from "axios";
// require("dotenv").config();

// Get the API base URL from the environment variable
const baseUrl = "http://localhost:5000/api/user/";
const token = localStorage.getItem("ZoneHub");
console.log(token);
export const userAPI = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
  }),
  tagTypes: ["users"],
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (user) => ({
        url: "login",
        method: "POST",
        body: user,
      }),
      invalidatesTags: ["users"],
    }),
    signup: builder.mutation({
      query: (user) => ({
        url: "signup",
        method: "POST",
        body: user,
      }),
      invalidatesTags: ["users"],
    }),
    userByID: builder.mutation({
      query: (user) => ({
        url: "userbyid",
        method: "POST",
        body: user,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: ["users"],
    }),
  }),
});

export const getUser = async (id) => {
  try {
    const token = localStorage.getItem("token");
    if (!token) {
      console.error("Token not available");
      return null;
    }
    const response = await axios.post(`${baseUrl}/userbyid`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Axios error:", error);
  }
};

export const { useLoginMutation, useSignupMutation, useUserByIDMutation } =
  userAPI;
