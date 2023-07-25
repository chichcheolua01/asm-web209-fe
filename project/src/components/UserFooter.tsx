import React from "react";
import {
  BiLogoFacebook,
  BiLogoGmail,
  BiLogoGoogle,
  BiLogoInstagramAlt,
  BiLogoLinkedin,
  BiLogoPinterest,
  BiLogoTwitter,
} from "react-icons/bi";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GiPositionMarker } from "react-icons/gi";
import { GrMail } from "react-icons/gr";

type Props = {};

const UserFooter = (props: Props) => {
  return (
    <div className="w-full flex flex-col justify-center">
      <div className="bg-[#EE3131] text-white w-full flex justify-center">
        <div className="flex justify-between items-center py-[20px] w-[80%]">
          <div>
            <p className="text-[20px] font-light">SIGN UP TO NEWSLETTER</p>
            <p className="text-[13px] font-light opacity-50">
              Subscribe now and receive weekly newsletter
            </p>
          </div>
          <div className="w-1/3 relative">
            <input
              type="text"
              className="bg-red-400 text-white w-full rounded-full p-[15px]"
              placeholder="Email address"
            />
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col items-center justify-center bg-[#191919] text-white">
        <div className="w-[80%] flex py-[30px]">
          <div className="w-1/3 flex flex-col space-y-[10px]">
            <div className="flex flex-col items-start space-y-[5px]">
              <div className="border border-l-[3px] border-y-0 border-r-0 px-[15px] border-[#EE3131] mb-[15px]">
                <h2 className="text-[15px]">ABOUT US</h2>
              </div>
              <div>
                <p className="text-[13px] flex space-x-[5px] items-center">
                  <GiPositionMarker />
                  <p>Address:</p>
                  <p className="opacity-50">
                    474 Ontario St Toronto, ON M4X 1M7 Canada
                  </p>
                </p>
              </div>
              <div>
                <p className="text-[13px] flex space-x-[5px] items-center">
                  <BsFillTelephoneFill />
                  <p>Phone:</p>
                  <p className="opacity-50">(+1234)56789xxx</p>
                </p>
              </div>
              <div>
                <p className="text-[13px] flex space-x-[5px] items-center">
                  <GrMail />
                  <p>Mail:</p>
                  <p className="opacity-50">nghiattph19335@fpt.edu.vn</p>
                </p>
              </div>
            </div>
            <div className="flex space-x-[5px]">
              <div className="bg-[#303030] p-[10px] rounded-md">
                <BiLogoFacebook />
              </div>
              <div className="bg-[#303030] p-[10px] rounded-md">
                <BiLogoTwitter />
              </div>
              <div className="bg-[#303030] p-[10px] rounded-md">
                <BiLogoInstagramAlt />
              </div>
              <div className="bg-[#303030] p-[10px] rounded-md">
                <BiLogoGoogle />
              </div>
              <div className="bg-[#303030] p-[10px] rounded-md">
                <BiLogoPinterest />
              </div>
              <div className="bg-[#303030] p-[10px] rounded-md">
                <BiLogoLinkedin />
              </div>
            </div>
          </div>
          <div className="w-2/3 flex space-x-[100px] justify-center">
            <div className="flex flex-col items-start space-y-[5px]">
              <div className="border border-l-[3px] border-y-0 border-r-0 px-[15px] border-[#EE3131] mb-[15px]">
                <h2 className="text-[15px]">INFORMATION</h2>
              </div>
              <div>
                <p className="text-[13px] flex space-x-[5px] items-center">
                  <p className="opacity-50">Typography</p>
                </p>
              </div>
              <div>
                <p className="text-[13px] flex space-x-[5px] items-center">
                  <p className="opacity-50">Gallery</p>
                </p>
              </div>
              <div>
                <p className="text-[13px] flex space-x-[5px] items-center">
                  <p className="opacity-50">Store Location</p>
                </p>
              </div>
              <div>
                <p className="text-[13px] flex space-x-[5px] items-center">
                  <p className="opacity-50">Today's Deals</p>
                </p>
              </div>
              <div>
                <p className="text-[13px] flex space-x-[5px] items-center">
                  <p className="opacity-50">Contact</p>
                </p>
              </div>
            </div>
            <div className="flex flex-col items-start space-y-[5px]">
              <div className="border border-l-[3px] border-y-0 border-r-0 px-[15px] border-[#EE3131] mb-[15px]">
                <h2 className="text-[15px]">WHO WE ARE</h2>
              </div>
              <div>
                <p className="text-[13px] flex space-x-[5px] items-center">
                  <p className="opacity-50">Help</p>
                </p>
              </div>
              <div>
                <p className="text-[13px] flex space-x-[5px] items-center">
                  <p className="opacity-50">Free shipping</p>
                </p>
              </div>
              <div>
                <p className="text-[13px] flex space-x-[5px] items-center">
                  <p className="opacity-50">FAQs</p>
                </p>
              </div>
              <div>
                <p className="text-[13px] flex space-x-[5px] items-center">
                  <p className="opacity-50">Return & Exchange</p>
                </p>
              </div>
              <div>
                <p className="text-[13px] flex space-x-[5px] items-center">
                  <p className="opacity-50">Testimonials</p>
                </p>
              </div>
            </div>
            <div className="flex flex-col items-start space-y-[5px]">
              <div className="border border-l-[3px] border-y-0 border-r-0 px-[15px] border-[#EE3131] mb-[15px]">
                <h2 className="text-[15px]">#DIGITALWORLDSTORE</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[80%] flex py-[30px]">
          <div className="flex flex-col items-start space-y-[5px]">
            <div className="border border-l-[3px] border-y-0 border-r-0 px-[15px] border-[#EE3131] mb-[15px]">
              <h2 className="text-[15px]">#PRODUCT TAGS</h2>
            </div>
            <div>
              <p className="text-[13px] flex space-x-[5px] items-center">
                <p className="opacity-50 border border-r-1 border-y-0 border-l-0 px-[5px]">
                  10-20
                </p>
                <p className="opacity-50 border border-r-1 border-y-0 border-l-0 px-[5px]">
                  100-200
                </p>
                <p className="opacity-50 border border-r-1 border-y-0 border-l-0 px-[5px]">
                  20-30
                </p>
                <p className="opacity-50 border border-r-1 border-y-0 border-l-0 px-[5px]">
                  200-300
                </p>
                <p className="opacity-50 border border-r-1 border-y-0 border-l-0 px-[5px]">
                  30-40
                </p>
                <p className="opacity-50 border border-r-1 border-y-0 border-l-0 px-[5px]">
                  300-400
                </p>
                <p className="opacity-50 border border-r-1 border-y-0 border-l-0 px-[5px]">
                  40-50
                </p>
                <p className="opacity-50 border border-r-1 border-y-0 border-l-0 px-[5px]">
                  400-500
                </p>
                <p className="opacity-50 border border-r-1 border-y-0 border-l-0 px-[5px]">
                  50-60
                </p>
                <p className="opacity-50 border border-r-1 border-y-0 border-l-0 px-[5px]">
                  500-600
                </p>
                <p className="opacity-50 border border-r-1 border-y-0 border-l-0 px-[5px]">
                  Accessories
                </p>
                <p className="opacity-50 px-[5px]">Acer</p>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#0F0F0F] text-white w-full flex justify-center">
        <div className="flex justify-between items-center py-[20px] w-[80%]">
          <div>
            <p className="text-[13px] font-light opacity-50">
              © 2023, Digital World 2 Powered by Shopify
            </p>
          </div>
          <div className="w-1/3 relative">
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserFooter;
