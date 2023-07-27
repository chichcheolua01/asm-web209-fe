import React, { useState } from "react";
import { useSelector } from "react-redux";
import Slider from "react-slick";
import { RootState } from "../store/store";
import { IProduct } from "../interfaces/product.interface";

type Props = {
  type: string;
  products: IProduct[] | undefined;
};

const UserProductSlider = ({ type, products }: Props) => {
  let productsType: IProduct[] | undefined = [];
  if (type == "best_seller") {
    productsType = products?.filter((item, index) => index < 4);
    console.log(productsType);
  } else {
    productsType = products?.filter((item, index) => index >= 4);
    console.log(productsType);
  }
  function formatCurrency(amount: number | undefined) {
    return ((amount as number) / 100).toLocaleString("vi-VN", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  }
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div>
      <Slider {...settings}>
        {productsType?.map((item, index) => (
          <a href={`products/id/${item._id}`}>
            <div key={index} className="p-[15px] focus:outline-none">
              <img src={item.images[0]} alt={`Image ${index + 1}`} />
              <p className="text-[#2B3743] text-[16px] font-extralight mb-[5px]">
                {item.name}
              </p>
              <p className="text-[#2B3743] text-[16px] font-extralight">
                {formatCurrency(item.price)} VND
              </p>
            </div>
          </a>
        ))}
      </Slider>
    </div>
  );
};

export default UserProductSlider;
