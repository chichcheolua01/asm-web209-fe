import React from "react";
import { Outlet } from "react-router-dom";
import { UserFooter, UserHeader, UserMenu } from "../components";

type Props = {};

const UserLayout = (props: Props) => {
  return (
    <div className="font-Poppins">
      <UserHeader />
      <UserMenu />
      <Outlet />
      <UserFooter />
    </div>
  );
};

export default UserLayout;
