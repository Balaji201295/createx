import React, { useState, useEffect } from "react";
import styles from "../style";
import {
  SectionIntro,
  EventFilter,
  EventPagination,
  EventCards,
} from "../components";
import useFetchEvents from "../hooks/useFetchEvents";

const OurEvents = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedOption, setSelectedOption] = useState("option1");
  const [eventsPerPage, setEventsPerPage] = useState(9);
  const [searchCourse, setSearchCourse] = useState("");
  const [gridLayout, setGridLayout] = useState("list");
  const { events, loading, error } = useFetchEvents();

  useEffect(() => {
    setCurrentPage(1); // Reset current page when category changes
  }, [selectedCategory]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected + 1);
  };

  const allCategories = [
    "All",
    ...new Set(events.map((item) => item.category)),
  ];

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const getSortedEvents = () => {
    // Filter events based on selected category
    const filteredEvents =
      selectedCategory === "All"
        ? events
        : events.filter((event) => event.category === selectedCategory);

    // Filter events based on search input
    const searchedEvents = filteredEvents.filter((event) =>
      event.title.toLowerCase().includes(searchCourse.toLowerCase())
    );

    // Sort filtered events based on selected option
    switch (selectedOption) {
      case "option1": // Recently Added (Latest Date)
        return searchedEvents.slice().sort((a, b) => {
          const dateA = new Date(`${a.month} ${a.date}`);
          const dateB = new Date(`${b.month} ${b.date}`);
          return dateB - dateA;
        });
      case "option2": // Oldest (Last Date)
        return searchedEvents.slice().sort((a, b) => {
          const dateA = new Date(`${a.month} ${a.date}`);
          const dateB = new Date(`${b.month} ${b.date}`);
          return dateA - dateB;
        });
      case "option3": // Sort randomly by generating random numbers
        return searchedEvents.slice().sort(() => Math.random() - 0.5);
      default:
        return searchedEvents;
    }
  };

  const sortedEvents = getSortedEvents();
  const totalPages = Math.ceil(sortedEvents.length / eventsPerPage);

  const indexOfLastEvents = currentPage * eventsPerPage;
  const indexOfFirstEvents = indexOfLastEvents - eventsPerPage;
  const currentEvents = sortedEvents.slice(
    indexOfFirstEvents,
    indexOfLastEvents
  );

  // events per page
  const handleEventsPerPageChange = (e) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value > 0) {
      setEventsPerPage(value);
    }
  };

  return (
    <section className={`${styles.boxWidth} ${styles.paddingX} py-28`}>
      <div className="w-full flex flex-col justify-center items-center text-center my-16">
        <SectionIntro
          title="Our events"
          heading="Lectures, workshops & master-classes"
        />
      </div>
      <div className="w-full flex flex-col justify-center items-center gap-12">
        <EventFilter
          allCategories={allCategories}
          selectedCategory={selectedCategory}
          handleCategoryClick={handleCategoryClick}
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
          eventsPerPage={eventsPerPage}
          handleEventsPerPageChange={handleEventsPerPageChange}
          searchCourse={searchCourse}
          setSearchCourse={setSearchCourse}
          gridLayout={gridLayout}
          setGridLayout={setGridLayout}
        />
        {currentEvents.length === 0 && (
          <div className="text-center text-primary my-4">
            Your searched course is not here
          </div>
        )}
        <EventCards events={currentEvents} gridLayout={gridLayout} />
        <EventPagination
          totalPages={totalPages}
          onPageChange={handlePageChange}
          currentPage={currentPage}
        />
      </div>
    </section>
  );
};

export default OurEvents;
