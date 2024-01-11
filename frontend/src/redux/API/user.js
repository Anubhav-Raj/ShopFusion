import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import axios from "axios";
// require("dotenv").config();

// Get the API base URL from the environment variable
const baseUrl = "http://localhost:5000/";
export const userAPI = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
  }),
  tagTypes: ["users"],
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (user) => ({
        url: "new",
        method: "POST",
        body: user,
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
    const response = await axios.get(`http://localhost:5000/users/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Axios error:", error);
  }
};

export const { useLoginMutation } = userAPI;
