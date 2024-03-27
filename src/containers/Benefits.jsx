import React, { useState } from "react";
import styles, { layout } from "../style";
import { SectionIntro } from "../components";
import { benefits } from "../constants";

const Benefits = () => {
  const [category, selectedCategory] = useState("Experienced Tutors");

  const handleTabCategory = (category) => {
    selectedCategory(category);
  };
  return (
    <section className={`${styles.boxWidth} ${styles.padding}`}>
      <div className="w-full flex flex-col justify-center items-center text-center mb-12">
        <SectionIntro title="Our benefits" heading="That’s how we do it" />
      </div>
      <div className="flex flex-col sm:my-12">
        <div className="flex flex-wrap justify-center items-center gap-6">
          {benefits.map((benefit) => {
            const IconImg = benefit.icon;
            return (
              <button
                key={benefit.category}
                className={`flex-1 flex justify-center items-center gap-2 border border-solid rounded py-2 px-2 w-full min-w-[240px] max-w-[300px] ${
                  category === benefit.category
                    ? "border-primary text-primary"
                    : "border-transparent"
                }`}
                onClick={() => handleTabCategory(benefit.category)}
              >
                <IconImg />
                <span>{benefit.category}</span>
              </button>
            );
          })}
        </div>
        <div className="my-12">
          {benefits.map((benefit) => (
            <div
              key={benefit.category}
              className={`${layout.section} ${
                category === benefit.category ? "block" : "hidden"
              }`}
            >
              <div className={`${layout.sectionInfo} gap-6`}>
                <h2 className="text-2xl sm:text-4xl font-black text-gray900 pb-6">
                  {benefit.title}
                </h2>
                <p className={`{styles.paragraph} w-full max-w-[500px]`}>
                  {benefit.content}
                </p>
              </div>
              <div className={`${layout.sectionImg}`}>
                <img
                  src={benefit.imgUrl}
                  alt={benefit.category}
                  className="w-[80%] object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
