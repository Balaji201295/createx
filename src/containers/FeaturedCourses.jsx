import React from "react";
import styles from "../style";
import { SectionIntro, CourseCards } from "../components";
import { Link } from "react-router-dom";
import useFetchCourses from "../hooks/useFetchCourses";
const FeaturedCourses = () => {
  const { courses, loading, error } = useFetchCourses();
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const limitedCourses = courses.slice(0, 6);

  return (
    <section className={`${styles.boxWidth} ${styles.padding}`}>
      <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-6 mb-12">
        <SectionIntro title="Ready to learn?" heading="Featured Courses" />
        <Link to="/courses">
          <button
            type="button"
            className="text-base font-bold text-primary border-2 border-solid border-primary py-3 px-5 rounded w-full max-w-52 capitalize transition-all duration-300 ease-in-out hover:text-white hover:bg-primary"
          >
            view all courses
          </button>
        </Link>
      </div>
      <CourseCards courses={limitedCourses} />
    </section>
  );
};
export default FeaturedCourses;
