import React from "react";
import { Outlet } from "react-router-dom";
import { AdminHeader, AdminSideBar } from "../components";

type Props = {};

const AdminLayout = (props: Props) => {
  return (
    <div>
      <AdminHeader />
      <AdminSideBar />
      <div className="p-4 sm:ml-64">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
          <div className="grid grid-cols-3 gap-4 mb-4">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
