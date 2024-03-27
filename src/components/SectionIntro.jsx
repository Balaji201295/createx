import React from "react";
const SectionIntro = ({ title, heading, styles }) => (
  <div className="flex flex-col gap-2">
    <p
      className={`${
        styles ? styles : "text-gray900"
      } text-base font-bold uppercase tracking-[1px]`}
    >
      {title}
    </p>
    <h2 className="text-gray900 text-4xl sm:text-5xl font-black">{heading}</h2>
  </div>
);
export default SectionIntro;
