import React from "react";
import { Link } from "react-router-dom";
import {
  BiLogoFacebook,
  BiLogoTwitter,
  BiLogoInstagramAlt,
  BiLogoGoogle,
  BiLogoPinterest,
  BiLogoGmail,
} from "react-icons/bi";
import {
  BsFillTelephoneFill,
  BsHeart,
  BsFillHandbagFill,
} from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import { displayCart } from "../../features/user/cart.slice";
import { RootState } from "../../store/store";

type Props = {};

const UserHeader = (props: Props) => {
  const dispatch = useDispatch();
  const { cartProducts } = useSelector((state: RootState) => state.cart);
  return (
    <div className="">
      <header>
        <div className="bg-[#EE3131] text-white flex w-full justify-center">
          <div className="w-[80%] py-[10px] flex justify-between">
            <div>
              <p className="text-[12px] font-light">
                ORDER ONLINE OR CALL US (+1800) 000 8808
              </p>
            </div>
            <div className="flex justify-between items-center space-x-[20px] text-[12px]">
              <a href="/signin">
                <p className="font-light"> <Link to={'/signin'}><a className="">Sign in</a></Link> or  <Link to={'/signup'}><a className="">Sign up</a></Link></p>
              </a>
              <div className="flex">
                <div className="border border-l-1 border-y-0 border-r-0 px-[5px]">
                  <BiLogoFacebook />
                </div>
                <div className="border border-l-1 border-y-0 border-r-0 px-[5px]">
                  <BiLogoTwitter />
                </div>
                <div className="border border-l-1 border-y-0 border-r-0 px-[5px]">
                  <BiLogoInstagramAlt />
                </div>
                <div className="border border-l-1 border-y-0 border-r-0 px-[5px]">
                  <BiLogoGoogle />
                </div>
                <div className="border border-l-1 border-y-0 border-r-0 px-[5px]">
                  <BiLogoPinterest />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full justify-center">
          <div className="w-[80%] flex justify-between py-[30px] items-center">
            <div>
              <img
                src="https://digital-world-2.myshopify.com/cdn/shop/files/logo_digital_new_250x.png?v=1613166683"
                alt=""
              />
            </div>
            <div className="flex">
              <div className="flex items-center border border-y-0 border-l-0 border-r-1 px-[15px]">
                <div>
                  <div className="flex items-center space-x-[5px]">
                    <p className="text-[#EE3131]">
                      <BsFillTelephoneFill />
                    </p>
                    <p className="">(+1800) 000 8808</p>
                  </div>
                  <div>
                    <p className="font-thin">Mon-Sat 9:00AM - 8:00PM</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center border border-y-0 border-l-0 border-r-1 px-[15px]">
                <div>
                  <div className="flex items-center space-x-[5px]">
                    <p className="text-[#EE3131]">
                      <GrMail />
                    </p>
                    <p className="">SUPPORT@TADATHEMES.COM</p>
                  </div>
                  <div>
                    <p className="font-thin">Online Support 24/7</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center border border-y-0 border-l-0 border-r-1 px-[15px]">
                <div className="text-[#EE3131]">
                  <BsHeart />
                </div>
              </div>
              <button
                className="flex items-center border border-y-0 border-l-0 border-r-1 px-[15px]"
                onClick={() => dispatch(displayCart())}
              >
                <div className="flex items-center space-x-[5px]">
                  <div className="text-[#EE3131]">
                    <BsFillHandbagFill />
                  </div>
                  <p className="text-[13px] font-extralight">
                    {cartProducts?.length}{" "}
                    {cartProducts?.length > 1 ? "items" : "item"}
                  </p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default UserHeader;
