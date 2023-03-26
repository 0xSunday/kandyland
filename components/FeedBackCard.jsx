import React from "react";
import { quotes } from "../public/assets";
import Image from "next/image";
import { BsTwitter } from "react-icons/bs";

const FeedBackCard = ({ content, name, title, img }) => {
  return (
    <div className=" border-2 border-dimWhite  sm:hover:scale-125 transition-transform  flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr:-10 sm:mr-5 mr-0 my-5 feedback-card">
      <Image src={quotes} alt="quotes" className="w-[28px] " />
      <p className="text-font-poppins text-white font-nomral text-[18px] leading-[32px] my-10">
        {content}
      </p>

      <div className="flex flex-row justify-start items-center ">
        <BsTwitter className="w-[68px] h-[68px]  p-4  border-white mr-5 text-[#1D9BF0]" />

        <div className="flex flex-col">
          <h4 className="text-font-poppins text-white font-semibold text-[20px] leading-[32px] ">
            {name}
          </h4>
          <p className="text-font-poppins text-dimWhite font-nomral text-[18px] leading-[32px] ">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeedBackCard;
