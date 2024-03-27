import React from "react";

const CoursesFilter = ({
  allCategories,
  selectedCategory,
  handleCategoryClick,
  courses, // Pass the courses array to the component
}) => (
  <div className="flex flex-wrap justify-start items-center gap-2">
    {allCategories.map((category) => {
      const categoryCourses =
        category === "All"
          ? courses
          : courses.filter((course) => course.category === category);

      return (
        <button
          type="button"
          key={category}
          className={`text-sm font-bold border-2 border-solid rounded py-2 px-3 transition-all duration-300 ease-in-out hover:text-primary hover:border-primary ${
            selectedCategory === category
              ? "text-primary border-primary"
              : "text-gray600 border-transparent"
          }`}
          onClick={() => handleCategoryClick(category)}
        >
          {category}
          <sup className="pl-1">{categoryCourses.length}</sup>
        </button>
      );
    })}
  </div>
);

export default CoursesFilter;
