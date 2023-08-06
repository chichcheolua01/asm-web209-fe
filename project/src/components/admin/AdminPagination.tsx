import React from "react";
import { useNavigate } from "react-router-dom";
import usePagination from "../../hooks/usePagination";
import { handlePageUrl } from "../../utils/fn";

interface AdminPagination {
  name: string;
  sort: string;
  price_filter_gte: string;
  price_filter_lte: string;
  totalCount: number;
}

const AdminPagination = (props: AdminPagination) => {
  const { name, sort, price_filter_gte, price_filter_lte, totalCount } = props;
  const navigate = useNavigate();
  const pagination = usePagination(totalCount, 1);

  const handlePaginationUrl = (value: string | number) => {
    const paginationUrl = handlePageUrl(
      value,
      name,
      sort,
      price_filter_gte,
      price_filter_lte
    );

    navigate(paginationUrl);
  };

  return (
    <section className="flex items-center bg-gray-50 dark:bg-gray-900">
      <div className="w-full max-w-screen-xl mx-auto">
        <div className="relative overflow-hidden bg-white rounded-b-lg shadow-md dark:bg-gray-800">
          <nav
            className="flex flex-col items-start justify-between p-4 space-y-3 md:flex-row md:items-center md:space-y-0"
            aria-label="Table navigation"
          >
            <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
              Showing
              <span className="font-semibold text-gray-900 dark:text-white">
                1-10
              </span>
              of
              <span className="font-semibold text-gray-900 dark:text-white">
                1000
              </span>
            </span>
            <ul className="inline-flex items-stretch -space-x-px">
              {pagination?.map((item) => (
                <li
                  key={item as number}
                  onClick={() => handlePaginationUrl(item as number)}
                >
                  <div className="flex items-center justify-center px-3 py-2 text-sm leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white cursor-pointer">
                    {item}
                  </div>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default AdminPagination;
