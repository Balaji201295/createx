import React from "react";
import { socialLinks } from "../constants";

const SocialMedia = ({ styles }) => {
  return (
    <div className="w-full flex flex-wrap justify-start items-center gap-5">
      {socialLinks.map(({ icon, url }, index) => {
        const IconImg = icon;
        return (
          <a
            key={index}
            href={url}
            target="_blank"
            className={`${
              styles ? styles : "text-white/60 hover:text-white"
            }  transition-all duration-300 ease-linear`}
          >
            <IconImg className="w-6 h-6" />
          </a>
        );
      })}
    </div>
  );
};

export default SocialMedia;
