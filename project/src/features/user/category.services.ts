import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ICategory } from "../../interfaces/category.interface";

interface IGetCategoriesResponse {
  success: boolean;
  categories: ICategory[];
}
interface IGetOneCateResponse {
  success: boolean;
  cateData: ICategory;
}

export const categoryApi = createApi({
  reducerPath: "categoryApi",
  tagTypes: ["Categories"],
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080/api",
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
    getCategory: build.query<IGetOneCateResponse, string>({
      query: (id) => `categories/${id}`,
    }),
    // Thêm API endpoint để tạo danh mục mới
    createCategory: build.mutation<ICategory, Omit<ICategory, "_id">>({
      query: (body) => ({
        url: "categories",
        method: "POST",
        body
      }),
      // Sau khi tạo thành công, cần cập nhật lại danh sách danh mục để nhận thông tin mới nhất
      invalidatesTags: (result, error, body) =>
        error ? [] : [{ type: "Categories", id: "LIST" }],
    }),

    // Thêm API endpoint để cập nhật thông tin của danh mục
    updateCategory: build.mutation<ICategory, { id: string, body: ICategory }>({
      query: (data) => ({
        url: `categories/${data.id}`,
        method: "PUT",
        body: data,
      }),
      // Sau khi cập nhật thành công, cần cập nhật lại danh sách danh mục để nhận thông tin mới nhất
      invalidatesTags: [{ type: "Categories", id: "LIST" }],
    }),

    // Thêm API endpoint để xóa một danh mục
    deleteCategory: build.mutation<ICategory[], ICategory>({
      query: (categoryId) => ({
        url: `categories/${categoryId}`,
        method: "DELETE",
      }),
      // Sau khi xóa thành công, cần cập nhật lại danh sách danh mục để nhận thông tin mới nhất
      invalidatesTags: [{ type: "Categories", id: "LIST" }],
    }),
  }),
});

export const { useGetCategoriesQuery, useGetCategoryQuery, useCreateCategoryMutation, useUpdateCategoryMutation, useDeleteCategoryMutation } = categoryApi;
