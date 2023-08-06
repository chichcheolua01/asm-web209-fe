import React from "react";
import { Outlet } from "react-router-dom";
import { AdminHeader, AdminSideBar } from "../components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type Props = {};

const AdminLayout = (props: Props) => {
  return (
    <div className="font-Inter">
      <ToastContainer />
      <AdminHeader />
      <AdminSideBar />
      <div className="p-4 sm:ml-64">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
