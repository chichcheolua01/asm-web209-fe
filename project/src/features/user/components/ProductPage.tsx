import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import UserSideMenu from "../../../components/user/UserSideMenu";
import icons from "../../../utils/icons";
import ProductItem from "./ProductItem";

const { BiChevronRight, GrSort, BsArrowRight, AiOutlineUnorderedList } = icons;

type Props = {};

const ProductPage = (props: Props) => {
  return (
    <>
      <div className="bg-[#f7f7f7] py-[15px] mb-[35px]">
        <div className="px-[170px]">
          <div>
            <div className="text-[#151515] text-lg font-semibold uppercase mb-[10px]">
              SẢN PHẨM
            </div>
            <div className="flex items-center text-sm text-[#1c1d1d]">
              <span>Trang chủ</span>
              <BiChevronRight size={18} />
              <span>Sản phẩm</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-10">
        <div className="px-[170px] flex gap-x-[22px]">
          <div className="w-[25%] flex-shrink-0 flex flex-col gap-y-5">
            <div>
              <div className="border border-solid border-[#ccc]">
                <UserSideMenu />
              </div>
            </div>

            <div>
              <div className="flex items-center py-[10px] gap-x-2 px-5 bg-main-200 text-white text-base">
                <AiOutlineUnorderedList size={16} />
                <span className="uppercase font-semibold">MUA SẮM THEO</span>
              </div>

              <div className="border border-solid border-[#ccc]">
                <div className="py-[15px] px-[20px]">
                  <div className="text-main-500 text-[17px] font-semibold mb-[10px]">
                    Sắp xếp theo
                  </div>
                  <select
                    name=""
                    id=""
                    className="border border-solid border-[rgba(26,27,24,.75)] pl-[15px] pr-5 w-full text-xs bg-[#f6f6f6] text-[#1c1d1d] py-[10px]"
                  >
                    <option value="">Sản phẩm nổi bật</option>
                    <option value="">Bán chạy nhất</option>
                    <option value="name">Theo bảng chữ cái, A-Z</option>
                    <option value="-name">Theo bảng chữ cái, Z-A</option>
                    <option value="price">Giá tăng dần</option>
                    <option value="-price">Giá giảm dần</option>
                  </select>
                </div>

                <div className="py-[15px] px-[20px]">
                  <div className="text-main-500 text-[17px] font-semibold mb-[10px]">
                    Giá
                  </div>

                  <div className="border border-solid border-[rgba(26,27,24,0.2)] w-full">
                    <div className="border-b border-solid border-[rgba(26,27,24,0.2)]">
                      <div className="px-[10px] py-[5px] text-main-500 text-sm">
                        Giá cao nhất là 46.893.977,41 VND. Giá trị đầu vào mặc
                        định là VND<span className="underline">Reset</span>
                      </div>
                    </div>

                    <form className="px-4 py-6">
                      <div className="mb-[10px] flex items-center gap-x-[6px]">
                        <label htmlFor="" className="text-main-500 text-xs">
                          VND
                        </label>
                        <input
                          type="number"
                          placeholder="Từ"
                          className="w-full bg-[#f6f6f6] pl-[10px] border-none"
                          id="gte-input"
                        />
                      </div>

                      <div className="mb-[10px] flex items-center gap-x-[6px]">
                        <label htmlFor="" className="text-main-500 text-xs">
                          VND
                        </label>
                        <input
                          type="number"
                          placeholder="Đến"
                          className="w-full bg-[#f6f6f6] pl-[10px] border-none"
                          id="lte-input"
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full h-full">
              <img
                src="https://digital-world-2.myshopify.com/cdn/shop/files/banner1-bottom-home2_b96bc752-67d4-45a5-ac32-49dc691b1958_300x.jpg?v=1613166661"
                alt=""
              />
            </div>
          </div>

          <div className="w-[75%] flex-1">
            <div className="flex mx-[-11px] gap-y-5 flex-wrap mb-10">
              {/* <div className="border border-solid border-[#ccc] px-[15px] mb-10 pb-6 pt-[15px]">
                <div className="w-[250px] h-[250px] mb-5">
                  <Link to={`/products/`}>
                    <img
                      src="https://cdn.shopify.com/s/files/1/1903/4853/products/z1_877559ca-7315-44b0-9f7f-f393bd0808bd_1024x1024.jpg?v=1491404790"
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </Link>
                </div>

                <div>
                  <h3 className="text-main-500 text-base mb-[6px]">
                    <Link to={`/products/`}>LENOVO IDEAPAD 110</Link>
                  </h3>
                  <div className="text-[#f1b400] text-xs flex gap-x-[2px] mb-[10px]">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </div>
                  <span className="text-base">1760637873 VND</span>
                </div>
              </div> */}

              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
            </div>

            <div className="flex items-center justify-center gap-x-4 font-medium text-base uppercase">
              <div className="hover:text-[#ee3131] text-black">
                <NavLink
                  to="#"
                  className={({ isActive }) =>
                    isActive ? "text-[#ee3131]" : "text-black"
                  }
                >
                  1
                </NavLink>
              </div>

              <div className="hover:text-[#ee3131] text-black">
                <NavLink
                  to="#"
                  className={({ isActive }) =>
                    isActive ? "text-[#ee3131]" : "text-black"
                  }
                >
                  2
                </NavLink>
              </div>

              <div className="hover:text-[#ee3131] text-black">
                <NavLink
                  to="#"
                  className={({ isActive }) =>
                    isActive ? "text-[#ee3131]" : "text-black"
                  }
                >
                  <BsArrowRight />
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
