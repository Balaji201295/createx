import React from "react";
const Button = ({ type, label, isScrolled, styles, toggleOpen }) => (
  <button
    type={type ? type : "button"}
    className={`text-base font-lato font-bold h-[52px] tracking-[0.5px] px-5 py-3 border-2 border-solid rounded transition-all duration-300 ease-in-out border-primary capitalize ${styles} ${
      isScrolled || toggleOpen
        ? "bg-white text-primary"
        : "bg-primary text-white hover:text-primary hover:bg-transparent"
    } `}
  >
    {label}
  </button>
);
export default Button;
