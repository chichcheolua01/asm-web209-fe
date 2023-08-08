import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { RootState } from "../../../../store/store";
import {
  useGetProductQuery,
  useUpdateProductMutation,
} from "../../../user/product.services";
import { IProduct } from "../../../../interfaces/product.interface";
import { useGetCategoriesQuery } from "../../../user/category.services";
import { ICategory } from "../../../../interfaces/category.interface";
import { toast } from "react-toastify";
import { FetchBaseQueryError } from "@reduxjs/toolkit/dist/query";

type Props = {};

const initialState: Omit<IProduct, "_id"> = {
  name: "",
  thumb: "",
  images: [],
  categoryId: "",
  description: "",
  price: 0,
};

interface ErrorResponse {
  data: {
    message: {
      [key in keyof typeof initialState]: string;
    };
  };
}

const UpdateProduct = (props: Props) => {
  const [formValue, setformValue] = useState<Omit<IProduct, "_id"> | IProduct>(
    initialState
  );
  const { id } = useParams();
  const productId = useSelector((state: RootState) => state.product.productId);

  const { data: productData, refetch: refetchProduct } = useGetProductQuery(
    productId ? productId : (id as string)
  );
  const { data: categoriesData } = useGetCategoriesQuery();
  const productsCategories = categoriesData?.categories.filter(
    (category) =>
      category._id !== (productData?.productData.categoryId as ICategory)?._id
  );
  const [updateProduct, updateProductResult] = useUpdateProductMutation();
  const [selectedImages, setSelectedImages] = useState<File[]>([]);

  useEffect(() => {
    if (productData) {
      setformValue({
        name: productData.productData.name,
        thumb: productData.productData.thumb,
        images: productData.productData.images,
        price: productData.productData.price,
        categoryId: productData.productData.categoryId as string,
        description: productData.productData.description,
      });
    }
  }, [productData]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", formValue.name);
    formData.append("categoryId", formValue.categoryId as string);
    formData.append("description", formValue.description);
    formData.append("price", String(formValue.price));
    formData.append("thumb", formValue.thumb);

    if (selectedImages.length > 0) {
      for (let i = 0; i < selectedImages.length; i++) {
        formData.append(`images`, selectedImages[i]);
      }
    } else {
      for (let i = 0; i < formValue.images.length; i++) {
        formData.append(`images[${i}]`, formValue.images[i]);
      }
    }

    try {
      const result = await updateProduct({
        body: formData,
        id: productId ? productId : (id as string),
      });
      if ((result as FetchBaseQueryError).data) {
        toast.success("Update product success");
      } else {
        toast.error("Update failed product");
      }
      refetchProduct();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
        <button
          type="button"
          className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-5"
        >
          <Link to="/admin/products">Manage Product</Link>
        </button>

        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
          Update product
        </h2>
        <form action="#" onSubmit={handleSubmit}>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-4">
            <div className="sm:col-span-2">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Product Name
              </label>
              <input
                type="text"
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Type product name"
                value={formValue.name}
                onChange={(e) =>
                  setformValue((prev) => ({ ...prev, name: e.target.value }))
                }
              />

              {updateProductResult.error &&
                "data" in updateProductResult.error &&
                (updateProductResult.error as ErrorResponse)?.data?.message
                  ?.name && (
                  <span className="text-red-500 inline-block text-sm pt-1 italic font-medium">
                    {
                      (updateProductResult.error as ErrorResponse).data.message
                        .name
                    }
                  </span>
                )}
            </div>

            <div className="w-full">
              <label
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                htmlFor="thumb"
              >
                Thumb / Upload file
              </label>
              <input
                className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                id="thumb"
                type="file"
                placeholder="Product thumb"
                accept="image/*"
                onChange={(e) =>
                  setformValue((prev) => ({
                    ...prev,
                    thumb: e.target?.files![0] || "",
                  }))
                }
              />

              {updateProductResult.error &&
                "data" in updateProductResult.error &&
                (updateProductResult.error as ErrorResponse)?.data?.message
                  ?.thumb && (
                  <span className="text-red-500 inline-block text-sm pt-1 italic font-medium">
                    {
                      (updateProductResult.error as ErrorResponse).data.message
                        .thumb
                    }
                  </span>
                )}

              <div className="w-[150px] h-[150px] mt-4">
                <img
                  src={productData?.productData.thumb as string}
                  alt=""
                  className="w-full h-full"
                />
              </div>
            </div>

            <div className="w-full">
              <label
                htmlFor="price"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Images / Upload multiple files
              </label>
              <input
                className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                id="images"
                type="file"
                multiple
                // accept="image/*"
                onChange={(e) =>
                  setformValue((prev) => {
                    const files = Array.from(e.target?.files || []);
                    setSelectedImages(files);
                    return {
                      ...prev,
                      images: files,
                    };
                  })
                }
              />

              {updateProductResult.error &&
                "data" in updateProductResult.error &&
                (updateProductResult.error as ErrorResponse)?.data?.message
                  ?.images && (
                  <span className="text-red-500 inline-block text-sm pt-1 italic font-medium">
                    {
                      (updateProductResult.error as ErrorResponse).data.message
                        .images
                    }
                  </span>
                )}

              <div className="flex gap-2 mt-4 flex-wrap">
                {(productData?.productData?.images as string[])?.map(
                  (image) => (
                    <img src={image} alt="" className="w-[150px] h-[150px]" />
                  )
                )}
              </div>
            </div>

            <div className="w-full">
              <label
                htmlFor="price"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Price
              </label>
              <input
                type="number"
                id="price"
                min={0}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Product Price"
                value={formValue.price}
                onChange={(e) =>
                  setformValue((prev) => ({ ...prev, price: +e.target.value }))
                }
              />

              {updateProductResult.error &&
                "data" in updateProductResult.error &&
                (updateProductResult.error as ErrorResponse)?.data?.message
                  ?.price && (
                  <span className="text-red-500 inline-block text-sm pt-1 italic font-medium">
                    {
                      (updateProductResult.error as ErrorResponse).data.message
                        .price
                    }
                  </span>
                )}
            </div>

            <div>
              <label
                htmlFor="category"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Category
              </label>
              <select
                id="category"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                value={formValue.categoryId as string}
                onChange={(e) =>
                  setformValue((prev) => ({
                    ...prev,
                    categoryId: e.target.value,
                  }))
                }
              >
                <option
                  value={
                    (productData?.productData?.categoryId as ICategory)?._id
                  }
                >
                  {(productData?.productData?.categoryId as ICategory)?.name}
                </option>
                {productsCategories?.map((category) => (
                  <option key={category._id} value={category._id}>
                    {category.name}
                  </option>
                ))}
              </select>

              {updateProductResult.error &&
                "data" in updateProductResult.error &&
                (updateProductResult.error as ErrorResponse)?.data?.message
                  ?.categoryId && (
                  <span className="text-red-500 inline-block text-sm pt-1 italic font-medium">
                    {
                      (updateProductResult.error as ErrorResponse).data.message
                        .categoryId
                    }
                  </span>
                )}
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="description"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Description
              </label>
              <textarea
                id="description"
                rows={8}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Product description here"
                value={formValue.description}
                onChange={(event) =>
                  setformValue((prev) => ({
                    ...prev,
                    description: event.target.value,
                  }))
                }
              />

              {updateProductResult.error &&
                "data" in updateProductResult.error &&
                (updateProductResult.error as ErrorResponse)?.data?.message
                  ?.description && (
                  <span className="text-red-500 inline-block text-sm pt-1 italic font-medium">
                    {
                      (updateProductResult.error as ErrorResponse).data.message
                        .description
                    }
                  </span>
                )}
            </div>
          </div>

          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 mt-5"
          >
            Update Product
          </button>
        </form>
      </div>
    </section>
  );
};

export default UpdateProduct;
