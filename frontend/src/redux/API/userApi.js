import { createApi } from "@reduxjs/toolkit/query/react";
import { setUser } from "./userSlices";
import { customFetchBase } from "./coustomFetchBase";
import toast from "react-hot-toast";

export const userApi1 = createApi({
  reducerPath: "userApi1",
  baseQuery: customFetchBase,
  tagTypes: ["User"],
  endpoints: (builder) => ({
    getMe: builder.query({
      query: () => {
        return {
          url: "user/me",
          credentials: "include",
        };
      },
      transformResponse: (result) => result.data.user,
      async onQueryStarted(args, { dispatch, queryFulfilled, getState }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setUser(data)); // Dispatch setUser action to update Redux store
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      },
    }),
  }),
});
