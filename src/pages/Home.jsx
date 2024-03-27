import React from "react";
import {
  AboutCreatex,
  Benefits,
  CTA,
  CreateXCertificate,
  ExploreEvents,
  FeaturedCourses,
  Header,
  OurTeam,
  Testimonial,
  ExploreBlogs,
} from "../containers";
const Home = () => (
  <>
    <Header isStatistics={true} />
    <AboutCreatex />
    <FeaturedCourses />
    <Benefits />
    <ExploreEvents />
    <CreateXCertificate />
    <OurTeam />
    <Testimonial />
    <ExploreBlogs />
    <CTA />
  </>
);
export default Home;
