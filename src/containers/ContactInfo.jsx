import React from "react";
import styles from "../style";
import { SectionIntro, SocialMedia } from "../components";
import { contactDetails } from "../constants";
const ContactInfo = () => (
  <section
    className={`${styles.boxWidth} ${styles.paddingX} mt-36 mb-24 w-full flex flex-col sm:flex-row gap-6 justify-center items-center`}
  >
    <div className="flex-1 flex flex-col justify-start items-start gap-10">
      <div>
        <SectionIntro title="Contact info" heading="Get in touch" />
      </div>
      <div className="flex flex-col justify-start items-start gap-6">
        {contactDetails.map(({ icon, title, text }, index) => {
          const IconImg = icon;
          return (
            <div key={index} className="flex justify-start items-start gap-3">
              <IconImg className="w-6 h-6 text-primary" />
              <div>
                <h5 className="text-gray700 text-sm font-bold">{title}</h5>
                <p className="text-base font-normal text-gray900">{text}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex flex-col gap-4 justify-start items-start">
        <h3 className="text-base text-gray900 font-bold">Follow us:</h3>
        <SocialMedia styles="text-gray700 hover:text-primary" />
      </div>
    </div>
    <div className="flex-1 w-full">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3130635.3655780707!2d-79.47476437612784!3d39.980270085035876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c0fb959e00409f%3A0x2cd27b07f83f6d8d!2sNew%20Jersey%2C%20USA!5e0!3m2!1sen!2sin!4v1710465380443!5m2!1sen!2sin"
        className="w-full h-[425px]"
        loading="lazy"
      ></iframe>
    </div>
  </section>
);
export default ContactInfo;
