import React, { useContext, useEffect, useState } from "react";

import Filter from "../components/Filter";
import MenuTable from "../components/MenuTable";

import { DishesContext } from "../utils/Contexts";
import axios from "axios";

import { pagination } from "./../utils/pagination";
import PaginationComponent from "../components/PaginationComponent";

const pageSize = 5;

const Menu = () => {
  const { dishes, setDishes } = useContext(DishesContext);
  const [categories, setCategory] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const handleAddToCart = (id) => {
    // clone
    const newDishes = [...dishes];
    const Index = newDishes.findIndex((d) => d.id === id);
    newDishes[Index] = { ...newDishes[Index] };
    // edit
    newDishes[Index].isInCart = !newDishes[Index].isInCart;
    // setState
    setDishes(newDishes);
  };

  // filter
  let filteredMeals =
    selectedCategoryId === 0
      ? dishes
      : dishes?.filter((d) => d.categoryId === selectedCategoryId);

  // pagination
  const noOfPages = Math.ceil(filteredMeals.length / pageSize);

  const pages = pagination(noOfPages);

  const pageStartWith = (currentPage - 1) * pageSize;

  filteredMeals = filteredMeals.slice(pageStartWith, pageSize + pageStartWith);

  useEffect(() => {
    const fetchDishes = async () => {
      const { data } = await axios.get("http://localhost:3000/dishes?_delay=0");

      setDishes(data);
    };
    const fetchCategory = async () => {
      const { data } = await axios.get(
        "  http://localhost:3000/category?_delay=0"
      );

      setCategory(data);
    };
    fetchDishes();
    fetchCategory();
  }, []);
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-4">
        {/* filter */}
        <Filter
          setSelectedCategoryId={setSelectedCategoryId}
          setCurrentPage={setCurrentPage}
          selectedCategoryId={selectedCategoryId}
          categories={categories}
        />

        {/* table */}
        <MenuTable
          filteredMeals={filteredMeals}
          handleAddToCart={handleAddToCart}
        />

        {/* pagination */}
        <PaginationComponent
          pages={pages}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </div>
    </>
  );
};

export default Menu;
