import React from "react";
import { Image_10 } from "../assets";
import { Button, SectionIntro } from "../components";
import {
  Achievements,
  CTA,
  Companies,
  CoreValues,
  ExploreBlogs,
  MeetOurTeam,
  StudyingProcess,
  StudyingPrograms,
  Testimonial,
} from "../containers";
import styles, { layout } from "../style";
const AboutUs = () => (
  <>
    {/* about header */}
    <div
      className={`${styles.boxWidth} ${styles.paddingX} pt-32 pb-24 flex flex-col md:flex-row justify-between items-center gap-12 md:gap-0`}
    >
      <div className={`${layout.sectionInfo} md:flex-[1.5] gap-6`}>
        <SectionIntro title="About us" heading="Createx Online School" />
        <h1 className="text-base sm:text-[20px] font-bold sm:leading-[30px] text-gray900 w-full max-w-[600px]">
          Createx Online School is a leader in online studying. We have lots
          of courses and programs from the main market experts.
        </h1>
        <p className={`{styles.paragraph} text-gray800 w-full max-w-[600px]`}>
          We provide relevant approaches to online learning, internships and
          employment in the largest companies in the country. Our educational
          programs help you get a new specialty from scratch. During your
          studies, we will help you find a job. Check the courses and online
          events that we organize.
        </p>
        <div className="w-full flex flex-col ss:flex-row justify-start items-center mt-8 gap-6">
          <button
            type="button"
            className="text-base font-bold text-primary border-2 border-solid border-primary py-3 px-5 rounded w-full max-w-48"
          >
            Explore events
          </button>
          <Button label="Browse courses" styles="w-full max-w-48" />
        </div>
      </div>
      <div className={`${layout.sectionImg}`}>
        <img
          src={Image_10}
          alt="Image"
          className="w-full h-full object-contain"
        />
      </div>
    </div>
    <Achievements />
    <CoreValues />
    <StudyingPrograms />
    <StudyingProcess />
    <MeetOurTeam />
    <Testimonial />
    <Companies />
    <ExploreBlogs />
    <CTA />
  </>
);
export default AboutUs;
