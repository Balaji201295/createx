import React from "react";
import styles from "../style";
import { Accordion, SectionIntro, Button, JoinCourse } from "../components";
import { useLoaderData } from "react-router-dom";
import { Hero, SliderEvents } from "../containers";
import { FiCheckCircle } from "react-icons/fi";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import { Image_8, Image_9 } from "../assets";
const SingleEvent = () => {
  const data = useLoaderData();

  const {
    date,
    month,
    time,
    category,
    speakerImg,
    speakerName,
    designation,
    title,
    price,
    aboutEvent,
    curatorInfo,
    brands,
    socialLinks,
  } = data;
  return (
    <>
      <Hero title={category} heading={title} />
      {/* accordion */}
      <section
        className={`${styles.boxWidth} ${styles.padding} flex flex-col md:flex-row justify-center items-center md:items-start gap-6 sm:gap-12`}
      >
        <article className="flex-1 flex flex-col gap-12">
          <SectionIntro title="Course program" heading="What will you learn" />
          <Accordion faqItems={aboutEvent} />
        </article>
        <article className="flex-1 justify-center md:justify-end items-start">
          <div className="flex flex-col justify-start items-start gap-6 bg-white rounded shadow-md p-6 sm:py-10 sm:px-8 w-full max-w-[500px] md:ml-auto">
            {[
              {
                title: "time",
                value: `${month} ${date}, ${time}`,

                text: "Metus turpis sit lorem lacus, in elit tellus lacus.",
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
            <Button label="Join the event" styles="w-full" />
          </div>
        </article>
      </section>
      {/* speaker */}
      <section
        className={`${styles.boxWidth} ${styles.padding} flex flex-col md:flex-row justify-center items-center md:items-start gap-12`}
      >
        <div className="flex-1 flex justify-center md:justify-start items-center">
          <img
            src={speakerImg}
            alt={speakerName}
            className="w-[400px] h-[500px] object-cover bg-secondary rounded"
          />
        </div>
        <div className="flex-1 w-full max-w-[600px] mx-auto flex flex-col justify-start items-start">
          <h5 className="text-sm font-bold text-gray900 uppercase tracking-[1px] pb-2">
            Speaker
          </h5>
          <h3 className="text-4xl font-black text-gray900 pb-2">
            {speakerName}
          </h3>
          <p className={`${styles.paragraph} text-gray700`}>
            {designation} in IT Company
          </p>
          <p className={`${styles.paragraph} text-gray800 mt-6`}>
            {curatorInfo}
          </p>
          <div className="flex flex-wrap justify-start items-center">
            {data.brands?.map(({ imgUrl }, index) => (
              <div key={index} className="flex-1 min-w-[120px]">
                <img src={imgUrl} alt="Brand" />
              </div>
            ))}
          </div>
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
      {/* benefits */}
      <section
        className={`${styles.boxWidth} ${styles.padding} flex flex-col md:flex-row justify-center items-center md:items-start gap-12`}
      >
        <article className="flex-1 flex flex-col gap-12">
          <SectionIntro
            title="For whom?"
            heading="Who will benefit from the event:"
          />
        </article>
        <article className="flex-1 justify-center md:justify-end items-start">
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
      </section>
      {/* discount */}
      <section className={`${styles.boxWidth} ${styles.padding}`}>
        <div className="bg-primary/20 rounded p-6 sm:py-8 sm:px-10 flex flex-col md:flex-row gap-4 sm:gap-6">
          <div className="flex-1 flex justify-center items-center">
            <img
              src={Image_8}
              alt="Image"
              className="w-[300px] h-[230px] object-contain"
            />
          </div>
          <div className="flex-1 flex flex-col justify-start items-center">
            <h2 className="text-2xl sm:text-3xl text-gray900 font-black">
              Don’t want to miss the best events? Subscribe to our newsletter!
            </h2>
            <form className="w-full flex flex-col justify-start items-start mt-8 md:mt-12 gap-4 sm:gap-6">
              <div className="w-full flex flex-col sm:flex-row justify-start items-center gap-6">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your working email"
                  className="py-3 px-4 bg-white rounded border border-solid border-gray400 text-base text-gray600 font-normal flex-1 w-full max-w-[420px] h-[52px]"
                  required
                />
                <Button label="subscribe" type="submit" />
              </div>

              <label className="flex items-start gap-2">
                <input type="checkbox" className="mt-[6px]" />
                <span className="text-sm text-gray800">
                  I agree to receive communications from Createx Online School
                </span>
              </label>
            </form>
          </div>
        </div>
      </section>
      {/* join the course */}
      <section
        className={`${styles.boxWidth} ${styles.padding} flex flex-col md:flex-row justify-center items-center gap-6 sm:gap-12`}
      >
        <div className="flex-1 flex justify-center items-center">
          <img
            src={Image_9}
            alt="Image"
            className="w-[500px] h-full object-cover"
          />
        </div>
        <div className="flex-1 flex flex-col gap-10">
          <SectionIntro
            title="Don’t miss the event"
            heading="Leave a request"
          />
          <JoinCourse
            styles="flex-col"
            inputStyle="w-full"
            acknowledge="You will receive a link to the online lecture in an email after registration."
          />
        </div>
      </section>
      <SliderEvents />
    </>
  );
};
export default SingleEvent;
