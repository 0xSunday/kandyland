import React from "react";
import Image from "next/image";
import { card } from "../public/assets";
import styles, { layout } from "../Styles";
import { BsTwitter } from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";
import Link from "next/link";
import Button from "./Button";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, textVariant } from "../motion";

export const imageVarient = (direction, type, delay, duration) => ({
  hidden: {
    x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
    y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
    opacity: 0,
    rotate: 50,
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

const CardDeal = () => (
  <motion.section
    initial="hidden"
    whileInView="show"
    variants={staggerContainer}
    viewport={{ once: true, amount: 0.25 }}
    id="whitelist"
    className={`${layout.section} sm:py-16 py-10`}
  >
    <motion.div
      variants={fadeIn("right", "tween", "0.2", 1)}
      className={`${layout.sectionInfo}`}
    >
      <motion.h2 variants={textVariant(0.2)} className={`${styles.heading2}`}>
        How TO Get Whitelist <br className="sm:block hidden" />
      </motion.h2>
      <motion.p
        variants={textVariant(0.4)}
        className={`${styles.paragraph} max-w-[470px] mt-5`}
      >
        Show support with your unique Strength Avenues to Explore include (but
        are not limited to) that is Coldplay, Memes, Lore, Graphics, Videos,
        Music, Fan Arts, Clothings No Grinding and more
      </motion.p>
      <motion.p
        variants={textVariant(0.6)}
        className={`${styles.paragraph} max-w-[470px] mt-5`}
      >
        Winner obtain a White List Events are announced through the Ether
        Discord and /or the official social media Accouts. The events structure
        and rules will be explained when they are annunced.
      </motion.p>
      <motion.p
        variants={textVariant(0.8)}
        className={`${styles.paragraph} max-w-[470px] mt-5`}
      >
        for more updates follow us in ⬇️
      </motion.p>

      <motion.div
        variants={textVariant(1)}
        className="flex sm:flex-row flex-col justify-around items-center gap-6 p-6"
      >
        <Link href="https://twitter.com/ether">
          <button
            type="text"
            className={`hover:scale-110  gap-2 flex flex-row justify-center items-center py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none rounded-xl ${styles}`}
          >
            TWITTER
            <BsTwitter className="text-2xl" />
          </button>
        </Link>
        <Link href="https://twitter.com/ether">
          <button
            type="text"
            className={`hover:scale-110  gap-2 flex flex-row justify-center items-center py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none rounded-xl ${styles}`}
          >
            DISCORD
            <FaDiscord className="text-2xl" />
          </button>
        </Link>
      </motion.div>
    </motion.div>
    <motion.div
      variants={imageVarient("left", "tween", "0.2", 1)}
      className={`  ${layout.sectionImg}`}
    >
      <Image
        alt="card"
        src="/nft5.jpeg"
        width={700}
        height={700}
        className="w-[100%] h-[100%] -scale-x-100 z-10 rounded-t-full border-2 border-white"
      />
      <div className="absolute z-5 right-1/6 top-0 w-[50%] h-[50%] rounded-full white__gradient"></div>
      <div className="absolute z-0 right-1/6 top-0 w-[50%] h-[50%] rounded-full pink__gradient"></div>
    </motion.div>
  </motion.section>
);

export default CardDeal;
