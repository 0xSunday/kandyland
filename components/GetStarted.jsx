import React from "react";
import styles from "../Styles";
import { FaDiscord } from 'react-icons/fa';
import { arrowUp } from "../public/assets";
import Link from 'next/link'
import Image from "next/image";
const GetStarted = () => {
  return (
  <Link href="https://discord.gg/etherproject">
    <div className="flex justify-center items-center w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer ">
      <div className=" flex flex-col justify-center items-center bg-primary hover:bg-black w-[100%] h-[100%] rounded-full">
        <div className="flex flex-row justify-center items-center gap-1 ">
        <FaDiscord className="text-white text-3xl "/>
          <Image src={arrowUp} alt="getStated" className="w-[23px] h-[23px] " />
        </div>
        <div className="flex flex-row justify-center items-center ">
          <p className="font-poppins font-medium text-[18px] leading-[23px] flex ">
            <span className="text-gradient"> Discord </span>
          </p>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default GetStarted;
