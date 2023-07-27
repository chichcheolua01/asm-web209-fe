import React from "react";
import { Outlet } from "react-router-dom";
import { AdminHeader } from "../components";

type Props = {};

const AdminLayout = (props: Props) => {
  return (
    <div>
      <AdminHeader />
      <Outlet />
    </div>
  );
};

export default AdminLayout;
