import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface ISignin {
  name: string;
  password: string;
}
export interface ISignup {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}
export interface IUser {
  id: number;
  name: string;
  email: string;
}
interface IGetUsersResponse {
  success: boolean;
  users: IUser[];
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
    signup: build.mutation<void, ISignup>({
      query: (body) => {
        return {
          url: "users/register",
          method: "POST",
          body,
        };
      },
    }),
    getUsers: build.query<IGetUsersResponse, void>({
      query: () => "users",
    }),
    getUser: build.query<IUser, number>({
      query: (userId) => `users/${userId}`,
    }),

  }),
});

export const { useSigninMutation, useSignupMutation, useGetUserQuery, useGetUsersQuery } = userApi;
