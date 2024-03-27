import React from "react";
import styles from "../style";
import { SectionIntro } from "../components";
import { coreValues } from "../constants";
const CoreValues = () => (
  <section className={`${styles.boxWidth} ${styles.padding}`}>
    <div className="w-full flex flex-col justify-center items-center text-center">
      <SectionIntro title="We always stand for" heading="Our core values" />
    </div>
    <div className="my-12 flex flex-wrap justify-center items-center text-center gap-4">
      {coreValues.map(({ icon, title, content }, index) => (
        <div
          key={index}
          className={`flex-1 flex flex-col justify-center items-center max-w-60 min-w-60 ${
            index !== coreValues.length - 1 ? "lg:border-r pr-4" : ""
          }`}
        >
          <img src={icon} alt={title} className="w-12 h-12 object-contain" />
          <h3 className="text-base sm:text-xl font-bold text-gray900 pt-4 pb-2">
            {title}
          </h3>
          <p className="text-sm text-gray700">{content}</p>
        </div>
      ))}
    </div>
  </section>
);
export default CoreValues;
