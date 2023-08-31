import React, { useContext } from "react";
import Loader from "../components/Loader";
import { DishesContext } from "../utils/Contexts";
import Cartitem from "./../components/Cartitem";

const ShoppingCart = () => {
  const { dishes, setDishes } = useContext(DishesContext);
  const handleIncrement = (id) => {
    // clone
    const newDishes = [...dishes];
    const Index = newDishes.findIndex((d) => d.id === id);
    newDishes[Index] = { ...newDishes[Index] };
    // edit
    newDishes[Index].count = newDishes[Index].count + 1;
    // setState
    setDishes(newDishes);
  };
  const handleDecrement = (id) => {
    // clone
    const newDishes = [...dishes];
    const Index = newDishes.findIndex((d) => d.id === id);
    newDishes[Index] = { ...newDishes[Index] };
    // edit
    newDishes[Index].count =
      newDishes[Index].count != 0
        ? newDishes[Index].count - 1
        : (newDishes[Index].count = 0);
    // setState
    setDishes(newDishes);
  };
  const handleDelete = (id) => {
    // clone
    const newDishes = [...dishes];
    const Index = newDishes.findIndex((d) => d.id === id);
    newDishes[Index] = { ...newDishes[Index] };
    // edit
    newDishes[Index].isInCart = false;
    newDishes[Index].count = 0;
    // setState
    setDishes(newDishes);
  };
  const handleReset = (id) => {
    // clone
    const newDishes = [...dishes];
    const Index = newDishes.findIndex((d) => d.id === id);
    newDishes[Index] = { ...newDishes[Index] };
    // edit
    newDishes[Index].count = 0;
    // setState
    setDishes(newDishes);
  };
  return (
    <>
      {dishes.length === 0 && (
        <div className="h-[80vh] flex justify-center items-center">
          <Loader />
        </div>
      )}
      <div className="relative overflow-x-auto ">
        <table className="mx-auto text-sm text-left text-gray-500 dark:text-gray-400">
          <tbody>
            {dishes
              .filter((d) => d.isInCart == true)
              .map((dish) => (
                <tr
                  classNameName="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  key={dish.id}
                >
                  <Cartitem
                    name={dish.name}
                    srcImg={dish.srcImg}
                    count={dish.count}
                    id={dish.id}
                    handleIncrement={handleIncrement}
                    handleDecrement={handleDecrement}
                    handleDelete={handleDelete}
                    handleReset={handleReset}
                  />
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ShoppingCart;
