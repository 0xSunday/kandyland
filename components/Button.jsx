import React from "react";
import { arrowUp } from "../public/assets";
import Image from "next/image";
import { icons } from "react-icons/lib";
import Link from "next/link";
import { BsTwitter } from "react-icons/bs";
const Button = ({ styles, content }, props) => {
  return (
    <Link href="https://twitter.com/ether">
      <button
        type="text"
        className={`hover:scale-110  gap-2 flex flex-row justify-center items-center py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none rounded-xl ${styles}`}
      >
        {content}

        <BsTwitter className="text-2xl" />
      </button>
    </Link>
  );
};

export default Button;
