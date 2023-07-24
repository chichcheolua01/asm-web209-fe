import React from "react";
import { BiLogoGmail } from "react-icons/bi";

type Props = {};

const UserFooter = (props: Props) => {
  return (
    <div>
      <div className="bg-red-500 text-white ">
        <div className="px-[200px] flex justify-between items-center py-[20px]">
          <div>
            <p className="text-[20px] font-light">SIGN UP TO NEWSLETTER</p>
            <p className="text-[13px] font-light opacity-50">
              Subscribe now and receive weekly newsletter
            </p>
          </div>
          <div className="w-1/2 relative">
            <input
              type="text"
              className="bg-red-400 text-white w-full rounded-full p-[15px]"
              placeholder="Email address"
            />
            <div className="absolute right-0 top-[20px] left-[780px]">
              <BiLogoGmail />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserFooter;
