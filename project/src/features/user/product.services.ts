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
        category?: string;
        limit?: string | number;
        page?: string;
      }
    >({
      query: ({
        name,
        sort,
        filterPriceGte,
        filterPriceLte,
        category,
        limit,
        page,
      }) => {
        let queryString = "products";
        const params = [];

        if (name) params.push(`name=${name}`);
        if (sort) params.push(`sort=${sort}`);
        if (filterPriceGte) params.push(`price[gte]=${filterPriceGte}`);
        if (filterPriceLte) params.push(`price[lte]=${filterPriceLte}`);
        if (category) params.push(`category=${category}`);
        if (limit) params.push(`limit=${limit}`);
        if (page) params.push(`page=${page}`);

        if (params.length > 0) queryString += `?${params.join("&")}`;
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

        return [{ type: "Products" as const, id: "LIST" }];
      },
    }),
    getProduct: build.query<IGetOneApiResponse, string>({
      query: (id) => `products/id/${id}`,
    }),
    addProduct: build.mutation<IProduct, Omit<IProduct, "_id"> | FormData>({
      query(body) {
        return {
          url: "products",
          method: "POST",
          body,
        };
      },
      invalidatesTags: (result, error, body) =>
        error ? [] : [{ type: "Products", id: "LIST" }],
    }),
    updateProduct: build.mutation<
      IProduct,
      { id: string; body: IProduct | FormData }
    >({
      query(data) {
        return {
          url: `products/${data.id}`,
          method: "PUT",
          body: data.body,
        };
      },
      invalidatesTags: (result, error, data) =>
        error ? [] : [{ type: "Products", _id: data.id }],
    }),
    deleteProduct: build.mutation<{}, string>({
      query(id) {
        return {
          url: `products/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: (result, error, _id) => [{ type: "Products", _id }],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductQuery,
  useGetProducts2Query,

  useAddProductMutation,
  useDeleteProductMutation,
  useUpdateProductMutation,
} = productApi;
