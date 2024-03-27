import React from "react";
import { Link } from "react-router-dom";
const EventCards = ({ events, gridLayout }) => {
  const handleGoToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <section
      className={`w-full grid ${
        gridLayout === "list"
          ? "grid-cols-1"
          : "grid-cols-1 ss:grid-cols-2 md:grid-cols-3"
      }  gap-4`}
    >
      {events.map((item) => {
        const { id, date, month, time, title, category } = item;
        return (
          <div
            key={id}
            className={`w-full flex ${
              gridLayout === "list"
                ? "flex-col ss:flex-row justify-between items-start"
                : "flex-col"
            }  gap-4 md:gap-8 py-3 sm:py-4 md:py-6 px-4 sm:px-6 md:px-8 border border-solid border-gray300 rounded transition-all duration-300 ease-in-out hover:shadow-md`}
          >
            {gridLayout === "list" ? (
              <div className="flex items-center gap-4">
                <h3 className="text-2xl sm:text-3xl text-primary font-black">
                  {date < 10 ? `0${date}` : date}
                </h3>
                <div>
                  <h4 className="text-sm sm:text-base md:text-lg font-bold text-gray900">
                    {month}
                  </h4>
                  <p className="text-xs sm:text-sm font-normal text-gray700">
                    {time}
                  </p>
                </div>
              </div>
            ) : (
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
            )}

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
                className={`text-xs ${
                  gridLayout === "list"
                    ? "px-2 py-1 sm:py-2 sm:px-3"
                    : "w-full py-2"
                } sm:text-sm font-bold text-primary border-2 border-solid border-primary  rounded transition-all duration-300 ease-in-out hover:bg-primary hover:text-white`}
              >
                View more
              </button>
            </Link>
          </div>
        );
      })}
    </section>
  );
};
export default EventCards;
