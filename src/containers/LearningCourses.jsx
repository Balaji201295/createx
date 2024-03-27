import React from "react";
import styles from "../style";
import { SectionIntro } from "../components";
import { learningCourses } from "../constants";
import { Bg_Circles } from "../assets";
const LearningCourses = () => (
  <section className={`${styles.boxWidth} ${styles.padding} w-full`}>
    <div className="w-full flex flex-col justify-center items-center text-center">
      <SectionIntro title="Main steps" heading="Online learning process" />
    </div>
    <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-6 my-12">
      {learningCourses.map((item, index) => (
        <div
          key={index}
          className="flex-1 w-full min-w-[260px] max-w-[300px] group"
        >
          <div className="relative z-[3]">
            <h2 className="text-4xl font-black text-gray400 group-hover:text-primary rounded-full transition-all duration-300 ease-in-out">
              {item.number < 10 ? `0${item.number}` : item.number}
            </h2>
            <img
              src={Bg_Circles}
              alt="Circles"
              className="w-[80px] sm:w-[100px] h-[80px] sm:h-[100px] object-contain absolute -top-5 -left-5 sm:-top-7 sm:-left-7 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out"
            />
          </div>

          <h3 className="text-base font-bold text-gray900 mt-4 pb-2">
            {item.title}
          </h3>
          <p className={`${styles.paragraph} text-gray700`}>{item.content}</p>
        </div>
      ))}
    </div>
  </section>
);
export default LearningCourses;
