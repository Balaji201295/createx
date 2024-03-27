import React from "react";
import styles from "../style";
import { SectionIntro } from "../components";
import useFetchCourses from "../hooks/useFetchCourses";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
const MeetOurTeam = () => {
  const { courses, loading, error } = useFetchCourses();
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const getSocialIcon = (link) => {
    if (link.includes("facebook")) {
      return (
        <FaFacebook className="w-6 h-6 text-white/60 hover:text-white transition-all duration-300 ease-linear" />
      );
    } else if (link.includes("linkedin")) {
      return (
        <FaLinkedin className="w-6 h-6 text-white/60 hover:text-white transition-all duration-300 ease-linear" />
      );
    } else if (link.includes("twitter")) {
      return (
        <FaTwitter className="w-6 h-6 text-white/60 hover:text-white transition-all duration-300 ease-linear" />
      );
    } else {
      return null;
    }
  };
  return (
    <section className={`${styles.boxWidth} ${styles.padding}`}>
      <div className="w-full flex flex-col justify-center items-center text-center mb-12">
        <SectionIntro
          title="best tutors are all here"
          heading="Meet our team"
        />
      </div>
      <div className="grid grid-cols-1 ss:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
        {courses.slice(0, 8).map((item, index) => (
          <div
            key={index}
            className="flex-1 min-w-[250px] max-w-[320px] flex flex-col justify-center items-center text-center sm:gap-6 md:gap-8"
          >
            <div className="w-full bg-secondary rounded mb-4 overflow-hidden card__container group">
              <img
                src={item.curatorImg}
                alt={item.curatorName}
                className="w-full h-[320px] object-cover"
              />
              <div className="w-full flex justify-end items-center gap-3 absolute bottom-0 right-4 transition-all duration-500 ease-in-out translate-y-8 group-hover:-translate-y-4">
                {item.socialLinks &&
                  item.socialLinks.length > 0 &&
                  item.socialLinks.map((socialItem, socialIndex) => (
                    <a key={socialIndex} href={socialItem.link} target="_blank">
                      {getSocialIcon(socialItem.link)}
                    </a>
                  ))}
              </div>
            </div>
            <h3 className="text-xl text-gray-800 font-bold">
              {item.curatorName}
            </h3>
            <p className="text-base font-normal text-gray-700">
              {item.position}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
export default MeetOurTeam;
