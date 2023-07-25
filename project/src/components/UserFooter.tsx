import React from "react";
import { BiLogoGmail } from "react-icons/bi";

type Props = {};

const UserFooter = (props: Props) => {
  return (
    <div className="w-full flex justify-center">
      <div className="bg-red-500 text-white w-full flex justify-center">
        <div className="flex justify-between items-center py-[20px] w-[80%]">
          <div>
            <p className="text-[20px] font-light">SIGN UP TO NEWSLETTER</p>
            <p className="text-[13px] font-light opacity-50">
              Subscribe now and receive weekly newsletter
            </p>
          </div>
          <div className="w-1/3 relative">
            <input
              type="text"
              className="bg-red-400 text-white w-full rounded-full p-[15px]"
              placeholder="Email address"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserFooter;
