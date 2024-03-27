import React from "react";
import { Button } from "../components";
const JoinCourse = ({ styles, inputStyle, acknowledge }) => {
  return (
    <form
      className={`w-full flex ${
        styles ? styles : "flex-col lg:flex-row"
      }  justify-between items-start lg:items-start gap-6`}
    >
      <div
        className={`flex-1 w-full flex ${
          styles ? styles : "flex-col md:flex-row"
        } items-center gap-6`}
      >
        {["Full name", "Email", "Phone"].map((label, index) => (
          <div
            key={index}
            className="w-full flex-1 flex flex-col justify-start items-start gap-2"
          >
            <label
              htmlFor={label.toLowerCase()}
              className="text-sm text-gray800"
            >
              {label}
            </label>
            <input
              type="text"
              name={label.toLowerCase()}
              id={label.toLowerCase()}
              placeholder={`Your ${label.toLowerCase()}`}
              className={`w-full ${
                inputStyle ? inputStyle : ""
              }  bg-white rounded border border-solid border-gray400 py-3 px-4`}
              required
            />
          </div>
        ))}
      </div>
      <div className="w-full flex-[0.25] flex justify-center md:self-end">
        <Button
          type="submit"
          label="join the course"
          styles="w-full min-w-[165px] h-[49px] flex justify-center items-center"
        />
      </div>
      {acknowledge && (
        <p className="text-sm text-gray800">
          <span className="text-primary">*</span>
          {acknowledge}
        </p>
      )}
    </form>
  );
};
export default JoinCourse;
