import React, { useState } from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import SearchEvent from "./SearchEvent";
import { PiListFill } from "react-icons/pi";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
const EventFilter = ({
  allCategories,
  selectedCategory,
  handleCategoryClick,
  selectedOption,
  setSelectedOption,
  eventsPerPage,
  handleEventsPerPageChange,
  searchCourse,
  setSearchCourse,
  gridLayout,
  setGridLayout,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <section className="w-full flex flex-col lg:flex-row justify-between items-center gap-4">
      <div className="w-full flex-1 flex flex-col ss:flex-row flex-wrap justify-between md:justify-start gap-8">
        <div className="flex items-center gap-2 relative max-w-max">
          <label htmlFor="category" className="text-sm font-bold text-gray800">
            Event Category
          </label>
          <select
            value={selectedCategory}
            onChange={(e) => handleCategoryClick(e.target.value)}
            onClick={() => setIsDropdownOpen((prev) => !prev)}
            className="appearance-none focus:outline-none text-sm text-gray800 font-normal border-2 border-solid border-gray400 rounded py-2 pl-3 pr-7"
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
        <div className="flex items-center gap-2 relative max-w-max">
          <label htmlFor="sortBy" className="text-sm font-bold text-gray800">
            Sort by
          </label>
          <select
            id="mySelect"
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
            onClick={() => setIsDropdownOpen((prev) => !prev)}
            className="appearance-none focus:outline-none text-sm text-gray800 font-normal border-2 border-solid border-gray400 rounded pr-7 pl-3 py-2"
          >
            <option value="option1">Recently Added</option>
            <option value="option2">Oldest</option>
            <option value="option3">Popular</option>
          </select>

          <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
            {isDropdownOpen ? (
              <FaCaretDown className="text-gray-600" />
            ) : (
              <FaCaretUp className="text-gray-600" />
            )}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <label
            htmlFor="showPerPage"
            className="text-sm font-bold text-gray800"
          >
            Show
          </label>
          <input
            type="number"
            id="showPerPage"
            value={eventsPerPage}
            onChange={handleEventsPerPageChange}
            className="appearance-none focus:outline-none text-sm text-gray800 font-normal border-2 border-solid border-gray400 rounded pl-2 pr-2 py-2 max-w-16"
          ></input>
          <p className="text-xs text-gray700 font-medium">Events per page</p>
        </div>
      </div>
      <div className="w-full flex-[0.5] flex flex-col ss:flex-row justify-between md:justify-end items-end ss:items-center gap-4 sm:gap-8">
        <SearchEvent
          searchCourse={searchCourse}
          setSearchCourse={setSearchCourse}
        />
        <div className="flex items-center gap-3">
          <PiListFill
            className={`text-[26px] cursor-pointer transition-all duration-300 ease-linear ${
              gridLayout === "list" ? "text-primary" : "text-gray800"
            }`}
            onClick={() => setGridLayout("list")}
          />

          <BsFillGrid3X3GapFill
            className={`text-[20px] cursor-pointer transition-all duration-300 ease-linear ${
              gridLayout === "grid" ? "text-primary" : "text-gray800"
            }`}
            onClick={() => setGridLayout("grid")}
          />
        </div>
      </div>
    </section>
  );
};
export default EventFilter;
