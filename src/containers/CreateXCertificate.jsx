import React from "react";
import { Image_3, Logo_1, Logo_2, Logo_3 } from "../assets";
import { SectionIntro } from "../components";
import styles from "../style";
const CreateXCertificate = () => (
  <section
    className={`${styles.boxWidth} ${styles.padding} flex flex-col md:flex-row justify-center items-center md:items-start gap-10 md:gap-0`}
  >
    <div className="flex-1 flex flex-col justify-start items-start">
      <SectionIntro
        title="Createx Certificate"
        heading="Your expertise will be confirmed"
      />
      <p className={`${styles.paragraph} text-gray800 mt-10`}>
        We are accredited by international professional organizations and
        institutes:
      </p>
      <div className="flex flex-wrap justify-start items-center gap-4 sm:gap-6 mt-12">
        {[Logo_1, Logo_2, Logo_3].map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Logo ${index + 1}`}
            className="w-[120px] h-full object-contain"
          />
        ))}
      </div>
    </div>
    <div className="flex-[1.5] flex justify-center items-center">
      <img src={Image_3} alt="Image" className="w-full h-full object-contain" />
    </div>
  </section>
);
export default CreateXCertificate;
