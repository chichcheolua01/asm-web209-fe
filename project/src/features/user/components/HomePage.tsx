import React from "react";
import UserSideMenu from "../../../components/UserSideMenu";

type Props = {};

const HomePage = (props: Props) => {
  return (
    <div>
      <div className="flex justify-center">
        <div className="flex w-[80%]">
          <div className="grid grid-cols-4 w-full">
            <div>
              <UserSideMenu />
            </div>
            <div className="col-span-3"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
