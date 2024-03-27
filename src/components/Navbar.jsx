import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Button } from "../components";
import { Logo, Logo_New } from "../assets";
import { navItems } from "../constants";
import styles from "../style";
import { FaRegUser, FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import LoginModal from "../modal/LoginModal";
const Navbar = () => {
  const [toggleOpen, setToggleOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrolled = scrollTop > 60; // values adjusted
      setIsScrolled(scrolled);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavLink = (path) => {
    setToggleOpen(false);
    navigate(path);
    window.scrollTo(0, 0);
  };

  const renderLinks = (path, link) => (
    <NavLink
      to={path}
      className={({ isActive }) =>
        isActive
          ? !isScrolled
            ? "text-primary"
            : "underline text-white/90 underline-offset-8"
          : isScrolled
          ? "text-white"
          : "text-gray800"
      }
      onClick={() => handleNavLink(path)}
    >
      {link}
    </NavLink>
  );
  const mobileRenderLinks = (path, link) => (
    <NavLink to={path} onClick={() => handleNavLink(path)}>
      {link}
    </NavLink>
  );

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <nav
      className={`${styles.boxWidth} ${
        styles.paddingX
      } w-full flex justify-between items-center fixed top-0 left-0 right-0 z-10 transition-all duration-500 ease-in-out 
      ${isScrolled ? "py-4 shadow-lg bg-primary" : "py-6 bg-transparent"}`}
    >
      <a href="/" className="flex justify-start items-center mr-12">
        <img
          src={isScrolled ? Logo_New : Logo}
          alt="Logo"
          className="w-[130px] h-[22px] object-contain"
        />
      </a>
      <ul className="md:flex hidden flex-1 justify-start items-center list-none gap-8">
        {navItems.map(({ path, link }) => (
          <li
            key={link}
            className={`text-base font-bold capitalize transition-all duration-300 ease-linear`}
          >
            {renderLinks(path, link)}
          </li>
        ))}
      </ul>
      <div className="md:flex hidden justify-end items-center gap-6">
        <Button label="Get consultation" isScrolled={isScrolled} />
        <button
          type="button"
          className={`text-base  font-bold font-lato flex justify-start items-center gap-2 ${
            isScrolled ? "text-white" : "text-gray800"
          }`}
          onClick={handleOpenModal}
        >
          <FaRegUser />
          <span>Log in / Register</span>
        </button>
      </div>
      {/* responsive navbar */}
      <div className="md:hidden block">
        <FaBars
          fontSize={24}
          className={`cursor-pointer ${
            isScrolled ? "text-white" : "text-primary"
          }`}
          onClick={() => setToggleOpen((prev) => !prev)}
        />
        {toggleOpen && (
          <div className="flex flex-col justify-center items-center fixed top-0 left-0 w-full min-h-screen bg-primary transition-all slide-bottom z-30">
            <IoClose
              fontSize={24}
              className="text-white absolute top-5 right-5 sm:right-10 cursor-pointer"
              onClick={() => setToggleOpen((prev) => !prev)}
            />
            <ul>
              {navItems.map(({ path, link }) => (
                <li
                  key={link}
                  className={`sm:text-2xl font-bold m-8 text-center cursor-pointer uppercase transition-all duration-300 ease-in-out text-white `}
                >
                  {mobileRenderLinks(path, link)}
                </li>
              ))}
            </ul>
            <div className="md:hidden flex flex-col justify-end items-center gap-6">
              <Button label="Get consultation" toggleOpen={toggleOpen} />
              <button
                type="button"
                className={`text-base font-bold font-lato flex justify-start items-center gap-2 text-white`}
              >
                <FaRegUser />
                <span>Log in / Register</span>
              </button>
            </div>
          </div>
        )}
      </div>
      {/* login modal */}
      {showModal && (
        <LoginModal onClose={handleCloseModal} isOpen={handleOpenModal} />
      )}
    </nav>
  );
};
export default Navbar;
