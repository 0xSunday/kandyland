import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsDiscord, BsGithub } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { footerLinks, socialMedia } from "../Data";
import { logo } from "../public/assets";
import styles from "../Styles";
const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className="text-dimWhite pt-6 border-t-[1px] border-t-[#3f3r45] flex justify-around items-center w-full flex-col sm:flex-row leading-[50px] text-[20px] font-poppins">
      <div>
        <p>2023 siva reddy. All Rights Reserved.</p>
      </div>
      <div className="flex flex-row md:mt-0 mt-6">
        {socialMedia.map((sm, index) => (
          <Link href={sm.link}>
            <Image
              key={sm.id}
              src={sm.icon}
              alt={sm.id}
              className={` w-[27px] h-[21px] object-contain cursor-pointer mr-6`}
            />
          </Link>
        ))}
        <Link href="https://github.com/0xSunday" >
          <FaGithub
          color="white"
            alt="discord"
            className={` w-[27px] h-[21px] object-contain cursor-pointer text-white}`}
          />
        </Link>
      </div>
    </div>
  </section>
);
export default Footer;
