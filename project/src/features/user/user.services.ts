import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface ISignin {
  name: string;
  password: string;
}

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080/api/",
  }),
  endpoints: (build) => ({
    signin: build.mutation<void, ISignin>({
      query: (body) => {
        return {
          url: "users/login",
          method: "POST",
          body,
        };
      },
    }),
  }),
});

export const { useSigninMutation } = userApi;
