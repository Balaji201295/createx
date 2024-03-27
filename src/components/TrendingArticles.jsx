import React from "react";
import { Link } from "react-router-dom";
import useFetchBlogs from "../hooks/useFetchBlogs";
import { FaRegCalendar } from "react-icons/fa";
const TrendingArticles = ({ searchTitle }) => {
  const { blogs, loading, error } = useFetchBlogs();
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  // Function to filter blogs based on searchTitle
  const filteredBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(searchTitle.toLowerCase())
  );

  return (
    <>
      <div className="flex flex-col justify-start items-start mt-12">
        <h3 className="text-base font-bold text-gray900 mb-6 uppercase">
          trending articles
        </h3>
        <div className="w-full flex flex-col justify-start items-start gap-5">
          {filteredBlogs.slice(0, 3)?.map((blog) => (
            <Link
              to={`/blogs/${blog.id}`}
              key={blog.id}
              className="w-full flex gap-4 items-start justify-start"
            >
              <div className="w-[100px] h-[100px]">
                <img
                  src={blog.img}
                  alt={blog.title}
                  className="w-full h-full object-cover rounded"
                />
              </div>
              <div className="flex flex-col justify-start items-start">
                <p className="text-sm text-gray700 flex justify-start items-center gap-2">
                  <FaRegCalendar />
                  {blog.date}
                </p>
                <h3 className="text-sm text-gray900 font-bold mt-2">
                  {blog.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};
export default TrendingArticles;
