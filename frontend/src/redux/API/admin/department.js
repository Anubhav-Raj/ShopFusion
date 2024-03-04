import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "http://localhost:5000/api/admin/";
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
        formData.append("choose_type_id", department.sallerType);
        formData.append("departmentName", department.departmentName);
        formData.append(
          "departmentDescription",
          department.departmentDescription
        );
        formData.append("departmentImage", department.departmentImage); // Assuming departmentImage is the file object
        return {
          url: "createdepartment",
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData,
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
        console.log(selectedItems);
        const formData = {
          choose_type_id: selectedItems,
        };
        return {
          url: "fetchalldepartments",
          method: "POST",
          body: formData,
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
