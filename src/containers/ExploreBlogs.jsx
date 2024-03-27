import React from "react";
import styles from "../style";
import { Button } from "../components";
import { SectionIntro } from "../components";
import useFetchBlogs from "../hooks/useFetchBlogs";
import { Link } from "react-router-dom";
import { GrNotes } from "react-icons/gr";
import {
  FaMicrophone,
  FaRegPlayCircle,
  FaRegClock,
  FaRegCalendar,
} from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
const ExploreBlogs = () => {
  const { blogs, loading, error } = useFetchBlogs();
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  // Sort blogs by date in descending order

  const sortedBlogs = blogs
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3);

  const handleGoToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <section className={`${styles.boxWidth} ${styles.padding}`}>
      <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
        <SectionIntro title="Our blogs" heading="Latest posts" />
        <Link to="/blogs" onClick={handleGoToTop}>
          <Button label="go to blog" />
        </Link>
      </div>
      <div className="grid grid-cols-1 ss:grid-cols-2 md:grid-cols-3 gap-6 my-10">
        {sortedBlogs.map((blog) => {
          const { id, type, img, category, date, duration, title, content } =
            blog;
          return (
            <div key={id}>
              <div className="relative z-[3]">
                <img
                  src={img}
                  alt={title}
                  loading="lazy"
                  className="w-full h-[260px] object-cover rounded"
                />
                <div className="absolute z-[5] top-2 left-2 flex justify-start items-center gap-1 text-gray800 bg-white rounded px-2 py-1">
                  {type === "Podcast" ? (
                    <FaMicrophone className="text-[16px]" />
                  ) : type === "Article" ? (
                    <GrNotes className="text-[16px]" />
                  ) : type === "Video" ? (
                    <FaRegPlayCircle className="text-[16px]" />
                  ) : (
                    ""
                  )}
                  <p className="text-sm">{type}</p>
                </div>
                <div className="flex flex-col justify-start items-start gap-2">
                  <div className="flex flex-wrap justify-start items-center gap-2 text-sm font-normal text-gray700 py-2">
                    <p>{category}</p>
                    <div className="w-[1px] h-[14px] rounded bg-gray700 mx-1"></div>
                    <p className="flex items-center gap-1">
                      <FaRegCalendar className="text-[14px]" />
                      {""}
                      {date}
                    </p>
                    <div className="w-[1px] h-[14px] rounded bg-gray700 mx-1"></div>
                    <p className="flex items-center gap-1">
                      <FaRegClock className="text-[14px]" />
                      {""}
                      {duration}
                    </p>
                  </div>
                  <h3 className="text-base font-black text-gray900">{title}</h3>
                  {content.slice(0, 1).map((item, index) => (
                    <p key={index} className="text-sm text-gray800">
                      {item.length > 100 ? `${item.slice(0, 100)}...` : item}
                    </p>
                  ))}
                  <Link
                    to={`/blogs/${id}`}
                    className="flex justify-start items-center gap-1"
                    onClick={handleGoToTop}
                  >
                    <p>
                      {type === "Podcast"
                        ? "Listen"
                        : type === "Article"
                        ? "Read"
                        : type === "Video"
                        ? "Watch"
                        : ""}
                    </p>
                    <FaArrowRightLong className="text-[14px] text-primary mt-[3px]" />
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default ExploreBlogs;
