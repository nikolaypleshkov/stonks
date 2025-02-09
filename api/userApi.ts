import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8082/api/v1/users" }),
  endpoints: (builder) => ({
    getUserById: builder.query({
      query: (id) => `/${id}`,
    }),
    createUser: builder.mutation({
      query: (body) => ({
        url: "",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useGetUserByIdQuery, useCreateUserMutation } = userApi;
export const { reducer } = userApi;
