import React from "react";
import { Image_1 } from "../assets";
import { Button, SectionIntro } from "../components";
import { aboutInfo } from "../constants";
import styles, { layout } from "../style";
import { FiCheckCircle } from "react-icons/fi";
import { Link } from "react-router-dom";
const AboutCreatex = () => (
  <section
    className={`${styles.boxWidth} ${styles.padding} ${layout.sectionReverse} gap-16 md:gap-24 lg:gap-36`}
  >
    <div className={`${layout.sectionImg} ${layout.sectionImgReverse}`}>
      <img src={Image_1} alt="Image" className="w-full h-full object-contain" />
    </div>
    <div className={`${layout.sectionInfo}`}>
      <SectionIntro title="Who we are" heading="Why Createx?" />
      <div className="flex flex-col gap-3 mt-6">
        {aboutInfo.map(({ content }) => (
          <div
            key={content}
            className="flex justify-start items-start gap-4 w-full md:max-w-[450px]"
          >
            <div>
              <FiCheckCircle className="w-4 h-4 text-primary mt-[5px]" />
            </div>
            <p className="text-gray800 text-sm">{content}</p>
          </div>
        ))}
      </div>
      <Link to="/about-us" className="mt-6">
        <Button label="more about us" />
      </Link>
    </div>
  </section>
);
export default AboutCreatex;
