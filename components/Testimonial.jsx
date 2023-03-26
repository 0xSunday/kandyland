import React from "react";
import FeedBackCard from "./FeedBackCard";
import styles from "../Styles";
import { feedback } from "../Data";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../motion";
const Testimonial = () => (
  <motion.section
    initial="hidden"
    whileInView="show"
    variants={staggerContainer}
    id="testimonial"
    className="sm:py-16 py-10 "
  >
    <div className=" absolute z-0 w-[60%] h-[60%] -left-[40%]  rounded-full blue__gradient"></div>

    <div className="flex justify-center items-center flex-1 w-full flex-col sm:flex-row sm:justify-between ">
      <motion.h1
        variants={fadeIn("right", "tween", "0.2", 1)}
        className={`${styles.heading2} flex sm:justify-center `}
      >
        What people are <br className="sm:block hidden" /> saying about us
      </motion.h1>
      <motion.div
        variants={fadeIn("left", "tween", "0.2", 1)}
        className="w-full mt-6 sm:mt-0 flex sm:justify-center   pb-3"
      >
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          what every one is talking about ether on twitter
        </p>
      </motion.div>
    </div>

    <motion.div
      variants={fadeIn("up", "tween", "0.2", 1)}
      className="flex my-5 justify-center flex-col sm:flex-row items-start feedback-container relative z-10"
    >
      {feedback.map((card) => (
        <FeedBackCard key={card.id} {...card} />
      ))}
    </motion.div>
  </motion.section>
);
export default Testimonial;
