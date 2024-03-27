import React, { useState } from "react";
import { Braces } from "../assets";
import { SectionIntro } from "../components";
import { testimonialItems } from "../constants";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

import styles from "../style";
const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { imgUrl, name, position, content } = testimonialItems[currentIndex];

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonialItems.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonialItems.length - 1 ? 0 : prevIndex + 1
    );
  };
  return (
    <section
      className={`bg-gray200 ${styles.boxWidth} ${styles.padding} relative`}
    >
      <div className="w-full flex flex-col justify-center items-center text-center">
        <SectionIntro title="TESTIMONIALS" heading="What our students say" />
      </div>
      <div className="w-full flex flex-col sm:flex-row justify-between items-center">
        <button
          type="button"
          className="sm:flex hidden w-12 h-12 text-[#424551] bg-transparent rounded-full hover:bg-primary hover:text-white  justify-center items-center transition-all duration-300 ease-in-out"
        >
          <FaArrowLeftLong
            className="w-5 h-5 sm:w-6 sm:h-6"
            onClick={prevSlide}
          />
        </button>
        <div className="w-full max-w-[900px] flex justify-start items-start gap-4 sm:gap-6 bg-white py-4 sm:py-12 px-4 md:px-16 rounded shadow my-12">
          <div>
            <img
              src={Braces}
              alt="Quotes"
              className="w-5 sm:w-7 h-5 object-contain"
            />
          </div>
          <div className="flex-1 flex flex-col gap-6">
            <p className="text-sm sm:text-base text-gray800 min-h-32">
              {content}
            </p>
            <div className="flex items-center gap-5">
              <img
                src={imgUrl}
                alt={name}
                className="w-[40px] h-[40px] sm:w-[72px] sm:h-[72px] rounded-full object-cover"
              />
              <div className="flex flex-col">
                <h3 className="text-sm sm:text-base text-gray900 font-bold">
                  {name}
                </h3>
                <p className="text-xs sm:text-sm text-gray700">{position}</p>
              </div>
            </div>
          </div>
        </div>
        <button
          type="button"
          className="sm:flex hidden w-12 h-12 text-[#424551] bg-transparent rounded-full hover:bg-primary hover:text-white justify-center items-center transition-all duration-300 ease-in-out"
        >
          <FaArrowRightLong
            className="w-5 h-5 sm:w-6 sm:h-6"
            onClick={nextSlide}
          />
        </button>
        <div className="sm:hidden flex justify-center items-center gap-12">
          <button
            type="button"
            className="flex w-12 h-12 text-[#424551] bg-transparent rounded-full hover:bg-primary hover:text-white  justify-center items-center transition-all duration-300 ease-in-out"
          >
            <FaArrowLeftLong
              className="w-5 h-5 sm:w-6 sm:h-6"
              onClick={prevSlide}
            />
          </button>
          <button
            type="button"
            className="flex w-12 h-12 text-[#424551] bg-transparent rounded-full hover:bg-primary hover:text-white justify-center items-center transition-all duration-300 ease-in-out"
          >
            <FaArrowRightLong
              className="w-5 h-5 sm:w-6 sm:h-6"
              onClick={nextSlide}
            />
          </button>
        </div>
      </div>
      {/* indicators */}
      <div className="sm:flex hidden justify-center items-center gap-2">
        {testimonialItems.map((_, index) => (
          <div
            key={index}
            className={`w-[30px] h-[3px] rounded transition-all duration-300 cursor-pointer ${
              index === currentIndex ? "bg-primary" : "bg-gray500"
            }`}
            onClick={() => setCurrentIndex(index)}
          ></div>
        ))}
      </div>
    </section>
  );
};
export default Testimonial;
