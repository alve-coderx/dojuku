import React from "react";
import { BsInstagram, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="bg-black">
      <div className="lg:container mx-auto w-8/12 lg:w-full">
        <div className="flex flex-col items-center justify-center ">
          <h1 className="text-white  font-apocalypse tracking-[15px] uppercase lg:text-[50px] text-[70px] lg:pt-7 pt-2">
            dokuji
          </h1>
          {/* lg:text-[130px] text-[80px] */}
          <div className="flex items-center space-x-5">
            <p className="text-gray-400 tracking-[15px] uppercase">sui</p>
            <p className="text-gray-400 tracking-[15px] uppercase">generis</p>
          </div>
        </div>
        <div className="flex flex-col lg:justify-end lg:items-end items-center justify-center space-y-2 bg-black pb-2 lg:pb-0">
          <div className="flex items-center justify-center space-x-4 space-y-5 lg:space-y-0">
            <p className="pt-5 lg:pt-0">
              <BsInstagram className="text-white h-6 w-6" />
            </p>
            <p>
              <BsTwitter className="text-white h-6 w-6" />
            </p>
          </div>
          <p className="text-gray-400">strictlybusiness.nft@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
