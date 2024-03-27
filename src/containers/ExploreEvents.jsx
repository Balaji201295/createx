import React from "react";
import { Button, SectionIntro } from "../components";
import { Link } from "react-router-dom";
import styles from "../style";
import useFetchEvents from "../hooks/useFetchEvents";
const ExploreEvents = () => {
  const { events, loading, error } = useFetchEvents();
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  // Shuffle the events array
  const shuffledEvents = events.sort(() => Math.random() - 0.5);

  // Get the first three items from the shuffled array
  const randomEvents = shuffledEvents.slice(0, 3);

  const handleGoToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <section className={`${styles.boxWidth} bg-primary/20`}>
      <div className={`${styles.padding}`}>
        <div className="flex justify-center items-center text-center">
          <SectionIntro title="Our Events" heading="Lectures & workshops" />
        </div>
        <div className="w-full grid grid-cols-1 gap-5 my-10">
          {randomEvents.map((item) => {
            const { id, date, month, time, title, category } = item;
            return (
              <div
                key={id}
                className="w-full max-w-[500px] ss:max-w-full mx-auto flex flex-col ss:flex-row justify-between sm:items-center p-4 sm:py-4 sm:px-6 md:py-6 md:px-8 bg-white transition-all duration-300 ease-in-out shadow hover:shadow-lg rounded gap-4 sm:gap-8"
              >
                <div className="flex justify-start items-center gap-4">
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
                    className={`text-xs w-full py-2 px-2 sm:py-2 sm:px-3  sm:text-sm font-bold text-primary border-2 border-solid border-primary  rounded transition-all duration-300 ease-in-out hover:bg-primary hover:text-white`}
                  >
                    View more
                  </button>
                </Link>
              </div>
            );
          })}
        </div>
        <div className="flex  flex-col sm:flex-row justify-center items-center gap-6">
          <p className="text-xl font-bold text-gray900">Do you want more?</p>
          <Link to="/events" onClick={handleGoToTop}>
            <Button label="explore all events" />
          </Link>
        </div>
      </div>
    </section>
  );
};
export default ExploreEvents;
