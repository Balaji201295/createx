import React, { useState } from "react";
import { Image_14 } from "../assets";
import { Button, SectionIntro } from "../components";
import styles, { layout } from "../style";

const Feedback = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    agreement: false,
  });

  // Function to handle input changes
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    setFormData((prevData) => ({
      ...prevData,
      [name]: newValue,
    }));
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with data:", formData);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
      agreement: false,
    });
  };
  return (
    <section
      className={`${styles.boxWidth} ${layout.sectionReverse} gap-12 md:gap-0`}
    >
      <div className={`${layout.sectionImg} ${layout.sectionImgReverse}`}>
        <img
          src={Image_14}
          alt="Image"
          className="w-[435px] h-full object-contain"
        />
      </div>
      <div className={layout.sectionInfo}>
        <SectionIntro title="Any questions?" heading="Drop us a line" />
        <form
          className="w-full flex flex-col mt-10 gap-6"
          onSubmit={handleSubmit}
        >
          <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-6">
            <div className="w-full flex-1 flex flex-col justify-start items-start gap-2">
              <label
                htmlFor="firstName"
                className="text-base font-normal text-gray800"
              >
                First Name<span className="text-primary">*</span>
              </label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                placeholder="Your First Name"
                value={formData.firstName}
                onChange={handleInputChange}
                className="w-full text-base font-normal placeholder:text-gray600 text-gray900 py-3 px-4 bg-white rounded border border-solid border-gray400"
                required
              />
            </div>
            <div className="w-full flex-1 flex flex-col justify-start items-start gap-2">
              <label
                htmlFor="lastName"
                className="text-base font-normal text-gray800"
              >
                Last Name<span className="text-primary">*</span>
              </label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Your Last Name"
                value={formData.lastName}
                onChange={handleInputChange}
                className="w-full text-base font-normal placeholder:text-gray600 text-gray900 py-3 px-4 bg-white rounded border border-solid border-gray400 "
                required
              />
            </div>
          </div>
          <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-6">
            <div className="w-full flex-1 flex flex-col justify-start items-start gap-2">
              <label
                htmlFor="email"
                className="text-base font-normal text-gray800"
              >
                Email<span className="text-primary">*</span>
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full text-base font-normal placeholder:text-gray600 text-gray900 py-3 px-4 bg-white rounded border border-solid border-gray400"
                required
              />
            </div>
            <div className="w-full flex-1 flex flex-col justify-start items-start gap-2">
              <label
                htmlFor="phone"
                className="text-base font-normal text-gray800"
              >
                Phone<span className="text-primary">*</span>
              </label>
              <input
                type="text"
                name="phone"
                id="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Your Phone Number"
                className="w-full text-base font-normal placeholder:text-gray600 text-gray900 py-3 px-4 bg-white rounded border border-solid border-gray400 "
                required
              />
            </div>
          </div>
          <div className="flex flex-col justify-start items-start gap-2">
            <label
              htmlFor="message"
              className="text-base font-normal text-gray800"
            >
              Message<span className="text-primary">*</span>
            </label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="5"
              required
              placeholder="Your Message"
              value={formData.message}
              onChange={handleInputChange}
              className="w-full text-base font-normal placeholder:text-gray600 text-gray900 py-3 px-4 bg-white rounded border border-solid border-gray400 resize-none"
            ></textarea>
          </div>
          <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-1">
            <label className="flex-1 flex items-start gap-2">
              <input
                type="checkbox"
                name="agreement"
                id="agreement"
                className="mt-[5px] accent-primary"
                checked={formData.agreement}
                onChange={handleInputChange}
              />
              <span className="text-base font-normal text-gray800">
                I agree to receive communications from Createx Online School
              </span>
            </label>
            <div className="flex-1">
              <Button label="Send message" type="submit" styles="w-full" />
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};
export default Feedback;
