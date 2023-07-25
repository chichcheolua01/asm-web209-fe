import React from "react";
import UserSideMenu from "../../../components/UserSideMenu";
import UserBanner from "../../../components/UserBanner";

type Props = {};

const HomePage = (props: Props) => {
  return (
    <div className="py-[20px]">
      <div className="flex justify-center">
        <div className="flex w-[80%]">
          <div className="grid grid-cols-4 w-full h-full gap-[20px]">
            <div>
              <UserSideMenu />
            </div>
            <div className="col-span-3">
              <UserBanner />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
