import React from "react";
import styles from "../style";
import { FaRegHeart } from "react-icons/fa6";
const Copyright = () => {
  const handleGoToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div
      className={`${styles.boxWidth} ${styles.paddingX} w-full flex flex-col sm:flex-row gap-4 justify-center sm:justify-between items-center bg-[#292c37] text-white/60 py-5`}
    >
      <p className="text-xs">
        <span className="text-primary">&copy;</span>&nbsp;All rights reserved.
        <span>
          Made with
          <FaRegHeart className="text-primary w-3 h- mx-1 inline-flex" /> by
          Createx Studio.
        </span>
      </p>
      <p
        className="text-xs font-bold cursor-pointer text-white/60 uppercase"
        onClick={handleGoToTop}
      >
        Go To Top
      </p>
    </div>
  );
};
export default Copyright;
