import React from "react";
import { stats } from "../Data";
import { motion } from "framer-motion";
import { fadeIn, slideIn, staggerContainer } from "../motion";
const Stats = () => (
  <motion.section
    initial="hidden"
    whileInView="show"
    variants={staggerContainer}
    viewport={{ once: true, amount: 0.25 }}
    className="flex justify-center items-center flex-wrap flex-col sm:flex-row sm:mb-20 mb-6"
  >
    {stats.map((stat, i = 1) => (
      <motion.div
        variants={fadeIn("up", "tween", 0.1  , 0.5)}
        className="flex flex-1 justify-start sm:justify-center items-center flex-row m-3 "
      >
        <h4 className="text-white font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] ">
          {stat.value}
        </h4>
        <p className="text-gradient font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] uppercase ml-3">
          {stat.title}
        </p>
      </motion.div>
    ))}
  </motion.section>
);

export default Stats;
