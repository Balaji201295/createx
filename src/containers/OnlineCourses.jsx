import React, { useState } from "react";
import styles from "../style";
import { Load_more } from "../assets";
import {
  CoursesFilter,
  SearchCourses,
  SectionIntro,
  CourseCards,
} from "../components";
import useFetchCourses from "../hooks/useFetchCourses";

const OnlineCourses = () => {
  const { courses, loading, error } = useFetchCourses();
  const [visibleCount, setVisibleCount] = useState(6);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchCourse, setSearchCourse] = useState("");

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  // Filter courses based on selected category
  const filteredCourses =
    selectedCategory === "All"
      ? courses
      : courses.filter((course) => course.category === selectedCategory);

  // Filter courses based on search term
  const searchedCourses =
    searchCourse.trim() === ""
      ? filteredCourses
      : filteredCourses.filter((course) =>
          course.title.toLowerCase().includes(searchCourse.toLowerCase())
        );

  const limitedCourses = searchedCourses.slice(0, visibleCount);

  // get categories
  const allCategories = [
    "All",
    ...new Set(courses.map((course) => course.category)),
  ];

  // selected category
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  // load more
  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 3);
  };

  return (
    <section className={`${styles.boxWidth} ${styles.paddingX} py-28`}>
      <div className="w-full flex flex-col justify-center items-center text-center">
        <SectionIntro
          title="Enjoy your studying!"
          heading="Our online courses"
        />
      </div>
      <div className="flex flex-col lg:flex-row justify-between items-center my-12 gap-8">
        <CoursesFilter
          courses={courses}
          allCategories={allCategories}
          selectedCategory={selectedCategory}
          handleCategoryClick={handleCategoryClick}
        />
        <SearchCourses
          searchCourse={searchCourse}
          setSearchCourse={setSearchCourse}
        />
      </div>
      {searchedCourses.length === 0 ? (
        <div className="text-center text-red-500 my-4">
          Your Searched course is not here
        </div>
      ) : (
        <CourseCards
          courses={limitedCourses}
          cardAlign="md:grid-cols-3 sm:grid-cols-2"
          cardStyles="flex-col max-w-[390px]"
        />
      )}

      {searchedCourses.length > visibleCount && (
        <div className="flex justify-center mt-4">
          <button
            className="flex justify-center items-center gap-2"
            onClick={handleLoadMore}
          >
            <img
              src={Load_more}
              alt="Load More"
              className="w-6 h-6 object-contain"
            />
            <span className="text-base font-bold text-gray800">Load More</span>
          </button>
        </div>
      )}
    </section>
  );
};

export default OnlineCourses;
