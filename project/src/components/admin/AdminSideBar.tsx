import React from "react";
import { Link } from "react-router-dom";
import icons from "../../utils/icons";

const {
  BiCategoryAlt,
  AiOutlineDashboard,
  AiOutlineUsergroupDelete,
  MdProductionQuantityLimits,
  RiBillFill,
  ImStatsDots,
  AiOutlineLogout,
  MdOutlineWeb,
} = icons;

type Props = {};

const AdminSideBar = (props: Props) => {
  return (
    <aside
      id="logo-sidebar"
      className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
      aria-label="Sidebar"
    >
      <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
        <ul className="space-y-2 font-medium">
          <li>
            <Link
              to="/"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <MdOutlineWeb size={20} />
              <span className="ml-3">Website</span>
            </Link>
          </li>

          <li>
            <Link
              to="dashboard"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <AiOutlineDashboard size={20} />
              <span className="ml-3">Dashboard</span>
            </Link>
          </li>

          <li>
            <Link
              to="categories"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <BiCategoryAlt size={20} />
              <span className="flex-1 ml-3 whitespace-nowrap">Categories</span>
            </Link>
          </li>

          <li>
            <Link
              to="users"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <AiOutlineUsergroupDelete size={20} />
              <span className="flex-1 ml-3 whitespace-nowrap">Users</span>
            </Link>
          </li>
          <li>
            <Link
              to="products"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <MdProductionQuantityLimits size={20} />
              <span className="flex-1 ml-3 whitespace-nowrap">Products</span>
            </Link>
          </li>

          <li>
            <Link
              to="orders"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <RiBillFill size={20} />
              <span className="flex-1 ml-3 whitespace-nowrap">Orders</span>
            </Link>
          </li>

          <li>
            <a
              href="#"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <ImStatsDots size={20} />
              <span className="flex-1 ml-3 whitespace-nowrap">Statistics</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <AiOutlineLogout size={20} />
              <span className="flex-1 ml-3 whitespace-nowrap">Logout</span>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default AdminSideBar;
