import React from "react";
import { features } from "../Data";
import styles, { layout } from "../Styles";
import Button from "./Button";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { BsTwitter } from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";
import { fadeIn, textVariant } from "../motion";
const Business = () => (
  <section
    id="founders"
    className={` text-white sm:py-16 py-10 flex md:flex-row flex-col ${layout.section}`}
  >
    <motion.div
      initial="hidden"
      whileInView="show"
      variants={fadeIn("right", "tween", "0.2", 1)}
      viewport={{ once: true, amount: 0.25 }}
      className={`${layout.sectionInfo} `}
    >
      <motion.h2
        variants={textVariant(0.4)}
        className={`${styles.heading2} text-[40px]`}
      >
        MEET THE FOUNDER'S
      </motion.h2>
      <motion.p
        variants={textVariant(0.6)}
        className={`${styles.paragraph2} max-w-[470px] mt-5`}
      >
        The world of art is vast and diverse, with countless individuals working
        to create and share their unique visions with the world.
      </motion.p>
      <motion.p
        variants={textVariant(0.8)}
        className={`${styles.paragraph2} max-w-[470px] mt-5`}
      >
        One such person is @visionofviii ,through his own hard work and
        dedication, he has managed to create beautiful and meaningful pieces
        @ether
      </motion.p>
      <Button styles="mt-8" content="Ether" />
    </motion.div>

    <motion.div
      initial="hidden"
      whileInView="show"
      variants={fadeIn("left", "tween", "0.2", 1)}
      viewport={{ once: true, amount: 0.25 }}
      className={`${layout.sectionImg} flex-col justify-start sm:justify-around gap-5`}
    >
      {features.map((feature, index) => (
        // <Link href={feature.link}>
        <div
          key={feature.id}
          className={`flex justify-start  sm:justify-center items-center gap-7 flex-row p-6 rounded-[20px] ${
            index !== feature.length - 1 ? "mb:6" : "mb-0"
          } feature-card1  `}
        >
          <div>
            <div className="flex-1 flex flex-col ml-3">
              <h4 className="font-poppins font-semibold text-white text-[18px] leading-[20px] mb-1 ">
                {feature.title}
              </h4>
              <p className="hidden sm:block max-w-[370px] sm:font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]">
                {feature.content}
              </p>
            </div>
          </div>
          <div className="flex justify-between items-center sm:gap-5 ">
            <Link href={feature.link}>
              <button
                type="text"
                className={`hover:scale-110  gap-2 flex flex-row justify-center items-center py-4 px-6 bg-blue-gradient font-poppins  font-medium text-[18px] text-primary outline-none rounded-xl ${styles}`}
              >
                {feature.name}

                <BsTwitter className="text-2xl" />
              </button>
            </Link>
          </div>
        </div>
      ))}
    </motion.div>
  </section>
);

export default Business;
