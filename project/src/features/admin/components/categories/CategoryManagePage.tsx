import React from "react";
import { Link } from "react-router-dom";
import { useGetCategoriesQuery } from "../../../user/category.services";
// import { ICategory } from "../../../../interfaces/category.interface";

type Props = {};

const CategoryManagePage = (props: Props) => {
  const { isError, isLoading, data } = useGetCategoriesQuery()

  if (isLoading) {
    return <>Loading...</>
  }
  if (isError) {
    return <p>ERROR</p>
  }
  return (
    <>
      <h1 className="font-Poppins text-2xl ">Category manage page</h1>
      <div className="relative overflow-x-auto shadow-2xl sm:rounded-lg mt-10">
        <div className="p-3">
          <Link to={'create'}>
            <button
              className="py-2 px-4 bg-gray-600 text-white font-semibold rounded-lg hover:bg-gray-700 shadow-mdfocus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
              Add category
            </button>
          </Link>
        </div>
        <table className="w-full text-base text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                #
              </th>
              <th scope="col" className="px-6 py-3">
                Category name
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {
              data && data.categories.map((cate, index) => (
                <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 ">
                  <th scope="col" className="px-6 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {index + 1}
                  </th>
                  <td className="px-6 py-3">
                    {cate.name}
                  </td>
                  <td className="px-6 py-3">
                    <Link to={`update/${cate._id}`}><a className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a></Link>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div></>
  )
}

export default CategoryManagePage;
