import React from "react";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { SiAsus } from "react-icons/si";
import { useGetCategoriesQuery } from "../../features/user/category.services";
import { ICategory } from "../../interfaces/category.interface";
import { Link } from "react-router-dom";
import laptop_icon from "../../assets/laptop-icon.png";

type Props = {};

const UserSideMenu = (props: Props) => {
  const { data } = useGetCategoriesQuery();

  return (
    <div className="border border-1 border-gray-200">
      <div className="px-[20px] py-[10px] bg-[#EE3131]">
        <div className="flex space-x-[5px] items-center  text-white">
          <div>
            <AiOutlineUnorderedList />
          </div>
          <p className="text-[16px]">ALL COLLECTIONS</p>
        </div>
      </div>
      <div className="text-black">
        <ul className="">
          {data?.categories.map((category: ICategory) => (
            <li className="py-2" key={category._id}>
              <Link
                to={`/category/${category.slug}`}
                className="text-white block pl-5"
              >
                <div className="flex space-x-[12px] items-center text-[#1c1d1d]">
                  <div className="w-6 h-6">
                    <img src={laptop_icon} alt="" className="w-full h-full" />
                  </div>
                  <p className="text-[14px] ">{category.name}</p>
                </div>
              </Link>
            </li>
          ))}

          {/* <li className="py-2">
            <a href="#" className="text-white block pl-4">
              <div className="flex space-x-[10px] items-center text-[#1c1d1d]">
                <div>
                  <SiAsus size={35} />
                </div>
                <p className="text-[14px] ">Asus</p>
              </div>
            </a>
          </li>
          <li className="py-2">
            <a href="#" className="text-white block pl-4">
              <div className="flex space-x-[10px] items-center text-[#1c1d1d]">
                <div>
                  <IoLogoApple size={35} />
                </div>
                <p className="text-[14px] ">Apple</p>
              </div>
            </a>
          </li>
          <li className="py-2">
            <a href="#" className="text-white block pl-4">
              <div className="flex space-x-[10px] items-center text-[#1c1d1d]">
                <div>
                  <SiDell size={35} />
                </div>
                <p className="text-[14px] ">Dell</p>
              </div>
            </a>
          </li>
          <li className="py-2">
            <a href="#" className="text-white block pl-4">
              <div className="flex space-x-[10px] items-center text-[#1c1d1d]">
                <div>
                  <RiAliensFill size={35} />
                </div>
                <p className="text-[14px] ">Alienware</p>
              </div>
            </a>
          </li>
          <li className="py-2">
            <a href="#" className="text-white block pl-4">
              <div className="flex space-x-[10px] items-center text-[#1c1d1d]">
                <div>
                  <SiAsus size={40} />
                </div>
                <p className="text-[14px] ">Asus</p>
              </div>
            </a>
          </li>
          <li className="py-2">
            <a href="#" className="text-white block pl-4">
              <div className="flex space-x-[10px] items-center text-[#1c1d1d]">
                <div>
                  <SiAsus size={40} />
                </div>
                <p className="text-[14px] ">Asus</p>
              </div>
            </a>
          </li>
          <li className="py-2">
            <a href="#" className="text-white block pl-4">
              <div className="flex space-x-[10px] items-center text-[#1c1d1d]">
                <div>
                  <SiAsus size={40} />
                </div>
                <p className="text-[14px] ">Asus</p>
              </div>
            </a>
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default UserSideMenu;
