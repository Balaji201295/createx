import React, { useState, useEffect } from "react";
import { Button } from "../components";
import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { FaFacebook, FaGoogle, FaLinkedin, FaTwitter } from "react-icons/fa";

const LoginModal = ({ onClose }) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [forgotPassword, setForgotPassword] = useState(false);

  useEffect(() => {
    document.body.classList.add("modal-open");

    return () => {
      document.body.classList.remove("modal-open");
    };
  }, []);

  const handleSignUpClick = () => {
    setIsSignUp(true);
    setForgotPassword(false); // Ensure "Forgot Password" mode is turned off when switching to sign-up form
  };

  const handleSignInClick = () => {
    setIsSignUp(false);
  };

  const toggleForgotPassword = () => {
    setForgotPassword(!forgotPassword);
    setIsSignUp(false); // Ensure sign-up mode is turned off when toggling "Forgot Password" form
  };

  return (
    <>
      <div className="modal-overlay"></div>
      <section className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-[90%] sm:max-w-[480px] mx-auto flex flex-col justify-center items-center gap-3 text-center bg-white rounded border border-solid border-gray300 shadow-md p-6 sm:p-8 md:p-10">
        <span
          className="absolute top-4 right-4 cursor-pointer"
          onClick={onClose}
        >
          <IoClose className="text-2xl text-gray900 hover:text-primary  transition-all duration-300 ease-in-out" />
        </span>
        <h2 className="text-2xl font-bold text-gray900">
          {isSignUp ? "Sign Up" : "Sign In"}
        </h2>
        <p className="text-sm text-gray700">
          {isSignUp
            ? "Create a new account by filling out the form below."
            : "Sign in to your account using email and password provided during registration."}
        </p>
        {forgotPassword ? (
          <form className="w-full flex flex-col gap-3">
            <div className="flex flex-col gap-2 text-left">
              <label htmlFor="email" className="text-sm text-gray800">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your registered email"
                className="w-full py-3 px-4 text-sm font-normal text-gray800 placeholder:text-gray700 border border-solid border-gray400 rounded"
                required
              />
            </div>
            <Button type="submit" label="Reset Password" />
          </form>
        ) : (
          <form className="w-full flex flex-col gap-3">
            {isSignUp && (
              <div className="flex flex-col gap-2 text-left">
                <label htmlFor="fullname" className="text-sm text-gray800">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullname"
                  id="fullname"
                  placeholder="Your full name"
                  className="w-full py-3 px-4 text-sm font-normal text-gray800 placeholder:text-gray700 border border-solid border-gray400 rounded"
                  required
                />
              </div>
            )}
            <div className="flex flex-col gap-2 text-left">
              <label htmlFor="email" className="text-sm text-gray800">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your working email"
                className="w-full py-3 px-4 text-sm font-normal text-gray800 placeholder:text-gray700 border border-solid border-gray400 rounded"
                required
              />
            </div>
            <div className="flex flex-col gap-2 text-left">
              <label htmlFor="password" className="text-sm text-gray800">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter your password"
                className="w-full py-3 px-4 text-sm font-normal text-gray800 placeholder:text-gray700 border border-solid border-gray400 rounded"
                required
              />
            </div>
            {!isSignUp && (
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                <label className="flex gap-2 justify-start items-center cursor-pointer">
                  <input
                    type="checkbox"
                    name="agreement"
                    id="agreement"
                    className="accent-primary"
                  />
                  <span className="text-sm font-normal text-gray800">
                    Keep me signed in
                  </span>
                </label>
                <Link
                  to=""
                  className="text-sm text-primary"
                  onClick={toggleForgotPassword}
                >
                  Forgot Password?
                </Link>
              </div>
            )}
            <Button type="submit" label={isSignUp ? "Sign Up" : "Sign In"} />
          </form>
        )}
        {!isSignUp && (
          <p className="text-sm text-gray800">
            Don't have an account?{" "}
            <button className="text-primary" onClick={handleSignUpClick}>
              Sign up
            </button>
          </p>
        )}
        {isSignUp && (
          <p className="text-sm text-gray800">
            Already have an account?{" "}
            <button className="text-primary" onClick={handleSignInClick}>
              Sign in
            </button>
          </p>
        )}
        <div className="bg-gray300 h-[1px] w-full"></div>
        <p className="text-sm text-gray800">Or sign in with</p>
        <div className="flex justify-center items-center gap-3">
          <a
            href=""
            className="text-base text-gray700 transition-all duration-300 ease-in-out hover:text-primary"
          >
            <FaFacebook />
          </a>
          <a
            href=""
            className="text-base text-gray700 transition-all duration-300 ease-in-out hover:text-primary"
          >
            <FaGoogle />
          </a>
          <a
            href=""
            className="text-base text-gray700 transition-all duration-300 ease-in-out hover:text-primary"
          >
            <FaLinkedin />
          </a>
          <a
            href=""
            className="text-base text-gray700 transition-all duration-300 ease-in-out hover:text-primary"
          >
            <FaTwitter />
          </a>
        </div>
      </section>
    </>
  );
};

export default LoginModal;
