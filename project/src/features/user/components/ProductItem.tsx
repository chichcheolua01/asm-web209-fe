import React, { useState } from "react";
import icons from "../../../utils/icons";
import { Link } from "react-router-dom";

const { AiTwotoneStar, LiaBarsSolid, FaEye, BsFillHeartFill } = icons;

type Props = {};

const ProductItem = (props: Props) => {
  const [isHover, setIsHover] = useState<boolean>(false);

  return (
    <div
      className="w-[calc(calc(100%_/_3)_-_22px)] mx-[11px] border border-[#ebebeb] p-[15px] relative h-full cursor-pointer"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div className="mb-5 w-full h-full">
        <img
          src="https://digital-world-2.myshopify.com/cdn/shop/products/z1_2_8ad649f4-de63-464c-a7d1-7573c1b53a2d_500x.jpg?v=1491404804"
          alt=""
        />
      </div>

      <div>
        <div className="mb-[6px] text-base text-main-500">
          <Link to={"/products"}>Apple Watch Edition Series 2</Link>
        </div>

        <div className="flex items-center text-[#f1b400] gap-x-[2px] mb-[10px]">
          <AiTwotoneStar size={14} />
          <AiTwotoneStar size={14} />
          <AiTwotoneStar size={14} />
          <AiTwotoneStar size={14} />
          <AiTwotoneStar size={14} />
        </div>

        <div className="text-base">6.373.954,46 VND</div>
      </div>

      <div
        className={`absolute w-full h-full top-0 left-0 py-[10px] bg-white z-10 transition-all duration-400 ease-out ${
          isHover ? "opacity-1 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="w-full flex items-center justify-between pl-4 pr-1 pb-[10px] mb-[10px] border-b border-[#ebebeb]">
          <div className="mb-[6px] text-base text-[#2b3743] leading-[18px]">
            <Link to={"/products"}>Apple Watch Edition Series 2</Link>
          </div>

          <div className="text-base text-right leading-[18px]">
            6.373.954,46 VND
          </div>
        </div>

        <div className="py-[10px] px-5 w-full">
          <div className="text-[13px] leading-[18px] text-main-500 mb-[15px]">
            Technology: No cellular connectivity
            <br />
            Dimensions: 42.6 x 36.5 x 11.4 mm
            <br />
            Weight: 45.6 g
            <br />
            Display: AMOLED 1.6 inches
            <br />
            Resolution: 390 x 312
            <br />
            OS: watchOS 3.0
            <br />
            Chipset: Apple S2
          </div>

          <div className="flex items-center gap-x-2 ">
            <div className="w-10 h-10 border border-[#c5cfd6] bg-white text-[#2a2a2a] rounded-full flex items-center justify-center cursor-pointer hover:border-transparent hover:bg-[#2a2a2a] hover:text-white transition-all duration-500 ease-out">
              <LiaBarsSolid size={17} />
            </div>

            <div className="w-10 h-10 border border-[#c5cfd6] bg-white text-[#2a2a2a] rounded-full flex items-center justify-center cursor-pointer hover:border-transparent hover:bg-[#2a2a2a] hover:text-white transition-all duration-500 ease-out">
              <FaEye size={17} />
            </div>

            <div className="w-10 h-10 border border-[#c5cfd6] bg-white text-[#2a2a2a] rounded-full flex items-center justify-center cursor-pointer hover:border-transparent hover:bg-[#2a2a2a] hover:text-white transition-all duration-500 ease-out">
              <BsFillHeartFill size={17} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
