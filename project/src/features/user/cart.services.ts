import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ICartProduct } from "./cart.slice";

export const cartApi = createApi({
  reducerPath: "cartApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080/api/",
    prepareHeaders(headers) {
      const token = localStorage.getItem("token");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (build) => ({
    signinCart: build.mutation<any, ICartProduct[]>({
      query: (body) => {
        return {
          url: "users/updateCarts",
          method: "PUT",
          body,
        };
      },
    }),
  }),
});

export const { useSigninCartMutation } = cartApi;
