import React, { useState } from "react";
import styles from "../style";
import { TrendingArticles } from "../components";
import { useLoaderData } from "react-router-dom";
import { SliderBlogs, Subscribe } from "../containers";
import { Braces } from "../assets";
import { FiCheckCircle } from "react-icons/fi";
import {
  FaRegClock,
  FaRegCalendar,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import { GrNotes } from "react-icons/gr";
import { SearchBlog } from "../components";

const SingleBlog = () => {
  const [searchTitle, setSearchTitle] = useState("");
  const data = useLoaderData();
  const {
    type,
    category,
    date,
    duration,
    img,
    title,
    subtitle,

    curatorImg,
    curatorName,
    position,
    quotes,
    tags,
  } = data;
  return (
    <>
      <section
        className={`${styles.boxWidth} ${styles.paddingX} flex flex-col sm:flex-row justify-start items-start gap-12 py-28`}
      >
        <article className="flex-1 flex-col justify-start items-start">
          {/* blog type and category */}
          <div className="flex justify-start items-center">
            <p className="flex items-center text-sm text-gray800">
              <GrNotes className="text-[14px] mr-2" />
              {type}
            </p>
            <div className="w-[1px] h-[14px] rounded bg-gray700 mx-2"></div>
            <p className="text-sm font-bold text-primary">{category}</p>
          </div>
          {/* blog title */}
          <h1 className="text-3xl sm:text-4xl font-black text-gray900 pt-2 pb-4">
            {title}
          </h1>
          {/* blog details */}
          <div className="flex flex-col  md:flex-row justify-between items-start md:items-center mb-6">
            <div className="flex flex-col ss:flex-row justify-start items-center gap-5">
              <p className="flex items-center text-sm text-gray800">
                <FaRegCalendar className="text-[14px] mr-2" />
                {date}
              </p>
              <p className="flex items-center text-sm text-gray800">
                <FaRegClock className="text-[14px] mr-2" />
                {duration} read
              </p>
            </div>
            <div className="flex justify-start items-center gap-4 mt-8">
              <p className="text-sm font-bold text-gray800">Share:</p>
              {data.socialLinks?.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  className="text-xl text-gray700 hover:text-primary transition-all duration-300 ease-in-out"
                >
                  {item.link.includes("facebook") && <FaFacebook />}
                  {item.link.includes("instagram") && <FaInstagram />}
                  {item.link.includes("twitter") && <FaTwitter />}
                  {item.link.includes("linkedin") && <FaLinkedin />}
                </a>
              ))}
            </div>
          </div>
          {/* image */}
          <img
            src={img}
            alt={title}
            className=" w-full h-[360px] object-cover"
          />
          {/* subtitle */}
          <p className="text-lg font-bold text-gray900 mt-8 mb-6">{subtitle}</p>
          {/* content */}
          {data.content?.map((item, index) => (
            <p key={index} className="text-sm font-normal text-gray800 pb-4">
              {item}
            </p>
          ))}
          {/* quotes */}
          <div className="flex items-start gap-6">
            <img src={Braces} alt="Quotes" className="w-[28px] h-[20px]" />
            <p className="text-lg font-bold text-gray900">{quotes}</p>
          </div>
          {/* points */}
          <div className="flex flex-col items-start justify-start mt-10">
            <p className="text-sm text-gray800">
              Mauris amet arcu nisl vel dictum tellus. Sed rhoncus, ut sed id ut
              erat mattis. Vitae mus blandit in neque amet non fringilla
              blandit:
            </p>
            <ul className="list-none flex flex-col justify-start items-start gap-3 mt-4">
              {data.points?.map((point, index) => (
                <li key={index} className="flex items-start gap-2">
                  <div>
                    <FiCheckCircle className="w-4 h-4 text-primary mt-[5px]" />
                  </div>
                  <span className="text-sm text-gray800">{point}</span>
                </li>
              ))}
            </ul>
          </div>
          {/* tags */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 mt-12">
            <div className="flex justify-start items-center gap-5">
              <p className="text-sm font-bold text-gray800">Tags:</p>
              <ul className="list-none flex items-center justify-start gap-3">
                {data.tags.slice(0, 2)?.map((tag, index) => (
                  <li
                    key={index}
                    className="text-xs font-bold text-gray700 py-[5px] px-[10px] rounded border border-solid border-gray400"
                  >
                    #{tag}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-start items-center gap-4 mt-8">
              <p className="text-sm font-bold text-gray800">Share:</p>
              {data.socialLinks?.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  className="text-xl text-gray700 hover:text-primary transition-all duration-300 ease-in-out"
                >
                  {item.link.includes("facebook") && <FaFacebook />}
                  {item.link.includes("instagram") && <FaInstagram />}
                  {item.link.includes("twitter") && <FaTwitter />}
                  {item.link.includes("linkedin") && <FaLinkedin />}
                </a>
              ))}
            </div>
          </div>
        </article>
        <aside className="flex-[0.4] w-full">
          <SearchBlog setSearchTitle={setSearchTitle} styles="max-w-[400px]" />
          {/* author */}
          <div className="w-full flex flex-col justify-start items-start mt-12">
            <h3 className="text-base font-bold text-gray900 mb-6">AUTHOR</h3>
            <div className="flex justify-start gap-4">
              <div className="w-[100px] h-[100px] bg-secondary rounded">
                <img
                  src={curatorImg}
                  alt={curatorName}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <h4 className="text-base text-gray800 font-bold">
                  {curatorName}
                </h4>
                <p className="text-sm text-gray700">{position}</p>
                <div className="flex justify-start items-center gap-4 mt-auto">
                  {data.socialLinks?.map((item, index) => (
                    <a
                      key={index}
                      href={item.link}
                      target="_blank"
                      className="text-xl text-gray700 hover:text-primary transition-all duration-300 ease-in-out"
                    >
                      {item.link.includes("facebook") && <FaFacebook />}
                      {item.link.includes("instagram") && <FaInstagram />}
                      {item.link.includes("twitter") && <FaTwitter />}
                      {item.link.includes("linkedin") && <FaLinkedin />}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* trending articles */}
          <TrendingArticles searchTitle={searchTitle} />
        </aside>
      </section>
      <Subscribe />
      <SliderBlogs />
    </>
  );
};
export default SingleBlog;
