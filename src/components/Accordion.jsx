import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";

const Accordion = ({ faqItems }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleIndex = (index) =>
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));

  return (
    <div className="w-full flex flex-col">
      {faqItems?.map(({ question, answer }, index) => {
        const isActive = index === activeIndex;

        return (
          <div
            key={index}
            className="flex gap-4"
            onClick={() => toggleIndex(index)}
          >
            <p className="text-primary flex items-start text-xs sm:text-sm gap-2 mt-1">
              {isActive ? <FaMinus /> : <FaPlus />}
            </p>
            <div className="pb-4 w-full">
              <h2 className="flex items-start gap-2 cursor-pointer mb-2">
                <span className="text-sm sm:text-base text-primary min-w-14">
                  Lesson {index + 1}.
                </span>
                <span className="text-sm sm:text-base font-bold text-gray900">
                  {question}
                </span>
              </h2>
              <div
                className={`overflow-hidden transition-all ease-in-out duration-500 ${
                  isActive
                    ? "max-h-screen opacity-100 py-4 border-b border-primary/50"
                    : "max-h-0 opacity-0 py-0 border-b-0"
                }`}
              >
                {isActive && (
                  <p className="text-xs sm:text-sm font-normal">{answer}</p>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
