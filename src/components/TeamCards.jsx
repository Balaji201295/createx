import React from "react";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TeamCards = ({ courses }) => {
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
    slidesToShow: 4, // Default to 3 cards
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1199,
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

  return (
    <Slider {...settings} className="my-12">
      {courses.map((item, index) => (
        <div key={index} className="px-4 pb-6">
          <div className="w-full flex flex-wrap justify-center items-center gap-8">
            <div className="flex-1 min-w-[250px] max-w-[285px] flex flex-col justify-center items-center">
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
                      <a
                        key={socialIndex}
                        href={socialItem.link}
                        target="_blank"
                      >
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
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default TeamCards;
