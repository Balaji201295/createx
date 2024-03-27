import React from "react";
import { Footer_Logo } from "../assets";
import { socialLinks, footerLinks } from "../constants";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import styles from "../style";
import { Link, NavLink } from "react-router-dom";
import SocialMedia from "../components/SocialMedia";

const FooterLinkItem = ({ item }) => (
  <li className={`${styles.paragraph} text-white/60 capitalize mt-4`}>
    <NavLink to={item.path} onClick={() => handleNavLink(path)}>
      {item.link}
    </NavLink>
  </li>
);

const FooterLink = ({ footerLink }) => (
  <div className="flex-1 flex flex-col justify-start items-start min-w-32">
    <h3 className="text-base uppercase text-white tracking-[1px] font-bold">
      {footerLink.title}
    </h3>
    <ul>
      {footerLink.links.map((item, index) => (
        <FooterLinkItem key={index} item={item} />
      ))}
    </ul>
  </div>
);

const ContactInfo = ({ icon, link, text }) => (
  <a href={link} className="text-white/60 flex items-center gap-2 mb-4">
    {icon}
    <span>{text}</span>
  </a>
);

const handleNavLink = (path) => {
  setToggleOpen(false);
  navigate(path);
  window.scrollTo(0, 0);
};

const Footer = () => (
  <footer className={`${styles.boxWidth} ${styles.padding} bg-gray900`}>
    <div className="w-full flex flex-col md:flex-row justify-center items-start gap-12 md:gap-4">
      <div className="flex-[1.25] flex flex-col justify-start items-start gap-5 mr-12">
        <img
          src={Footer_Logo}
          alt="Logo"
          className="w-[130px] h-[22px] object-contain"
        />
        <p className="text-white/65 text-xs w-full lg:max-w-72">
          Createx Online School is a leader in online studying. We have lots of
          courses and programs from the main market experts. We provide relevant
          approaches to online learning, internships and employment in the
          largest companies in the country.
        </p>
        <SocialMedia />
      </div>
      <div className="w-full flex-[1.5] flex justify-start items-start">
        {footerLinks.map((footerLink) => (
          <FooterLink key={footerLink.title} footerLink={footerLink} />
        ))}
      </div>
      <div className="flex-1 flex flex-col">
        <h3 className="text-base uppercase text-white tracking-[1px] font-bold mb-4">
          CONTACT US
        </h3>
        <ContactInfo
          icon={<FaPhone />}
          link="tel:(405) 555-0128"
          text="(405) 555-0128"
        />
        <ContactInfo
          icon={<FaEnvelope />}
          link="mailto:hello@createx.com"
          text="hello@createx.com"
        />
      </div>
      <div className="flex-[1.25] flex flex-col justify-end items-start gap-5">
        <h3 className="text-base uppercase text-white tracking-[1px] font-bold">
          SIGN UP TO OUR NEWSLETTER
        </h3>
        <form className="w-full max-w-[400px] flex justify-start items-center bg-white/10 rounded border border-solid border-white/10">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email Address"
            className="flex-1 py-[10px] px-3 bg-transparent text-sm text-white"
          />
          <button>
            <FaArrowRightLong className="text-white w-4 h-4 mr-4" />
          </button>
        </form>
        <p className="text-white/60 text-xs">
          <span className="text-primary">*</span>Subscribe to our newsletter to
          receive communications and early updates from Createx SEO Agency.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
