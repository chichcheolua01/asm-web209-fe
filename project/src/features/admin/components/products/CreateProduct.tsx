import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IProduct } from "../../../../interfaces/product.interface";
import { useAddProductMutation } from "../../../user/product.services";
import { useGetCategoriesQuery } from "../../../user/category.services";
import { toast } from "react-toastify";

type Props = {};

const initialState: Omit<IProduct, "_id"> = {
  name: "",
  thumb: "",
  images: "",
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

const CreateProduct = (props: Props) => {
  const [formValue, setformValue] = useState(initialState);
  const [addProduct, addProductResult] = useAddProductMutation();
  const { data } = useGetCategoriesQuery();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await addProduct(formValue);
      if (addProductResult.data && addProductResult.status === "fulfilled") {
        toast.success("Add product success");
      } else if (addProductResult.status === "rejected") {
        toast.error("Add new failed product");
      }
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
          Add a new product
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
              {addProductResult.error &&
                "data" in addProductResult.error &&
                (addProductResult.error as ErrorResponse).data.message.name && (
                  <span className="text-red-500 inline-block text-sm pt-1 italic font-medium">
                    {
                      (addProductResult.error as ErrorResponse).data.message
                        .name
                    }
                  </span>
                )}
            </div>

            <div className="w-full">
              <label
                htmlFor="thumb"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Thumb
              </label>
              <input
                type="text"
                id="thumb"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Product thumb"
                value={formValue.thumb}
                onChange={(e) =>
                  setformValue((prev) => ({ ...prev, thumb: e.target.value }))
                }
              />
              {addProductResult.error &&
                "data" in addProductResult.error &&
                (addProductResult.error as ErrorResponse).data.message
                  .thumb && (
                  <span className="text-red-500 inline-block text-sm pt-1 italic font-medium">
                    {
                      (addProductResult.error as ErrorResponse).data.message
                        .thumb
                    }
                  </span>
                )}
            </div>

            <div className="w-full">
              <label
                htmlFor="price"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Images
              </label>
              <input
                type="text"
                id="images"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Product Images"
                value={formValue.images}
                onChange={(e) =>
                  setformValue((prev) => ({
                    ...prev,
                    images: [e.target.value],
                  }))
                }
              />

              {addProductResult.error &&
                "data" in addProductResult.error &&
                (addProductResult.error as ErrorResponse).data.message
                  .images && (
                  <span className="text-red-500 inline-block text-sm pt-1 italic font-medium">
                    {
                      (addProductResult.error as ErrorResponse).data.message
                        .images
                    }
                  </span>
                )}
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

              {addProductResult.error &&
                "data" in addProductResult.error &&
                (addProductResult.error as ErrorResponse).data.message
                  .price && (
                  <span className="text-red-500 inline-block text-sm pt-1 italic font-medium">
                    {
                      (addProductResult.error as ErrorResponse).data.message
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
                <option>Select Category</option>
                {data?.categories.map((category) => (
                  <option key={category._id} value={category._id}>
                    {category.name}
                  </option>
                ))}
              </select>

              {addProductResult.error &&
                "data" in addProductResult.error &&
                (addProductResult.error as ErrorResponse).data.message
                  .categoryId && (
                  <span className="text-red-500 inline-block text-sm pt-1 italic font-medium">
                    {
                      (addProductResult.error as ErrorResponse).data.message
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

              {addProductResult.error &&
                "data" in addProductResult.error &&
                (addProductResult.error as ErrorResponse).data.message
                  .description && (
                  <span className="text-red-500 inline-block text-sm pt-1 italic font-medium">
                    {
                      (addProductResult.error as ErrorResponse).data.message
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
            Add Product
          </button>
        </form>
      </div>
    </section>
  );
};

export default CreateProduct;
