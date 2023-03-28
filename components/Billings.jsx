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
        src="/kandyland_nft1.png"
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
        What is Goldenlane Studio
      </motion.h2>
      <motion.p
        variants={textVariant(0.6)}
        className={`${styles.paragraph} md:w-[90%] mt-3 `}
      >
        This is a studio that has 90+ projects behind, one of the most
        successful projects is "Five Nights At Freddy's" series which has
        collected more than 100 million views. the team has 15 years of
        experience with an already large and established audience
      </motion.p>

      <motion.h2
        variants={textVariant(1)}
        className={`${styles.heading2} text-[40px]`}
      >
        What is the vision ?
      </motion.h2>
      <motion.p
        variants={textVariant(1.2)}
        className={`${styles.paragraph} md:w-[90%] mt-3`}
      >
        the vision of the team is to create a project based on the storytelling
        with animation art where characters living in an amusement park, put it
        all together to create an unforgettable experience for the people, there
        4 main characters of the collection were shown.
      </motion.p>
      <motion.h2
        variants={textVariant(1)}
        className={`${styles.heading2} text-[40px]`}
      >
        launch date
      </motion.h2>
      <motion.p
        variants={textVariant(1.2)}
        className={`${styles.paragraph} md:w-[90%] mt-3`}
      >
        launch will be at Q1, 2023 so you still have some time to get in the
        community if you dont wanna miss this opportunity. price still TBA,
        supply will be around 6666-8888.
      </motion.p>
    </motion.div>
  </motion.section>
);

export default Billings;
