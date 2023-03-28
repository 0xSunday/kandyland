import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import styles, { layout } from "../Styles";

import { fadeIn, staggerChildren, textVariant, textVariant2 } from "../motion";
const Nft = () => {
  return (
    <motion.section
      className={` text-white sm:py-16 py-12 `}
      id="nft"
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <h2 className={`${styles.heading2} text-[40px] text-center py-7`}>
        NFT'S
      </h2>

      <div className="nft ">
        <motion.img
          variants={fadeIn("up", "tween", 0.3, 1)}
          src="./kandyland_nft1.png"
          alt="kandyland"
        />
        <motion.img
          variants={fadeIn("up", "tween", 0.6, 1)}
          src="./kandyland_nft2.png"
          alt="kandyland"
        />

        <motion.img
          variants={fadeIn("up", "tween", 0.9, 1)}
          src="./kandyland_nft3.png"
          alt="kandyland"
        />

        <motion.img
          variants={fadeIn("up", "tween", 1.2, 1)}
          src="./kandyland_nft4.png"
          alt="kandyland"
        />
      </div>
    </motion.section>
  );
};

export default Nft;
