import React from "react";
import styles from "../style";
import { Link } from "react-router-dom";
import { Circles } from "../assets";
import { SectionIntro, Button } from "../components";
import useFetchCourses from "../hooks/useFetchCourses";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const ExploreCourses = () => {
  const { courses, loading, error } = useFetchCourses();
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const CustomPrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          left: "auto",
          right: "5rem",
          top: "-3rem",
          zIndex: 1,
        }}
        onClick={onClick}
      />
    );
  };

  const CustomNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, top: "-3rem", right: "2rem", zIndex: 1 }}
        onClick={onClick}
      />
    );
  };

  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2, // Default to 3 cards
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    customPaging: function (i) {
      return <div style={{ display: "none" }} />;
    },
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  const getColorForCategory = (category) => {
    switch (category) {
      case "Marketing":
        return "bg-[#03CEA4]";
      case "Management":
        return "bg-[#5A87FC]";
      case "HR & Recruiting":
        return "bg-[#F89828]";
      case "Design":
        return "bg-[#F52F6E]";
      case "Development":
        return "bg-[#c0ce00]";
      default:
        return "bg-black";
    }
  };
  const handleGoToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className={`${styles.boxWidth} ${styles.padding} bg-gray200`}>
      <div className="flex flex-col sm:flex-row justify-between items-center gap-6 mb-12">
        <SectionIntro title="Check other courses" heading="You may also like" />
      </div>
      <Slider {...settings} className="sliderCourse mt-28 sm:mt-12">
        {courses.map((blog, index) => {
          const { id, curatorImg, curatorName, category, title, price } = blog;
          return (
            <Link
              key={index}
              to={`/courses/${id}`}
              onClick={handleGoToTop}
              className="exploreCourse"
            >
              <div className="flex-1 w-full bg-[#FFCF2D] relative z-[5] sm:w-[214px] h-[214px]">
                <img
                  src={curatorImg}
                  alt={curatorName}
                  className="w-[214px]  h-[214px] object-cover"
                />
                <div className="absolute inset-0 -z-[5]">
                  <img
                    src={Circles}
                    alt="Circles"
                    className="w-full h-full object-cover opacity-25"
                  />
                </div>
              </div>
              <div className="flex-[1.5] flex flex-col justify-start items-start gap-4 p-4 md:p-6">
                <h5
                  className={`text-sm font-bold text-white px-2 max-w-max rounded ${getColorForCategory(
                    category
                  )}`}
                >
                  {category}
                </h5>
                <h3 className="text-lg text-gray900 font-bold">{title}</h3>
                <div className="flex justify-start items-center">
                  <h5 className="text-base font-bold text-primary">${price}</h5>
                  <div className="w-[2px] h-4 bg-[#787A80] rounded mx-2"></div>
                  <p className="text-base font-normal text-gray700">
                    by {curatorName}
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
      </Slider>
      <div className="flex  flex-col sm:flex-row justify-center items-center gap-6 mt-8">
        <p className="text-xl font-bold text-gray900">
          Do you want more courses?
        </p>
        <Link to="/courses" onClick={handleGoToTop}>
          <Button label="view all courses" />
        </Link>
      </div>
    </section>
  );
};
export default ExploreCourses;
