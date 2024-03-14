import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "http://localhost:5000/api/product/";
const token = localStorage.getItem("ZoneHub");

export const rating_and_review = createApi({
  reducerPath: "rating_and_review",
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: ["rating", "review"],
  endpoints: (builder) => ({
    createRating: builder.mutation({
      query: (product) => {
        const formData = new FormData();
        formData.append("product_id", product.id);
        formData.append("rating", product.rating);
        return {
          url: "createRating",
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        };
      },
      invalidatesTags: ["rating"],
    }),
    fetchRating: builder.query({
      query: (id) => ({
        url: `fetchRating`,
        method: "GET",
        params: { product_id: id },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      providesTags: ["rating"],
    }),
    createReview: builder.mutation({
      query: (review) => {
        const formData = new FormData();
        formData.append("product_id", review.id);
        formData.append("review", review.review);
        return {
          url: "createReview",
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        };
      },
      invalidatesTags: ["review"],
    }),
    fetchReview: builder.query({
      query: (id) => ({
        url: `fetchreview`,
        method: "GET",
        params: { product_id: id },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      providesTags: ["review"],
    }),
  }),
});

export const {
  useCreateRatingMutation,
  useFetchRatingQuery,
  useCreateReviewMutation,
  useFetchReviewQuery,
} = rating_and_review;
