import React from "react";
import styles from "../style";
import { Link } from "react-router-dom";
import { SectionIntro, Button } from "../components";
import useFetchEvents from "../hooks/useFetchEvents";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const SliderEvents = () => {
  const { events, loading, error } = useFetchEvents();
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
    slidesToShow: 3, // Default to 3 cards
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
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

  const handleGoToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className={`${styles.boxWidth} ${styles.padding} bg-gray200`}>
      <div className="flex flex-col sm:flex-row justify-between items-center gap-6 pb-24 sm:pb-8">
        <SectionIntro title="Check other courses" heading="You may also like" />
      </div>
      <Slider {...settings}>
        {events.map((item) => {
          const { id, date, month, time, title, category } = item;
          return (
            <div
              key={id}
              className="w-full flex flex-col gap-4 md:gap-8 py-3 sm:py-4 md:py-6 px-4 sm:px-6 md:px-8 border border-solid border-gray300 rounded transition-all duration-300 ease-in-out hover:shadow-md bg-white"
            >
              <div className="flex flex-col items-start gap-1">
                <div className="flex items-center gap-2">
                  <h3 className="text-lg md:text-xl text-primary font-black">
                    {date < 10 ? `0${date}` : date} &nbsp;{" "}
                    {month.length > 3 ? month.slice(0, 3) : month}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm font-normal text-gray700">
                  {time}
                </p>
              </div>

              <div className="flex-1 flex flex-col justify-center items-start">
                <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray900">
                  {title}
                </h3>
                <p className="text-xs sm:text-sm font-normal text-gray700">
                  {category}
                </p>
              </div>
              <Link to={`/events/${id}`} onClick={handleGoToTop}>
                <button
                  type="button"
                  className="text-xs w-full py-2 sm:text-sm font-bold text-primary border-2 border-solid border-primary  rounded transition-all duration-300 ease-in-out hover:bg-primary hover:text-white mt-12"
                >
                  View more
                </button>
              </Link>
            </div>
          );
        })}
      </Slider>
      <div className="flex  flex-col sm:flex-row justify-center items-center gap-6 mt-8">
        <p className="text-xl font-bold text-gray900">
          Do you want more courses?
        </p>
        <Link to="/events" onClick={handleGoToTop}>
          <Button label="explore all events" />
        </Link>
      </div>
    </section>
  );
};
export default SliderEvents;
