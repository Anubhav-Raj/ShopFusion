import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { customFetchBase } from "../coustomFetchBase";

export const DepartmentApi = createApi({
  reducerPath: "department",
  baseQuery: customFetchBase,
  tagTypes: ["department"],
  endpoints: (builder) => ({
    createDepartment: builder.mutation({
      query: (department) => {
        const formData = new FormData();
        formData.append("choose_type_id", department.sallerType);
        formData.append("departmentName", department.departmentName);
        formData.append(
          "departmentDescription",
          department.departmentDescription
        );
        formData.append("departmentImage", department.departmentImage); // Assuming departmentImage is the file object
        return {
          url: "admin/createdepartment",
          method: "POST",
          body: formData,
          credentials: "include",
        };
      },
      invalidatesTags: ["department"],
      // onQueryStarted: (_, { dispatch, queryFulfilled }) => {
      //   dispatch(
      //     queryFulfilled({
      //       endpointName: "createDepartment",
      //       response: {},
      //     })
      //   );
      // },
    }),

    fetchAllDepartment: builder.query({
      query: (selectedItems) => {
        // console.log(selectedItems);
        const formData = {
          choose_type_id: selectedItems,
        };
        return {
          url: "admin/fetchalldepartments",
          method: "POST",
          body: formData,
          credentials: "include",
        };
      },
      invalidatesTags: ["department"],
      // onQueryStarted: (_, { dispatch, queryFulfilled }) => {
      //   dispatch(
      //     queryFulfilled({
      //       endpointName: "fetchAllDepartment",
      //       response: {},
      //     })
      //   );
      // },
    }),
  }),
});

export const { useCreateDepartmentMutation, useFetchAllDepartmentQuery } =
  DepartmentApi;
