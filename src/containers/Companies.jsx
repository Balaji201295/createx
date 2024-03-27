import React from "react";
import styles from "../style";
import { companies } from "../constants";
import { SectionIntro } from "../components";
const Companies = () => (
  <section
    className={`bg-gray200 ${styles.boxWidth} ${styles.padding} relative`}
  >
    <div className="w-full flex flex-col justify-center items-center text-center mb-12">
      <SectionIntro
        title="best jobs for you"
        heading="Our students work here"
      />
    </div>
    <div className="flex flex-wrap justify-center items-center gap-6">
      {companies.map(({ imgUrl }, index) => (
        <div
          key={index}
          className="flex-1 w-full min-w-[160px] flex justify-center items-center"
        >
          <img
            src={imgUrl}
            alt="Image"
            className="w-[150px] h-auto object-contain"
          />
        </div>
      ))}
    </div>
  </section>
);
export default Companies;
