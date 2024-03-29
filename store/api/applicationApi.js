"use client";

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "@/lib/configs";
import { getToken } from "@/utils/authHelpers";

const token = getToken();

export const applicationApi = createApi({
  reducerPath: "applicationApi",
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),
  tagTypes: ["Applications"],
  endpoints: (builder) => ({
    updateApplication: builder.mutation({
      query({ token, payload }) {
        return {
          url: `/users/updatepassword/${token}`,
          method: "PUT",
          // credentials: "include",
          body: payload,
        };
      },
      invalidatesTags: [{ type: "Applications", id: "LIST" }],
    }),
    addNewApplication: builder.mutation({
      query(payload) {
        return {
          url: "/application",
          method: "POST",
          headers: { Authorization: `Bearer ${token}` },
          //   credentials: 'include',
          body: payload,
        };
      },
      invalidatesTags: [{ type: "Applications", id: "LIST" }],
    }),
    getSingleApplication: builder.query({
      query(token) {
        return {
          url: `users/${token}`,
          //   credentials: 'include'
        };
      },
      providesTags: (result, error, id) => [{ type: "Applications", id }],
    }),
    getAllApplications: builder.query({
      query() {
        return {
          url: "/users",
          //   credentials: 'include'
        };
      },
      invalidatesTags: [{ type: "Applications", id: "LIST" }],
    }),
    getForms: builder.query({
      query() {
        return {
          url: "/forms",
          //   credentials: 'include'
        };
      },
      invalidatesTags: [{ type: "Applications", id: "LIST" }],
    }),
    getSingleFormFields: builder.query({
      query(formId) {
        return {
          url: `/forms/${formId}/fields`,
          //   credentials: 'include'
        };
      },
      invalidatesTags: [{ type: "Applications", id: "LIST" }],
    }),
    deleteApplication: builder.mutation({
      query(userId) {
        return {
          url: `/users/${userId}`,
          method: "DELETE",
          //   credentials: 'include'
        };
      },
      invalidatesTags: [{ type: "Applications", id: "LIST" }],
    }),
  }),
});

export const {
  useAddNewApplicationMutation,
  useUpdateApplicationMutation,
  useGetSingleApplicationQuery,
  useGetAllApplicationsQuery,
  useDeleteApplicationMutation,
  useGetFormsQuery,
  useGetSingleFormFieldsQuery
} = applicationApi;
