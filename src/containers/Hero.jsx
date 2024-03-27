import React from "react";
import { SectionIntro } from "../components";
import styles from "../style";
const Hero = ({ title, heading }) => (
  <section
    className={`${styles.boxWidth} ${styles.padding} bg-primary/20 flex flex-col justify-center items-center gap-4 text-center min-h-[468px]`}
  >
    <SectionIntro title={title} heading={heading} styles="text-primary" />
  </section>
);
export default Hero;
