import { logo, close, menu } from "../public/assets";

import { navLinks } from "../Data";
import { motion } from "framer-motion";
import Image from "next/image";
import { use, useState } from "react";
import { headerVariants } from "../motion";

const imageVarient = {
  hidden: {
    rotate: -180,
  },
  show: {
    rotate: [360, -180, 0],
    transition: {
      delay: 0.5,
      duration: 3,
    },
  },
};

const NavBar = () => {
  const [tottle, setTottle] = useState(false);

  return (
    <motion.nav
      initial="hidden"
      whileInView="show"
      variants={headerVariants}
      viewport={{ once: true, amount: 0.25 }}
      className="w-full flex py-6 justify-between items-center navbar z-10 text-white"
    >
      <div className="flex justify-center items-center gap-3 ">
        <motion.img
          initial="hidden"
          animate="show"
          variants={imageVarient}
          src="/logo.jpg"
          alt="logo"
          width={700}
          height={700}
          className=" sm:w-[60px] w-[45px]  rounded-full "
        />
        <h1 className="sm:text-3xl text-2xl font-bold font-poppins">KANDYLAND</h1>
      </div>
      <ul className="list-none hidden sm:flex justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`menu font-poppins font-normal cursor-pointer text-[20px] z-10 hover ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            }`}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden z-10 flex flex-1 justify-end items-center">
        <Image
          src={tottle ? close : menu}
          alt="menu"
          className="w-[25px] h-[25px] object-contain"
          onClick={() => {
            setTottle((tog) => {
              return !tog;
            });
          }}
        />
        <div
          className={`${
            tottle ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex  justify-end flex-col z-10 items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal z-10 cursor-pointer text-[16px] hover  ${
                  index === navLinks.length - 1 ? "mb-0" : "mb-10"
                }`}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.nav>
  );
};

export default NavBar;
