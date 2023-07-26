import React from "react";
import UserSideMenu from "../../../components/UserSideMenu";
import UserBanner from "../../../components/UserBanner";
import { useGetProductQuery, useGetProductsQuery } from "../product.services";
import UserDailyDeal from "../../../components/UserDailyDeal";

type Props = {};

const HomePage = (props: Props) => {
  const { data, isFetching, isLoading } = useGetProductsQuery();
  console.log(data?.products);
  const dailyProduct = data?.products[0];
  console.log(dailyProduct);

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
          <div className="grid grid-cols-4 w-full h-full gap-[20px]">
            <div>
              <UserDailyDeal item={dailyProduct} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
