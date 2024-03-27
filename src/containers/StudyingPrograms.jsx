import React from "react";
import styles from "../style";
import { programs } from "../constants";
import { SectionIntro } from "../components";
import { Link } from "react-router-dom";
import { MdArrowRightAlt } from "react-icons/md";

const getColorForCategory = (category) => {
  switch (category) {
    case "Marketing":
      return "bg-[#03CEA4]";
    case "Management":
      return "bg-[#5A87FC]";
    case "HR & Recruiting":
      return "bg-[#F89828]";
    case "Design":
      return "bg-[#F52F6E]";
    case "Development":
      return "bg-[#c0ce00]";
    default:
      return "bg-black";
  }
};

const StudyingPrograms = () => {
  return (
    <section className={`${styles.boxWidth} ${styles.padding}`}>
      <div className="w-full flex flex-col justify-center items-center text-center mb-12 sm:mb-16">
        <SectionIntro title="our main directions" heading="What do we teach" />
      </div>
      <div className="grid grid-cols-1 ss:grid-cols-2 md:grid-cols-3 justify-items-center gap-6">
        {programs.map(({ imgUrl, category, content }, index) => (
          <div
            key={index}
            className="w-full max-w-[390px] min-w-[240px] flex flex-col justify-start items-start rounded border border-solid border-gray300 bg-white transition-all duration-300 ease-in-out hover:shadow-md"
          >
            <img
              src={imgUrl}
              alt={category}
              className="w-full object-contain"
            />
            <div className="flex flex-col gap-4 p-6">
              <h5
                className={`text-sm font-bold text-white px-2 max-w-max rounded ${getColorForCategory(
                  category
                )}`}
              >
                {category}
              </h5>
              <p className={`${styles.paragraph} text-gray700`}>{content}</p>
              <Link
                to="/courses"
                className="flex justify-start items-center group"
              >
                <span className="text-base font-bold text-gray900 group-hover:text-primary transition-all duration-300 ease-in-out">
                  Check Courses
                </span>
                <MdArrowRightAlt className="w-6 h-6 text-primary mt-[3px] group-hover:translate-x-1  transition-all duration-300 ease-in-out" />
              </Link>
            </div>
          </div>
        ))}
        <div
          key="custom-card"
          className="w-full max-w-[390px] min-h-[360px] min-w-[280px] flex flex-col justify-center items-center text-center rounded border border-solid border-gray300 bg-gray-200 shadow-md"
        >
          <p className="text-base sm:text-xl font-bold text-gray800 w-full max-w-56">
            New studying program coming soon...
          </p>
        </div>
      </div>
    </section>
  );
};

export default StudyingPrograms;
