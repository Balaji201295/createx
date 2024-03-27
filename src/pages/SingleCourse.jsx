import React from "react";
import {
  Discount,
  ExploreCourses,
  Hero,
  LearningCourses,
  Testimonial,
} from "../containers";
import styles from "../style";
import { useLoaderData } from "react-router-dom";
import { Accordion, Button, JoinCourse, SectionIntro } from "../components";
import { benefitsPoints } from "../constants";
import { FiCheckCircle } from "react-icons/fi";
import { Image_6, Image_7 } from "../assets";

import {
  FaRegStar,
  FaRegPlayCircle,
  FaUser,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

const SingleCourse = () => {
  const data = useLoaderData();

  const {
    curatorImg,
    curatorName,
    category,
    position,
    title,
    price,
    courseInfo,
    dates,
    learn,
    durations,
    rating,
    courseCount,
    studentsCount,
    curatorInfo,
    courseFaq,
  } = data;
  return (
    <>
      <Hero title={category} heading={title} />
      {/* about the course */}
      <section
        className={`${styles.boxWidth} ${styles.padding} w-full flex flex-col md:flex-row justify-center items-center gap-12`}
      >
        <article className="flex-1 flex flex-col justify-start items-start">
          <h2 className="text-4xl text-gray900 font-black">About the course</h2>
          <p className="text-sm text-gray800 my-8">{courseInfo}</p>
          <h3 className="text-2xl text-gray900 font-bold">You will learn:</h3>
          <ul className="list-none flex flex-col justify-start items-start gap-3 mt-8">
            {data.learn?.points?.map((point, index) => (
              <li key={index} className="flex items-start gap-2">
                <div>
                  <FiCheckCircle className="w-4 h-4 text-primary mt-[5px]" />
                </div>
                <span className="text-sm text-gray800">{point}</span>
              </li>
            ))}
          </ul>
        </article>
        <article className="flex-1 justify-center md:justify-end items-start">
          <div className="flex flex-col justify-start items-start gap-6 bg-white rounded shadow-md p-6 sm:py-10 sm:px-8 w-full max-w-[500px] md:ml-auto">
            {[
              {
                title: "dates",
                value: dates,
                text: "Metus turpis sit lorem lacus, in elit tellus lacus.",
              },
              {
                title: "Duration",
                value: durations,
                text: "Rhoncus pellentesque auctor auctor orci vulputate faucibus quis ut.",
              },
              {
                title: "price",
                value: `$${price} per month`,
                text: "Nulla sem adipiscing adipiscing felis fringilla. Adipiscing mauris quam ac elit tristique dis.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col justify-start items-start"
              >
                <h5 className="text-xs text-gray900 font-bold uppercase tracking-[1px]">
                  {item.title}
                </h5>
                <h4 className="text-lg sm:text-xl font-bold text-primary pt-1 pb-2">
                  {item.value}
                </h4>
                <p className={`${styles.paragraph} text-gray700`}>
                  {item.text}
                </p>
              </div>
            ))}
            <Button label="Join the course" styles="w-full" />
          </div>
        </article>
      </section>
      {/* curator */}
      <section
        className={`${styles.boxWidth} ${styles.padding} flex flex-col md:flex-row justify-center items-center md:items-start gap-12`}
      >
        <div className="flex-1 flex justify-center md:justify-start items-center">
          <img
            src={curatorImg}
            alt={curatorName}
            className="w-[400px] h-[500px] object-cover bg-secondary rounded"
          />
        </div>
        <div className="flex-1 w-full max-w-[600px] mx-auto flex flex-col justify-start items-start">
          <h5 className="text-sm font-bold text-gray900 uppercase tracking-[1px] pb-2">
            Course curator
          </h5>
          <h3 className="text-4xl font-black text-gray900 pb-3">
            {curatorName}
          </h3>
          <p className={`${styles.paragraph} text-gray700`}>
            {position} in IT Product Company
          </p>
          <div className="flex flex-col justify-start items-start gap-2 my-8">
            <p className="flex items-center gap-2">
              <FaRegStar className="w-4 h-4 text-primary" />
              <span className="text-sm font-bold text-gray800">
                {rating} rate
              </span>
            </p>
            <p className="flex items-center gap-2">
              <FaRegPlayCircle className="w-4 h-4 text-primary" />
              <span className="text-sm font-bold text-gray800">
                {courseCount} courses
              </span>
            </p>
            <p className="flex items-center gap-2">
              <FaUser className="w-4 h-4 text-primary" />
              <span className="text-sm font-bold text-gray800">
                {studentsCount} students
              </span>
            </p>
          </div>
          <p className={`${styles.paragraph} text-gray800`}>{curatorInfo}</p>
          <div className="flex justify-start items-center gap-4 mt-8">
            {data.socialLinks?.map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                className="text-xl text-gray700 hover:text-primary transition-all duration-300 ease-in-out"
              >
                {item.link.includes("facebook") && <FaFacebook />}
                {item.link.includes("twitter") && <FaTwitter />}
                {item.link.includes("linkedin") && <FaLinkedin />}
              </a>
            ))}
          </div>
        </div>
      </section>
      <LearningCourses />
      <Discount />
      {/* benefits */}
      <section
        className={`${styles.boxWidth} ${styles.padding} flex flex-col md:flex-row justify-center items-center md:items-start gap-6 sm:gap-12`}
      >
        <div className="flex-1">
          <SectionIntro
            title="For whom?"
            heading="Who will benefit from the course:"
          />
        </div>
        <ul className="list-none flex-1 flex flex-col justify-start items-start gap-4 mt-8">
          {benefitsPoints.map((item, index) => (
            <li key={index} className="flex items-start gap-4">
              <div>
                <FiCheckCircle className="w-4 h-4 text-primary mt-[5px]" />
              </div>
              <span className="text-sm text-gray800">{item.point}</span>
            </li>
          ))}
        </ul>
      </section>
      {/* accordion */}
      <section
        className={`${styles.boxWidth} ${styles.padding} flex flex-col md:flex-row justify-center items-center md:items-start gap-6 sm:gap-12`}
      >
        <div className="flex-1 flex flex-col gap-12">
          <SectionIntro title="Course program" heading="What will you learn" />
          <Accordion faqItems={courseFaq} />
        </div>
        <div className="flex-1 flex justify-center items-center">
          <img
            src={Image_7}
            alt="Image"
            className="w-[500px] h-full object-cover"
          />
        </div>
      </section>
      <Testimonial />
      {/* join the course */}
      <section
        className={`bg-gray200 ${styles.boxWidth} ${styles.padding} flex flex-col md:flex-row justify-center items-center md:items-start gap-6 sm:gap-12`}
      >
        <div className="flex-1 flex justify-center items-center">
          <img
            src={Image_6}
            alt="Image"
            className="w-[500px] h-full object-cover"
          />
        </div>
        <div className="flex-1 flex flex-col gap-10">
          <SectionIntro
            title="Leave a request now and get 20% off!"
            heading="Register for the course"
          />
          <JoinCourse styles="flex-col" inputStyle="w-full" />
        </div>
      </section>
      <ExploreCourses />
    </>
  );
};
export default SingleCourse;
