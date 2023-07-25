import React from "react";
import { Outlet } from "react-router-dom";
import UserHeader from "../components/UserHeader";
import UserFooter from "../components/UserFooter";
import UserMenu from "../components/UserMenu";

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
