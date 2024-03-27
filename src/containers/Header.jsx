import React from "react";
import { Hero, Play } from "../assets";
import styles, { layout } from "../style";
import { Button, Statistics } from "../components";
import { Link } from "react-router-dom";
const Header = ({ isStatistics }) => (
  <header
    className={`${styles.boxWidth} ${styles.paddingX} bg-primary/20 pt-32 pb-16`}
  >
    <div className="flex flex-col md:flex-row justify-between items-center gap-12 md:gap-0">
      <div className={`${layout.sectionInfo} gap-6`}>
        <div className="flex justify-start items-center gap-1">
          <img
            src={Play}
            alt="Play"
            className="w-[80px] h-[80px] object-contain"
          />
          <p className="text-gray900 text-sm font-bold">Play show reel</p>
        </div>
        <h1 className="text-4xl sm:text-6xl font-black text-gray900 w-full max-w-[500px]">
          Enjoy studying with Createx Online Courses
        </h1>
        <div className="w-full flex flex-col ss:flex-row justify-start items-center mt-8 gap-6">
          <Link to="/about-us">
            <button
              type="button"
              className="text-base font-bold text-primary border-2 border-solid border-primary py-3 px-5 rounded w-full max-w-36 transition-all duration-300 ease-in-out hover:bg-primary hover:text-white"
            >
              About Us
            </button>
          </Link>
          <Link to="/courses">
            <Button label="Explore courses" />
          </Link>
        </div>
      </div>
      <div className={`${layout.sectionImg}`}>
        <img src={Hero} alt="Image" className="w-full h-full object-contain" />
      </div>
    </div>
    <Statistics isStatistics={isStatistics} />
  </header>
);
export default Header;
