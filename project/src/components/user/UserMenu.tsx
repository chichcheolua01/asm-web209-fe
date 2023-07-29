import React from "react";
import { Link } from "react-router-dom";

type Props = {};

const UserMenu = (props: Props) => {
  return (
    <div className="w-full flex justify-center">
      <div className="border border-x-0 py-[10px] w-[80%] flex justify-between">
        <div className="flex items-center">
          <Link to={`/`} className="px-3 py-2 text-sm font-medium">
            HOME
          </Link>
          <Link to={`products`} className="px-3 py-2 text-sm font-medium">
            PRODUCTS
          </Link>
          <a href="#" className="px-3 py-2 text-sm font-medium">
            PAGES
          </a>
          <a href="#" className="px-3 py-2 text-sm font-medium">
            BLOGS
          </a>
          <a href="#" className="px-3 py-2 text-sm font-medium">
            CONTACT US
          </a>
        </div>
        <div className="flex items-center pr-[50px]">
          <input
            type="text"
            className="font-thin border-none focus:ring-0"
            placeholder="Search something"
          />
        </div>
      </div>
    </div>
  );
};

export default UserMenu;
