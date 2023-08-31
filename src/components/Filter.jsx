import React from "react";

const Filter = ({
  setSelectedCategoryId,
  setCurrentPage,
  selectedCategoryId,
  categories,
}) => {
  return (
    <>
      <div className=" px-[10vw] flex h-fit">
        <div
          onClick={() => {
            setSelectedCategoryId(0);
            setCurrentPage(1);
          }}
          className={`${
            selectedCategoryId === 0 ? "bg-slate-300" : ""
          } border-2 p-1 text-center font-bold cursor-pointer`}
        >
          All
        </div>
        {categories.map((category) => (
          <div
            onClick={() => {
              setSelectedCategoryId(category.id);
              setCurrentPage(1);
            }}
            key={category.id}
            className={`${
              selectedCategoryId === category.id ? "bg-slate-300" : ""
            } border-2 p-1 text-center font-bold cursor-pointer`}
          >
            {category.name}
          </div>
        ))}
      </div>
    </>
  );
};

export default Filter;
