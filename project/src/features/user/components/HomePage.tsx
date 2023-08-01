import React, { useState } from "react";
import { useGetProductQuery, useGetProductsQuery } from "../product.services";
import {
  UserBanner,
  UserDailyDeal,
  UserProductTypeBanner,
  UserSideMenu,
} from "../../../components";
import UserTypeMenu from "../../../components/user/UserTypeMenu";
import UserProductSlider from "../../../components/user/UserProductSlider";
import UserFeaturedProducts from "../../../components/user/UserFeaturedProducts";
import UserFeaturedBanner from "../../../components/user/UserFeaturedBanner";
import UserNewArrival from "../../../components/user/UserNewArrival";

type Props = {};

const HomePage = (props: Props) => {
  const { data, isFetching, isLoading } = useGetProductsQuery();
  const products = data?.products;
  const dailyProduct = data?.products[0];
  const [productType, setProductType] = useState<string>("best_seller");
  const handleChangeType = (type: string) => {
    setProductType(type);
  };
  return (
    <div className="py-[20px]">
      <div className="flex justify-center">
        <div className="flex flex-col w-[80%] space-y-[20px]">
          <div className="grid grid-cols-4 w-full h-full gap-[20px]">
            <div>
              <UserSideMenu />
            </div>
            <div className="col-span-3">
              <UserBanner />
            </div>
          </div>
          <div className="grid grid-cols-4 w-full h-full gap-x-[20px]">
            <div className="h-[100%] border border-1 border-gray-200">
              <UserDailyDeal item={dailyProduct} />
            </div>
            <div className="col-span-3 w-full">
              <div className="flex flex-col space-y-[20px]">
                <div>
                  <UserTypeMenu handleChangeType={handleChangeType} />
                </div>
                <div>
                  <div>
                    <UserProductSlider type={productType} products={products} />
                  </div>
                  <div>
                    <UserProductTypeBanner />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-[20px]">
            <UserFeaturedProducts products={products} />
          </div>
          <div>
            <UserFeaturedBanner />
          </div>
          <div>
            <UserNewArrival type={productType} products={products} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
