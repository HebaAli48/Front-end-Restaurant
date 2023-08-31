import React from "react";
import AddToCart from "./AddToCart";

const MenuTable = ({ filteredMeals, handleAddToCart }) => {
  return (
    <>
      <div className="relative  text-center flex flex-col   ">
        <table className="w-[80vw] text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3"></th>
              <th scope="col" className="px-6 py-3">
                Meal
              </th>

              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {filteredMeals.map((dish) => (
              <tr
                key={dish.id}
                className="h-20 bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <th scope="row">
                  <img
                    src={dish.srcImg[0]}
                    className=" w-full mt-1  md:w-20 md:h-16  rounded-full hover:scale-110"
                  />
                </th>
                <td className="px-6 py-4">
                  <h1>{dish.name}</h1>
                </td>
                <td className="px-6 py-4">
                  <h2>{dish.price} LE</h2>
                </td>
                <td className="px-6 py-4">
                  <AddToCart
                    isIncart={dish.isInCart}
                    handleAddToCart={handleAddToCart}
                    MealId={dish.id}
                  />
                </td>
              </tr>
            ))}
            ;
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MenuTable;
