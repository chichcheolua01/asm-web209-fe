import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  AdminManageHeader,
  AdminPagination,
  AdminProductItem,
} from "../../../../components";
import { setSeletedSort, startEditProduct } from "../../../user/product.slice";
import {
  sort,
  name,
  price_filter_gte,
  price_filter_lte,
  page,
  handleNameUrl,
  handleSortUrl,
  handlePageUrl,
} from "../../../../utils/fn";
import {
  useDeleteProductMutation,
  useGetProducts2Query,
} from "../../../user/product.services";
import { IProduct } from "../../../../interfaces/product.interface";

type Props = {};

const ProductManagePage = (props: Props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { data } = useGetProducts2Query({
    name: name(searchParams),
    sort: sort(searchParams),
    page: page(searchParams),
    limit: import.meta.env.VITE_APP_LIMIT_ADMIN_PRODUCT_PER_PAGE || 10,
  });
  const [deleteProduct] = useDeleteProductMutation();

  const handleSubmitSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const inputValue = (e.target as HTMLFormElement).searchInput.value;
    const searchUrl = handleNameUrl(
      inputValue,
      sort(searchParams),
      price_filter_gte(searchParams),
      price_filter_lte(searchParams),
      page(searchParams)
    );

    navigate(searchUrl);
  };

  const handleChangeSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    dispatch(setSeletedSort(value));
    const sortUrl = handleSortUrl(
      value,
      name(searchParams),
      price_filter_gte(searchParams),
      price_filter_lte(searchParams),
      page(searchParams)
    );
    navigate(sortUrl);
  };

  const handleDeleteProduct = (id: string) => {
    if (confirm("Are you sure you want to delete this product?")) {
      deleteProduct(id);
    }
  };

  const startEdit = (id: string) => {
    dispatch(startEditProduct(id));
  };

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <AdminManageHeader
        handleSubmitSearch={handleSubmitSearch}
        handleChangeSort={handleChangeSort}
      />

      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              #
            </th>
            <th scope="col" className="px-6 py-3">
              Tên sản phẩm
            </th>
            <th scope="col" className="px-6 py-3">
              Ảnh
            </th>
            <th scope="col" className="px-6 py-3">
              Giá
            </th>
            <th scope="col" className="px-6 py-3">
              Mô tả
            </th>
            <th scope="col" className="px-6 py-3">
              Danh mục
            </th>
            <th scope="col" className="px-6 py-3">
              Thao tác
            </th>
          </tr>
        </thead>
        <tbody>
          {data?.products.map((product: IProduct, index: number) => (
            <AdminProductItem
              key={product._id}
              product={product}
              index={index + 1}
              handleDeleteProduct={handleDeleteProduct}
              startEdit={startEdit}
            />
          ))}
        </tbody>
      </table>

      <AdminPagination
        name={name(searchParams)}
        sort={sort(searchParams)}
        price_filter_gte={price_filter_gte(searchParams)}
        price_filter_lte={price_filter_lte(searchParams)}
        totalCount={data?.totalProduct as number}
      />
    </div>
  );
};

export default ProductManagePage;
