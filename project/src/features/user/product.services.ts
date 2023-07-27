import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IProduct } from "../../interfaces/product.interface";

interface IGetAllApiResponse {
  success: boolean;
  totalPages: number;
  totalProduct: number;
  products: IProduct[];
}
interface IGetOneApiResponse {
  success: boolean;
  productData: IProduct;
}

export const productApi = createApi({
  reducerPath: "productApi",
  tagTypes: ["Products"],
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8888/api" }),
  endpoints: (build) => ({
    getProducts: build.query<IGetAllApiResponse, void>({
      query: () => "products",
      providesTags(result) {
        if (result) {
          const final = [
            ...result.products.map(({ _id }) => ({
              type: "Products" as const,
              _id,
            })),
            { type: "Products" as const, id: "LIST" },
          ];
          return final;
        }
        return [{ type: "Products", id: "LIST" }];
      },
    }),
    getProduct: build.query<IGetOneApiResponse, string>({
      query: (id) => `products/id/${id}`,
    }),
  }),
});

export const { useGetProductsQuery, useGetProductQuery } = productApi;
