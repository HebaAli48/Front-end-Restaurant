import React from "react";

const PaginationComponent = ({ pages, setCurrentPage, currentPage }) => {
  return (
    <>
      <div className="flex gap-2  ">
        {pages.length > 1 &&
          pages.map((page) => (
            <div
              onClick={() => setCurrentPage(page)}
              key={page}
              className={`${
                currentPage === page ? "bg-slate-300" : ""
              } cursor-pointer border-2 p-2 h-10`}
            >
              {page}
            </div>
          ))}
      </div>
    </>
  );
};

export default PaginationComponent;
