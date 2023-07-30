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
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080/api" }),
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
    getProducts2: build.query<
      IGetAllApiResponse,
      {
        name?: string;
        sort?: string;
        filterPriceGte?: string;
        filterPriceLte?: string;
      }
    >({
      query: ({ name, sort, filterPriceGte, filterPriceLte }) => {
        let queryString = "products";
        const params = [];

        if (name) {
          params.push(`name=${encodeURIComponent(name)}`);
        }

        if (sort) {
          params.push(`sort=${encodeURIComponent(sort)}`);
        }

        if (filterPriceGte) {
          params.push(`price[gte]=${encodeURIComponent(filterPriceGte)}`);
        }

        if (filterPriceLte) {
          params.push(`price[lte]=${encodeURIComponent(filterPriceLte)}`);
        }

        if (params.length > 0) {
          queryString += `?${params.join("&")}`;
        }

        // if (limit)
        //   queryString += `&limit=${encodeURIComponent(limit.toString())}`;
        // if (page) queryString += `&page=${encodeURIComponent(page.toString())}`;

        return queryString;
      },
      providesTags(result, error, params) {
        if (error || !result) {
          return [{ type: "Products", id: "LIST" }];
        }

        // Kiểm tra params gửi lên có chứa key ở dưới không
        const hasFilter = Object.keys(params).some((key) =>
          ["name", "sort", "limit", "page"].includes(key)
        );

        if (hasFilter) {
          return [
            ...result.products.map(({ _id }) => ({
              type: "Products" as const,
              _id,
            })),
            { type: "Products" as const, id: "LIST" },
          ];
        }

        return [{ type: "Products", id: "LIST" }];
      },
    }),
    getProduct: build.query<IGetOneApiResponse, string>({
      query: (id) => `products/id/${id}`,
    }),
  }),
});

export const { useGetProductsQuery, useGetProductQuery, useGetProducts2Query } =
  productApi;
