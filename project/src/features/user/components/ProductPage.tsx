import React from "react";
import { Link } from "react-router-dom";
import { useGetProductsQuery } from "../product.services";
import UserSideMenu from "../../../components/UserSideMenu";

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
            <div className="flex items-center gap-x-2 text-[#1c1d1d]">
              Trang chủ <i className="fa-solid fa-chevron-right text-[8px]"></i>
              Sản phẩm
            </div>
          </div>
        </div>
      </div>
      <div className="mb-10">
        <div className="px-[170px] flex gap-x-[22px]">
          <div className="w-[25%] flex-shrink-0">
            <div className="mb-5">
              <div className="border border-solid border-[#ccc]">
                <UserSideMenu />
              </div>
            </div>

            <div>
              <div className="py-[10px] px-5 bg-digital-400 text-white text-base">
                <span className="pl-[14px] uppercase font-semibold">
                  MUA SẮM THEO
                </span>
              </div>

              <div className="border border-solid border-[#ccc]">
                <div className="py-[15px] px-[20px]">
                  <div className="text-[#505050] text-[17px] font-semibold mb-[10px]">
                    Sắp xếp theo
                  </div>
                  <select
                    name=""
                    id=""
                    className="border border-solid border-gray-500 p-2 w-full"
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
                  <div className="text-[#505050] text-[17px] font-semibold mb-[10px]">
                    Giá
                  </div>

                  <div className="border border-solid border-gray-300 w-full">
                    <div className="border-b border-solid border-gray-300">
                      <div className="p-2 text-[#505050] leading-6">
                        Giá cao nhất là 46.893.977,41 VND. Giá trị đầu vào mặc
                        định là VND
                      </div>
                    </div>

                    <form action="" className="px-4 py-6">
                      <div className="mb-[10px] flex items-center gap-x-[6px]">
                        <label htmlFor="" className="text-[#505050] text-xs">
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
                        <label htmlFor="" className="text-[#505050] text-xs">
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
          </div>

          <div className="w-[75%] flex-1">
            <div className="grid grid-cols-3 gap-x-[22px]">
              <div className="border border-solid border-[#ccc] px-[15px] mb-10 pb-6 pt-[15px]">
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
                  <h3 className="text-[#505050] text-base mb-[6px]">
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
              </div>

              <div className="border border-solid border-[#ccc] px-[15px] mb-10 pb-6 pt-[15px]">
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
                  <h3 className="text-[#505050] text-base mb-[6px]">
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
              </div>

              <div className="border border-solid border-[#ccc] px-[15px] mb-10 pb-6 pt-[15px]">
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
                  <h3 className="text-[#505050] text-base mb-[6px]">
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
              </div>
            </div>

            <div className="pagination">
              <div className="pagination-container text-base px-[170px] text-center">
                <a href="#" className="pr-4">
                  1
                </a>
                <a href="#" className="pr-4">
                  2
                </a>
                <a href="#" className="pr-4">
                  3
                </a>

                <i className="fa-sharp fa-solid fa-arrow-right"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
