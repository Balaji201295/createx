import React from "react";
import { FiSearch } from "react-icons/fi";

const SearchBlog = ({ searchTitle, setSearchTitle, styles }) => {
  return (
    <form
      className={`flex items-center justify-between bg-white rounded border border-solid border-gray400 py-3 px-4 w-full ${
        styles ? styles : "max-w-[400px] lg:max-w-[280px]"
      } `}
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        type="text"
        placeholder="Search Blog..."
        value={searchTitle}
        onChange={(e) => setSearchTitle(e.target.value)}
        className="w-full text-sm text-gray800 placeholder:text-gray600 font-normal"
      />
      <FiSearch className="text-[16px] text-gray600" />
    </form>
  );
};

export default SearchBlog;
