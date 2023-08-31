import React from "react";
import { useLocation } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
const Welcome = () => {
  const location = useLocation();
  console.log(location);

  if (location.search == "") {
    return (
      <>
        <div className=" text-center">
          <div className="text-5xl mt-3 mb-2">Welcome back</div>
          <div className="flex flex-col justify-around text-center  items-center mt-8 md:flex-row mb-12 ">
            <div className="w-96 md:w-6/12">
              <img className="rounded-lg" src="welcome.jpg" />
            </div>
            <div className="w-96 md:w-4/12 text-zinc-900 italic font-serif mt-8">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                dignissimos commodi cum iste enim vel sed eligendi voluptatum,
                provident delectus ipsam voluptates! Laudantium distinctio
                repudiandae cum libero reprehenderit quaerat eum alias, adipisci
                animi, fuga fugit molestias recusandae quas deserunt dolorum
                quasi nemo sunt odit quis aperiam vitae ipsum! Architecto
                asperiores porro nobis unde possimus eligendi et quia eum,
                quibusdam, ea commodi? Veritatis quod consectetur, doloremque
                harum officiis pariatur expedita est!
              </p>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className=" text-center mt-3 mb-2">
          <div className="text-5xl ">
            Welcome : {location.search.split("?")[1].split("=")[1]}
          </div>
          <img
            src="welcome.jpg"
            className="mx-auto rounded-full md:rounded-lg"
          />
        </div>
      </>
    );
  }
};

export default Welcome;
