import React from "react";
import { statistics } from "../constants";
import { FaPlayCircle } from "react-icons/fa";
import { Image_11, Play_1 } from "../assets";
import { Statistics } from "../components";
import styles from "../style";

const StatisticItem = ({ value, text }) => (
  <div
    className={`flex flex-wrap min-w-40 flex-col md:flex-row items-center gap-3`}
  >
    <h3 className="text-gray900 text-2xl sm:text-4xl font-black">{value}</h3>
    <p className="text-sm sm:text-base text-gray900 font-normal">{text}</p>
  </div>
);

const Achievements = () => (
  <section
    className={`${styles.boxWidth} ${styles.padding} flex flex-col md:flex-row justify-center items-center gap-12`}
  >
    <div className={`flex-1 flex flex-col gap-6 sm:gap-8`}>
      <div className="flex justify-start items-center gap-4">
        <img
          src={Play_1}
          alt="Play"
          className="w-[52px] h-[52px] object-contain"
        />
        <p className="text-sm font-bold text-gray900">Watch Video</p>
      </div>
      <img
        src={Image_11}
        alt="Image"
        className="w-full h-full object-contain"
      />
    </div>
    <div className="flex-[0.45] flex justify-end w-full">
      <div
        className={`w-full flex gap-6 md:flex-col flex-row flex-wrap justify-center md:ml-12`}
      >
        {statistics.map(({ value, text }, index) => (
          <StatisticItem key={text} value={value} text={text} styles="mt-0" />
        ))}
      </div>
    </div>
  </section>
);

export default Achievements;
