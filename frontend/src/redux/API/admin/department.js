import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "http://localhost:5000/api/product/";
const token = localStorage.getItem("ZoneHub");

export const DepartmentApi = createApi({
  reducerPath: "department",
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
  }),
  tagTypes: ["department"],
  endpoints: (builder) => ({
    createDepartment: builder.mutation({
      query: (department) => {
        const formData = new FormData();
        formData.append("sallerType", department.sallerType);
        formData.append("categoryImage", department.categoryImage);
        formData.append("departmentName", department.departmentName);
        formData.append(
          "departmentDescription",
          department.departmentDescription
        );
        // for (let [key, value] of formData.entries()) {
        //   console.log(key, value);
        // }
        return {
          url: "createDepartment",
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        };
      },
      invalidatesTags: ["department"],
      onQueryStarted: (_, { dispatch, queryFulfilled }) => {
        dispatch(
          queryFulfilled({
            endpointName: "createDepartment",
            response: {},
          })
        );
      },
    }),

    fetchAllDepartment: builder.query({
      query: () => {
        return {
          url: "fetchAllDepartment",
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
      invalidatesTags: ["department"],
      onQueryStarted: (_, { dispatch, queryFulfilled }) => {
        dispatch(
          queryFulfilled({
            endpointName: "fetchAllDepartment",
            response: {},
          })
        );
      },
    }),
  }),
});

export const { useCreateDepartmentMutation, useFetchAllDepartmentQuery } =
  DepartmentApi;
