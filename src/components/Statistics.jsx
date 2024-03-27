import React from "react";
import { statistics } from "../constants";
const Statistics = () => (
  <div className="w-full flex flex-col ss:flex-row flex-wrap justify-between mt-20 gap-6">
    {statistics.map(({ value, text }, index) => (
      <div key={text} className="flex flex-col md:flex-row items-center gap-3">
        <h3 className="text-gray900 text-2xl sm:text-4xl font-black">
          {value}
        </h3>

        <p className="text-base text-gray900 font-normal">{text}</p>
        {index < statistics.length - 1 && (
          <div className="w-2 h-2 bg-primary rounded-full ss:hidden lg:block lg:ml-10"></div>
        )}
      </div>
    ))}
  </div>
);
export default Statistics;
