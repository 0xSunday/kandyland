import React from "react";
import Styles from "../Styles";
import { FaDiscord } from "react-icons/fa";
import { discount, robot } from "../public/assets";
import { person2 } from "../public/assets";
import GetStarted from "../components/GetStarted";
import { motion } from "framer-motion";
import Image from "next/image";
import { fadeIn, staggerContainer } from "../motion";

const Hero = () => (
  <section
    initial="hidden"
    whileInView="show"
    variants={staggerContainer}
    viewport={{ once: true, amount: 0.25 }}
    id="#home"
    className="flex flex-1 md:flex-row flex-col  py-6"
  >
    <motion.div
      initial="hidden"
      whileInView="show"
      variants={fadeIn("right", "tween", "0.2", 1)}
      viewport={{ once: true, amount: 0.25 }}
      className="flex-1 flex  justify-center items-start flex-col xl:px-0 sm:px-16 px-6 "
    >
      <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
        <p className="font-poppins font-normal text-dimWhite text-[14px] sm:text-[18px] leading-[30.8px]">
          Always
          <span className="text-white"> together </span>
          with <span className="text-white"> ETHER</span> ,WAGMI
        </p>
      </div>

      <div className=" flex flex-row  items-center w-full ">
        <h1 className="font-1 font-poppins font-semibold ss:text-[62px] text-[42px] text-white ss:leading-[100px] leading-[75px]">
          PROJECT <br className="sm:block hidden" />{" "}
          <span className="text-gradient ss:text-[130px] text-[82px]">
            ETHER
          </span>
        </h1>
        <div className="ss:flex hidden md:mr-4 mr-0 ml-5">
          <GetStarted />
        </div>
      </div>

      <h1 className="font-poppins font-semibold ss:text-[60px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full">
        <span className="text-gradient">A New Form Art </span>
      </h1>
      <p className="max-w-[470px] mt-5 font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]">
        Own a piece of digital art history with our unique and rare NFT
        collection, powered by Ether.
      </p>
    </motion.div>

    <motion.div
      initial="hidden"
      whileInView="show"
      variants={fadeIn("left", "tween", "0.2", 1)}
      viewport={{ once: true, amount: 0.25 }}
    >
      <Image
        src="/logo1.png"
        alt="robot"
        width={700}
        height={700}
        className=" relative z-[5] mt-8 sm:mt-0 flex-row-reverse -scale-x-100"
      />
      <div className="absolute -z-[0] w-[40%] h-[35%] right-0 top-14 pink__gradient "></div>
      <div className="absolute -z-[1] w-[80%] h-[80%] rounded-full right-0 bottom-40 whtie__gradient "></div>
      <div className="absolute -z-[0] w-[50%] h-[50%] right-0  bottom-20 blue__gradient "></div>
    </motion.div>
    <div className="sm:hidden flex justify-center items-center my-10">
      <GetStarted />
    </div>
  </section>
);

export default Hero;
