import React from "react";
import styles from "../style";
import { Button, SectionIntro } from "../components";
import { Image_4, Image_5 } from "../assets";
const CTA = () => (
  <section
    className={`${styles.boxWidth} ${styles.paddingX} py-40 bg-primary/20 relative z-[1]`}
  >
    <div className="absolute bottom-0 left-0 z-[5]">
      <img
        src={Image_4}
        alt="Image"
        className="w-[50%] md:w-[240px] object-contain mr-auto"
      />
    </div>
    <div className="absolute bottom-0 right-0 z-[4]">
      <img
        src={Image_5}
        alt="Image"
        className="w-[50%] md:w-[240px] object-contain ml-auto"
      />
    </div>
    <div className="w-full flex flex-col justify-center items-center text-center max-w-[800px] mx-auto">
      <SectionIntro
        title="Don’t miss anything"
        heading="Subscribe to the Createx School announcements"
      />
      <form className="w-full max-w-[600px] flex flex-col ss:flex-row justify-center items-center gap-6 mt-16">
        <input
          type="email"
          name="email"
          id="email"
          className="w-full max-w-[400px] bg-white rounded border border-solid border-gray600 h-[52px] py-3 px-4 text-base font-normal text-gray600"
          placeholder="Your working email"
        />
        <Button type="submit" label="Subscribe" />
      </form>
    </div>
  </section>
);
export default CTA;
