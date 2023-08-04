import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ICategory } from "../../interfaces/category.interface";

interface IGetCategoriesResponse {
  success: boolean;
  categories: ICategory[];
}

export const categoryApi = createApi({
  reducerPath: "categoryApi",
  tagTypes: ["Categories"],
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8888/api",
  }),
  endpoints: (build) => ({
    getCategories: build.query<IGetCategoriesResponse, void>({
      query: () => "categories",
      providesTags(result) {
        if (result) {
          const final = [
            ...result.categories.map(({ _id }) => ({
              type: "Categories" as const,
              _id,
            })),
            { type: "Categories" as const, id: "LIST" },
          ];
          return final;
        }
        return [{ type: "Categories", id: "LIST" }];
      },
    }),
  }),
});

export const { useGetCategoriesQuery } = categoryApi;
