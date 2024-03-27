import React from "react";
import { FiSearch } from "react-icons/fi";

const SearchEvent = ({ searchCourse, setSearchCourse }) => {
  return (
    <form
      className="flex items-center justify-between bg-white rounded border border-solid border-gray400 py-3 px-4 w-full max-w-[400px] lg:max-w-[280px]"
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        type="text"
        placeholder="Search Courses..."
        value={searchCourse}
        onChange={(e) => setSearchCourse(e.target.value)}
        className="w-full text-sm text-gray800 placeholder:text-gray600 font-normal"
      />
      <FiSearch className="text-[16px] text-gray600" />
    </form>
  );
};

export default SearchEvent;
