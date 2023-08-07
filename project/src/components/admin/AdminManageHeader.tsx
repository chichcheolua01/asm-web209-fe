import React from "react";
import { Link } from "react-router-dom";

interface AdminManageHeaderProps {
  handleSubmitSearch?: (e: React.FormEvent<HTMLFormElement>) => void;
  handleChangeSort?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const AdminManageHeader = (props: AdminManageHeaderProps) => {
  const { handleSubmitSearch, handleChangeSort } = props;

  return (
    <div className="flex items-center gap-4 bg-white dark:bg-gray-900 px-6 py-3">
      <Link
        to="create"
        className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-3 py-2 text-center"
      >
        Add new product
      </Link>
      <div className="w-full md:w-[35%]">
        <form className="flex items-center" onSubmit={handleSubmitSearch}>
          <label htmlFor="simple-search" className="sr-only">
            Search
          </label>
          <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <input
              type="text"
              id="simple-search"
              placeholder="Search"
              name="searchInput"
              className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            />
          </div>
        </form>
      </div>
      <select
        id="small"
        className="block w-[200px] p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 cursor-pointer"
        onChange={handleChangeSort}
      >
        <option value="">Sort by</option>
        <option value="name">Alphabetically, A-Z</option>
        <option value="-name">Alphabetically, Z-A</option>
        <option value="price">Price, low to high</option>
        <option value="-price">Price from high to low</option>
      </select>
    </div>
  );
};

export default AdminManageHeader;
