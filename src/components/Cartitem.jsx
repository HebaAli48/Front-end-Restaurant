import React, { useEffect, useState } from "react";

const Cartitem = ({
  name,
  srcImg,
  count,
  id,
  handleIncrement,
  handleDecrement,
  handleDelete,
  handleReset,
}) => {
  // useEffect(() => {
  //   console.log("Effect");
  //   return () => {
  //     console.log("Cleaning...");
  //   };
  // }, []);
  return (
    <>
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        <img
          className=" w-14  me-2 mt-1 rounded-full hover:scale-110"
          src={srcImg}
          alt=""
        />
      </th>
      <td className="px-6 py-4">{name}</td>
      <td className="px-6 py-4">{count}</td>
      <td className="px-2 py-2">
        <button onClick={() => handleIncrement(id)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8  stroke-green-800 hover:scale-110  hover:stroke-green-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>
      </td>
      <td className="px-2 py-2">
        <button
          onClick={() => handleDecrement(id)}
          type="button"
          className={`${count > 0 ? "" : "hidden"}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={`w-8 h-8  ${
              count > 0
                ? "stroke-red-700  hover:stroke-red-500"
                : "stroke-slate-300 "
            } hover:scale-110`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>
      </td>
      <td className="px-2 py-2">
        <button
          onClick={() => handleDelete(id)}
          type="button"
          className={`${count > 0 ? "" : "hidden"}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={`w-8 h-8  ${
              count > 0
                ? "stroke-red-700  hover:stroke-red-500"
                : "stroke-slate-300 "
            } hover:scale-110`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
            />
          </svg>
        </button>
      </td>
      <td className="px-2 py-2">
        <button
          onClick={() => handleReset(id)}
          type="button"
          className={`${count > 0 ? "" : "hidden"}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={`w-8 h-8  ${
              count > 0
                ? "stroke-red-700  hover:stroke-red-500"
                : "stroke-slate-300 "
            } hover:scale-110`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
            />
          </svg>
        </button>
      </td>
    </>
    // <div className="flex gap-9  justify-center ">
    //   <div className="flex gap-2  justify-center items-center">
    //     <img
    //       className=" w-14  me-2 mt-1 rounded-full hover:scale-110"
    //       src={srcImg}
    //       alt=""
    //     />

    //     <div className=" italic font-serif text-3xl w-11/12">{name}</div>
    //     <span className="text-3xl  ">{count}</span>
    //   </div>
    //   <div className="flex gap-4">
    //     <button onClick={() => handleIncrement(id)}>
    //       <svg
    //         xmlns="http://www.w3.org/2000/svg"
    //         fill="none"
    //         viewBox="0 0 24 24"
    //         strokeWidth={1.5}
    //         stroke="currentColor"
    //         className="w-8 h-8  stroke-green-800 hover:scale-110  hover:stroke-green-600"
    //       >
    //         <path
    //           strokeLinecap="round"
    //           strokeLinejoin="round"
    //           d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
    //         />
    //       </svg>
    //     </button>

    //     <button
    //       onClick={() => handleDecrement(id)}
    //       type="button"
    //       className={`${count > 0 ? "" : "hidden"}`}
    //     >
    //       <svg
    //         xmlns="http://www.w3.org/2000/svg"
    //         fill="none"
    //         viewBox="0 0 24 24"
    //         strokeWidth={1.5}
    //         stroke="currentColor"
    //         className={`w-8 h-8  ${
    //           count > 0
    //             ? "stroke-red-700  hover:stroke-red-500"
    //             : "stroke-slate-300 "
    //         } hover:scale-110`}
    //       >
    //         <path
    //           strokeLinecap="round"
    //           strokeLinejoin="round"
    //           d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
    //         />
    //       </svg>
    //     </button>
    //     <button
    //       onClick={() => handleDelete(id)}
    //       type="button"
    //       className={`${count > 0 ? "" : "hidden"}`}
    //     >
    //       <svg
    //         xmlns="http://www.w3.org/2000/svg"
    //         fill="none"
    //         viewBox="0 0 24 24"
    //         strokeWidth={1.5}
    //         stroke="currentColor"
    //         className={`w-8 h-8  ${
    //           count > 0
    //             ? "stroke-red-700  hover:stroke-red-500"
    //             : "stroke-slate-300 "
    //         } hover:scale-110`}
    //       >
    //         <path
    //           strokeLinecap="round"
    //           strokeLinejoin="round"
    //           d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
    //         />
    //       </svg>
    //     </button>
    //     <button
    //       onClick={() => handleReset(id)}
    //       type="button"
    //       className={`${count > 0 ? "" : "hidden"}`}
    //     >
    //       <svg
    //         xmlns="http://www.w3.org/2000/svg"
    //         fill="none"
    //         viewBox="0 0 24 24"
    //         strokeWidth={1.5}
    //         stroke="currentColor"
    //         className={`w-8 h-8  ${
    //           count > 0
    //             ? "stroke-red-700  hover:stroke-red-500"
    //             : "stroke-slate-300 "
    //         } hover:scale-110`}
    //       >
    //         <path
    //           strokeLinecap="round"
    //           strokeLinejoin="round"
    //           d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
    //         />
    //       </svg>
    //     </button>
    //   </div>
    // </div>
  );
};

export default Cartitem;
