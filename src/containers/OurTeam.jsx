import React from "react";
import styles from "../style";
import { SectionIntro, TeamCards } from "../components";
import useFetchCourses from "../hooks/useFetchCourses";
const OurTeam = () => {
  const { courses, loading, error } = useFetchCourses();
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const teamCourses = courses.slice(0, 4);
  return (
    <section className={`${styles.boxWidth} ${styles.padding} bg-gray200`}>
      <div className="flex flex-col sm:flex-row justify-between items-center gap-6 mb-12">
        <SectionIntro
          title="Best tutors are all here"
          heading="Meet our team"
        />
      </div>
      <TeamCards courses={teamCourses} />
    </section>
  );
};
export default OurTeam;
