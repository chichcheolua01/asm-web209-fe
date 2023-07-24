import React from "react";
import { Outlet } from "react-router-dom";
import UserHeader from "../components/UserHeader";
import UserFooter from "../components/UserFooter";

type Props = {};

const UserLayout = (props: Props) => {
  return (
    <div>
      <UserHeader />
      <Outlet />
      <UserFooter />
    </div>
  );
};

export default UserLayout;
