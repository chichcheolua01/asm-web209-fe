import React from "react";
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

type Props = {};

const UserHeader = (props: Props) => {
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
              <p className="font-light">Sign In or Create Account</p>
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
              <div className="flex items-center border border-y-0 border-l-0 border-r-1 px-[15px]">
                <div className="flex items-center space-x-[5px]">
                  <div className="text-[#EE3131]">
                    <BsFillHandbagFill />
                  </div>
                  <p>0 item</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default UserHeader;
