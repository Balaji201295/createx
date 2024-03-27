import React from "react";
import { Image_12 } from "../assets";
import { processes } from "../constants";
import { SectionIntro } from "../components";
import styles, { layout } from "../style";
const StudyingProcess = () => (
  <section className={`${layout.section} ${styles.boxWidth} ${styles.padding}`}>
    <div className={`${layout.sectionInfo}`}>
      <SectionIntro title="Studying process" heading="That’s how we do it" />
      <div className="flex flex-col pl-4 sm:pl-11 mt-16 gap-8 border-l border-solid border-[#9A9CA5]/50">
        {processes.map(({ title, content }, index) => (
          <div key={index} className={`flex flex-col relative`}>
            {index <= processes.length - 1 && (
              <div className="absolute -left-5 sm:-left-12 top-1 w-2 h-2 rounded-full bg-primary py-1"></div>
            )}
            <h5 className="text-xs font-bold text-gray700">
              STEP&nbsp;{index + 1}
            </h5>
            <h3 className="text-xl font-bold text-gray900 pb-2">{title}</h3>
            <p className={`${styles.paragraph} text-gray700`}>{content}</p>
          </div>
        ))}
      </div>
    </div>

    <div className={`${layout.sectionImg}`}>
      <img src={Image_12} alt="Image" className="w-[90%] object-contain" />
    </div>
  </section>
);
export default StudyingProcess;
