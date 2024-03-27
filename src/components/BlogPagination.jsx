import React from "react";
import ReactPaginate from "react-paginate";
const BlogPagination = ({ totalPages, onPageChange, currentPage }) => {
  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="next"
      onPageChange={onPageChange}
      pageRangeDisplayed={3}
      pageCount={totalPages}
      previousLabel="previous"
      renderOnZeroPageCount={null}
      containerClassName="w-full flex flex-wrap justify-center items-center my-6 gap-1 sm:gap-2 capitalize"
      pageClassName="block"
      pageLinkClassName="px-3 py-1"
      activeClassName="text-primary"
      forcePage={currentPage - 1} // Force current page to be active
      previousClassName={currentPage === 1 ? "disabled" : ""}
      nextClassName={currentPage === totalPages ? "disabled" : ""}
    />
  );
};
export default BlogPagination;
