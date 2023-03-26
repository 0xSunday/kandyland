import Image from "next/image";
import React from "react";
import { footerLinks, socialMedia } from "../Data";
import { logo } from "../public/assets";
import styles from "../Styles";
const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full  `}>
      <div className="flex-1 flex-col justify-start mr-10">
        <Image
          src={logo}
          alt="hoobank"
          className="w-[266px] h-[72px] object-contain"
        />
        <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>
          A new way to make the payments easy, reliable and secure.
        </p>
      </div>

      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
        {footerLinks.map((link) => (
          <div key={link.key} className="ss:my-0 my-4 min-w-[150px] py-4 ">
            <h4 className="text-white leading-[50px] text-[20px] font-poppins font ">
              {link.title}
            </h4>
            <ul>
              {link.links.map((ln, index) => (
                <li
                  key={ln.name}
                  className="font-poppins font-normal text-[16px] leading-[35px] text-dimWhite hover:text-white cursor-pointer"
                >
                  {ln.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    <div className="text-dimWhite pt-6 border-t-[1px] border-t-[#3f3r45] flex justify-around items-center w-full flex-col sm:flex-row leading-[50px] text-[20px] font-poppins">
      <div>
        <p>2023 HooBank. All Rights Reserved.</p>
      </div>
      <div className="flex flex-row md:mt-0 mt-6">
        {socialMedia.map((sm, index) => (
          <Image
            key={sm.id}
            src={sm.icon}
            alt={sm.id}
            className={` w-[27px] h-[21px] object-contain cursor-pointer ${
              index !== socialMedia.length - 1 ? "mr-6" : "mr - 0"
            }`}
          />
        ))}
      </div>
    </div>
  </section>
);
export default Footer;
