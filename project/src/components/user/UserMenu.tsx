import React from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import {
  handleNameUrl,
  page,
  price_filter_gte,
  price_filter_lte,
  sort,
} from "../../utils/fn";

type Props = {};

const UserMenu = (props: Props) => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const inputValue = (e.target as HTMLFormElement).searchInput.value;
    const searchUrl = handleNameUrl(
      inputValue,
      sort(searchParams),
      price_filter_gte(searchParams),
      price_filter_lte(searchParams),
      page(searchParams)
    );

    navigate(searchUrl);
  };

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
          <Link to={`admin`} className="px-3 py-2 text-sm font-medium">
            ADMIN DASHBOARD
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
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="font-thin border-none focus:ring-0"
              placeholder="Search something"
              name="searchInput"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserMenu;
