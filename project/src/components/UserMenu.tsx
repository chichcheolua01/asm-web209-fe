import React from "react";

type Props = {};

const UserMenu = (props: Props) => {
  return (
    <div className="w-full flex justify-center">
      <div className="border border-x-0 py-[10px] w-[80%] flex justify-between">
        <div className="flex items-center">
          <a
            href="#"
            className="px-3 py-2 text-sm font-medium  hover:bg-gray-700"
          >
            HOME
          </a>
          <a
            href="#"
            className="px-3 py-2 text-sm font-medium  hover:bg-gray-700"
          >
            MEGA MENU
          </a>
          <a
            href="#"
            className="px-3 py-2 text-sm font-medium  hover:bg-gray-700"
          >
            COLLECTION LAYOUT
          </a>
          <a
            href="#"
            className="px-3 py-2 text-sm font-medium  hover:bg-gray-700"
          >
            PAGES
          </a>
          <a
            href="#"
            className="px-3 py-2 text-sm font-medium  hover:bg-gray-700"
          >
            BLOGS
          </a>
          <a
            href="#"
            className="px-3 py-2 text-sm font-medium  hover:bg-gray-700"
          >
            CONTACT US
          </a>
        </div>
        <div className="flex items-center pr-[50px]">
          <input
            type="text"
            className="focus:outline-none font-thin"
            placeholder="Seach something"
          />
        </div>
      </div>
    </div>
  );
};

export default UserMenu;
