import React from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import UserSideMenu from "../../../components/user/UserSideMenu";
import icons from "../../../utils/icons";
import ProductItem from "../../../components/user/ProductItem";
import { useGetProducts2Query } from "../product.services";
import { IProduct } from "../../../interfaces/product.interface";
import Pagination from "../../../components/user/Pagination";
import { useDispatch, useSelector } from "react-redux";
import {
  setFilterPriceGte,
  setFilterPriceLte,
  setSeletedSort,
} from "../product.slice";
import {
  handleFilterPriceGteUrl,
  handleFilterPriceLteUrl,
  handleSortUrl,
  name,
  page,
  price_filter_gte,
  price_filter_lte,
  sort,
} from "../../../utils/fn";
import { RootState } from "../../../store/store";

const { BiChevronRight, AiOutlineUnorderedList } = icons;

type Props = {};

const ProductPage = (props: Props) => {
  const { filterPriceGte, filterPriceLte } = useSelector(
    (state: RootState) => state.product
  );
  const [searchParams] = useSearchParams();
  const { category } = useParams();
  const dispatch = useDispatch();

  const { data, isLoading, isFetching } = useGetProducts2Query({
    name: name(searchParams),
    sort: sort(searchParams),
    filterPriceGte: price_filter_gte(searchParams),
    filterPriceLte: price_filter_lte(searchParams),
    category: category,
    page: page(searchParams),
    limit: import.meta.env.VITE_APP_LIMIT_PRODUCT_PER_PAGE || 12,
  });

  const navigate = useNavigate();

  const handleChangeSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    dispatch(setSeletedSort(value));
    const sortUrl = handleSortUrl(
      value,
      name(searchParams),
      price_filter_gte(searchParams),
      price_filter_lte(searchParams),
      page(searchParams)
    );
    navigate(sortUrl);
  };

  const handleChangeFilterPriceGte = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = e.target.value;
    dispatch(setFilterPriceGte(value));

    const filterPriceGteUrl = handleFilterPriceGteUrl(
      value,
      name(searchParams),
      sort(searchParams),
      price_filter_lte(searchParams),
      page(searchParams)
    );
    navigate(filterPriceGteUrl);
  };

  const handleChangeFilterPriceLte = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = e.target.value;
    dispatch(setFilterPriceLte(value));
    const filterPriceLteUrl = handleFilterPriceLteUrl(
      value,
      name(searchParams),
      sort(searchParams),
      price_filter_gte(searchParams),
      page(searchParams)
    );
    navigate(filterPriceLteUrl);
  };

  return (
    <>
      <div className="bg-[#f7f7f7] py-[15px] mb-[35px]">
        <div className="px-[170px]">
          <div>
            <div className="text-[#151515] text-lg font-semibold uppercase mb-[10px]">
              PRODUCTS
            </div>
            <div className="flex items-center text-sm text-[#1c1d1d]">
              <span>Home page</span>
              <BiChevronRight size={18} />
              <span>Products</span>
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
                <span className="uppercase font-semibold">SHOP BY</span>
              </div>

              <div className="border border-solid border-[#ccc]">
                <div className="py-[15px] px-[20px]">
                  <div className="text-main-500 text-[17px] font-semibold mb-[10px]">
                    Sort by
                  </div>
                  <select
                    name=""
                    id=""
                    className="border border-solid border-[rgba(26,27,24,.75)] pl-[15px] pr-5 w-full text-xs bg-[#f6f6f6] text-[#1c1d1d] py-[10px]"
                    onChange={handleChangeSort}
                  >
                    <option value="">Featured products</option>
                    <option value="">Best seller</option>
                    <option value="name">Alphabetically, A-Z</option>
                    <option value="-name">Alphabetically, Z-A</option>
                    <option value="price">Prices go up</option>
                    <option value="-price">Prices go down</option>
                  </select>
                </div>

                <div className="py-[15px] px-[20px]">
                  <div className="text-main-500 text-[17px] font-semibold mb-[10px]">
                    Giá
                  </div>

                  <div className="border border-solid border-[rgba(26,27,24,0.2)] w-full">
                    <div className="border-b border-solid border-[rgba(26,27,24,0.2)]">
                      <div className="px-[10px] py-[5px] text-main-500 text-sm">
                        The highest price is 46,893,977.41 VND. Default input
                        value fixed as VND
                        <span className="underline">Reset</span>
                      </div>
                    </div>

                    <form className="px-4 py-6">
                      <div className="mb-[10px] flex items-center gap-x-[6px]">
                        <label htmlFor="" className="text-main-500 text-xs">
                          VND
                        </label>
                        <input
                          type="number"
                          placeholder="From"
                          className="w-full bg-[#f6f6f6] pl-[10px] border-none"
                          id="gte-input"
                          value={filterPriceGte}
                          onChange={handleChangeFilterPriceGte}
                        />
                      </div>

                      <div className="mb-[10px] flex items-center gap-x-[6px]">
                        <label htmlFor="" className="text-main-500 text-xs">
                          VND
                        </label>
                        <input
                          type="number"
                          placeholder="To"
                          className="w-full bg-[#f6f6f6] pl-[10px] border-none"
                          id="lte-input"
                          value={filterPriceLte}
                          onChange={handleChangeFilterPriceLte}
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
              {data?.products.map((product: IProduct) => (
                <ProductItem key={product._id} product={product} />
              ))}
            </div>

            <Pagination
              name={name(searchParams)}
              sort={sort(searchParams)}
              price_filter_gte={price_filter_gte(searchParams)}
              price_filter_lte={price_filter_lte(searchParams)}
              totalCount={data?.totalProduct as number}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
