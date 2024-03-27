import React, { useState } from "react";
import { SearchBlog } from "../components";
import {
  FaCaretDown,
  FaCaretUp,
  FaMicrophone,
  FaRegPlayCircle,
} from "react-icons/fa";
import { GrNotes } from "react-icons/gr";
const BlogFilter = ({
  allTypes,
  selectedType,
  handleTypeClick,
  allCategories,
  selectedCategory,
  handleCategoryClick,
  searchTitle,
  setSearchTitle,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  return (
    <div className="w-full flex flex-col md:flex-row justify-between items-center gap-6">
      {/* type filter */}
      <div className="flex flex-wrap justify-around md:justify-start items-center gap-2 ss:gap-6">
        {allTypes.map((type, index) => {
          return (
            <button
              key={index}
              type="button"
              className={`text-sm font-bold border border-solid py-2 px-3 rounded flex items-center ${
                selectedType === type
                  ? "text-primary border-primary"
                  : "text-gray-700 border-transparent"
              }`}
              onClick={() => handleTypeClick(type)}
            >
              {type === "Podcast" ? (
                <FaMicrophone />
              ) : type === "Article" ? (
                <GrNotes />
              ) : type === "Video" ? (
                <FaRegPlayCircle />
              ) : (
                ""
              )}
              &nbsp;
              <span>{type}</span>
            </button>
          );
        })}
      </div>
      <div className="w-full flex-1 flex flex-col md:flex-row justify-center md:justify-end items-center gap-6">
        {/* category filter */}
        <div className="flex items-center gap-2 relative max-w-max">
          <label htmlFor="category" className="text-sm font-bold text-gray800">
            Blog Category
          </label>
          <select
            value={selectedCategory}
            onChange={(e) => handleCategoryClick(e.target.value)}
            onClick={() => setIsDropdownOpen((prev) => !prev)}
            className="appearance-none focus:outline-none text-sm text-gray800 font-normal border-2 border-solid border-gray400 rounded py-2 h-[45px] pl-3 pr-7"
          >
            {allCategories.map((category) => (
              <option
                key={category}
                value={category}
                style={{ backgroundColor: "white", color: "#333" }}
              >
                {category}
              </option>
            ))}
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
            {isDropdownOpen ? (
              <FaCaretDown className="text-gray-600" />
            ) : (
              <FaCaretUp className="text-gray-600" />
            )}
          </div>
        </div>
        {/* search filter */}
        <SearchBlog searchTitle={searchTitle} setSearchTitle={setSearchTitle} />
      </div>
    </div>
  );
};
export default BlogFilter;
