import React from "react";
import { Image_13 } from "../assets";
import styles, { layout } from "../style";
import { Button } from "../components";
const Subscribe = () => (
  <section
    className={`bg-gray200 mt-24 flex justify-between items-center flex-col-reverse sm:flex-row gap-8 md:gap-0 ${styles.boxWidth} px-4 py-8 md:py-0`}
  >
    <div className={`${layout.sectionImg} ${layout.sectionImgReverse}`}>
      <img
        src={Image_13}
        alt="Image"
        className="w-[500px] h-full object-contain"
      />
    </div>
    <div className={`${layout.sectionInfo}`}>
      <h2 className="sm:text-2xl md:text-3xl text-gray900 font-black">
        Want to get the best articles weekly? Subscribe to our newsletter!
      </h2>
      <form className="w-full flex flex-col justify-start items-start mt-8 md:mt-12 gap-6">
        <div className="w-full flex flex-col sm:flex-row justify-start items-center gap-6">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your working email"
            className="py-3 px-4 bg-white rounded border border-solid border-gray400 text-base text-gray600 font-normal flex-1 w-full max-w-[420px] h-[52px]"
            required
          />
          <Button label="subscribe" type="submit" />
        </div>
        <div>
          <label className="flex items-start gap-2">
            <input type="checkbox" className="mt-[6px]" />
            <span>
              I agree to receive communications from Createx Online School
            </span>
          </label>
        </div>
      </form>
    </div>
  </section>
);
export default Subscribe;
