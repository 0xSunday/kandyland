import React from "react";
import { apple, bill, google } from "../public/assets";
import styles, { layout } from "../Styles";
import { quotes } from "../public/assets";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, textVariant } from "../motion";

export const imageVarient = (direction, type, delay, duration) => ({
  hidden: {
    x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
    y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
    opacity: 0,
    rotate: -50,
  },
  show: {
    x: 0,
    y: 0,
    rotate: 0,
    opacity: 1,
    transition: {
      type,
      delay,
      duration,
      delay: 0.5,
      duration: 1,
      ease: "easeOut",
    },
  },
});

const Billings = () => (
  <motion.section
    initial="hidden"
    whileInView="show"
    variants={staggerContainer}
    viewport={{ once: true, amount: 0.25 }}
    id="about"
    className="flex md:flex-row flex-col-reverse sm:py-16 py-10 "
  >
    <motion.div
      variants={imageVarient("right", "tween", "0.2", 1)}
      className={
        "p-5  flex-1 flex justify-center items-center md:mr-10 mr-0 md:mt-0 mt-10 relative"
      }
    >
      <Image
        src="/logo3.png"
        width={700}
        height={700}
        alt="bill"
        className={`w-[100%] h-[100%]  z-10  rounded-full border-2 border-white bg-slate-600`}
      />
      <div className="absolute z-5 -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient"></div>
      <div className="absolute z-0 -left-1/2 top-0 w-[50%] h-[50%] rounded-full pink__gradient"></div>
    </motion.div>

    <motion.div
      variants={fadeIn("left", "tween", "0.2", 1)}
      className={`${layout.sectionInfo} flex `}
    >
      <motion.h2
        variants={textVariant(0.4)}
        className={`${styles.heading2} text-[40px]`}
      >
        Supply And Price
      </motion.h2>
      <motion.p
        variants={textVariant(0.6)}
        className={`${styles.paragraph} max-w-[470px] mt-3 `}
      >
        Total supply will be 10000, 1750 will be whitelisted, 250 for the
        treasury and 8000 for public Mint Prince for public will be 1ETH and
        whitelist mint price 0.5ETH
      </motion.p>
      <motion.p
        variants={textVariant(0.8)}
        className={`${styles.paragraph} max-w-[470px] mt-5 mb-10`}
      >
        Mint Date Quater 2 ,2023 (exact data will be announced soon)
      </motion.p>
      <motion.h2
        variants={textVariant(1)}
        className={`${styles.heading2} text-[40px]`}
      >
        Percentage Of Types
      </motion.h2>
      <motion.p
        variants={textVariant(1.2)}
        className={`${styles.paragraph} max-w-[470px] mt-3`}
      >
        Total 5000 Male and 5000 Female .Out of Total supply 50% will be Humans
        30% will be Mecha 19% will be IMP/Vampire 0.95% will be Currupt 0.05
        will be 1 OF 1 (1 of 1 is special)
      </motion.p>
    </motion.div>
  </motion.section>
);

export default Billings;
