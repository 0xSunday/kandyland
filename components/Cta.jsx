import React from "react";
import Button from "./Button";
import styles from "../Styles";
const Cta = () => (
  <section className="sm:my-20 my-14 sm:py-10 py-10 bg-black-gradient rounded-3xl flex flex-col justify-center items-center sm:flex-row flex-wrap sm:justify-around ">
    <div className="pb-10">
      <h1 className={`${styles.heading2} sm:text-[40px] flex justify-center text-center sm:text-start items-center `}>
        Let’s try our service now!
      </h1>
      <p className={`${styles.paragraph} max-w-[470px] mt-5 text-center sm:text-start`}>
        Everything you need to accept card payments and grow your business
        anywhere on the planet.
      </p>
    </div>
    <div>
      <Button />
    </div>
  </section>
);

export default Cta;
