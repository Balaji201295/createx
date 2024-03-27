import React, { useState } from "react";
import styles from "../style";
import {
  BlogCards,
  BlogFilter,
  BlogPagination,
  SectionIntro,
} from "../components";
import useFetchBlogs from "../hooks/useFetchBlogs";

const OurBlogs = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedType, setSelectedType] = useState("All");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTitle, setSearchTitle] = useState("");

  const blogsPerPage = 9;

  const { blogs, loading, error } = useFetchBlogs();
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const allTypes = ["All", ...new Set(blogs.map((item) => item.type))];
  const allCategories = ["All", ...new Set(blogs.map((blog) => blog.category))];

  const handleTypeClick = (type) => {
    setSelectedType(type);
    setCurrentPage(1);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  // Filter blogs based on selected type and category
  const filteredBlogs = blogs.filter((blog) => {
    if (selectedType !== "All" && blog.type !== selectedType) return false;
    if (selectedCategory !== "All" && blog.category !== selectedCategory)
      return false;
    if (
      searchTitle &&
      !blog.title.toLowerCase().includes(searchTitle.toLowerCase())
    )
      return false;
    return true;
  });

  const indexOfLastBlogs = currentPage * blogsPerPage;
  const indexOfFirstBlogs = indexOfLastBlogs - blogsPerPage;
  const currentBlogs = filteredBlogs.slice(indexOfFirstBlogs, indexOfLastBlogs);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected + 1);
  };

  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);

  return (
    <section className={`${styles.boxWidth} ${styles.paddingX} pt-28`}>
      <div className="w-full flex flex-col justify-center items-center text-center">
        <SectionIntro title="Our blog" heading="Createx School Journal" />
      </div>
      <div className="w-full flex flex-col justify-center items-center gap-12 my-12">
        <BlogFilter
          allTypes={allTypes}
          selectedType={selectedType}
          handleTypeClick={handleTypeClick}
          allCategories={allCategories}
          selectedCategory={selectedCategory}
          handleCategoryClick={handleCategoryClick}
          searchTitle={searchTitle}
          setSearchTitle={setSearchTitle}
        />
        <BlogCards blogs={currentBlogs} />
        <BlogPagination
          totalPages={totalPages}
          onPageChange={handlePageChange}
          currentPage={currentPage}
        />
      </div>
    </section>
  );
};

export default OurBlogs;
