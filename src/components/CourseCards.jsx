import React from "react";
import { Circles } from "../assets";
import { Link } from "react-router-dom";
const CourseCards = ({ courses, cardAlign, cardStyles }) => {
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
  const handleGoToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className={`${
        cardAlign ? cardAlign : "md:grid-cols-2"
      } grid grid-cols-1 md:grid-cols-2 gap-7`}
    >
      {courses.map((blog, index) => {
        const { id, curatorImg, curatorName, category, title, price } = blog;
        return (
          <Link
            key={index}
            to={`/courses/${id}`}
            onClick={handleGoToTop}
            className={`w-full mx-auto ${
              cardStyles ? cardStyles : "flex-col xs:flex-row max-w-[600px]"
            } flex justify-start items-start border border-solid border-gray300 bg-white shadow-sm hover:shadow-md rounded transition-all duration-300 ease-in-out`}
          >
            <div className="flex-1 w-full flex justify-center items-center bg-[#FFCF2D] relative z-[5]">
              <img
                src={curatorImg}
                alt={curatorName}
                className="w-[214px] h-[214px] object-cover"
              />
              <div className="absolute inset-0 -z-[5]">
                <img
                  src={Circles}
                  alt="Circles"
                  className="w-full h-full object-cover opacity-25"
                />
              </div>
            </div>
            <div className="flex-[1.5] flex flex-col justify-start items-start gap-4 p-4 md:p-6">
              <h5
                className={`text-sm font-bold text-white px-2 max-w-max rounded ${getColorForCategory(
                  category
                )}`}
              >
                {category}
              </h5>
              <h3 className="text-lg text-gray900 font-bold">{title}</h3>
              <div className="flex justify-start items-center">
                <h5 className="text-base font-bold text-primary">${price}</h5>
                <div className="w-[2px] h-4 bg-[#787A80] rounded mx-2"></div>
                <p className="text-base font-normal text-gray700">
                  by {curatorName}
                </p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};
export default CourseCards;
