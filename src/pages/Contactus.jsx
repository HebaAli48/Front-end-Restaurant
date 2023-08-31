import React from "react";

const Contactus = () => {
  return (
    <>
      {/* contact first row */}
      <div className="mt-10">
        <div className="flex justify-around items-center">
          {/* phone */}
          <div className="  border rounded-full w-3/12 flex flex-col justify-center items-center px-6 pb-5">
            <img src="phone.png" className=" ms-18 w-6/12 mt-2" />

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Provident, eius.
            </p>
            <span className="mt-2"> +02-000 0000 0000</span>
          </div>
          {/* mail */}
          <div className="  border rounded-full w-3/12 flex flex-col justify-center items-center px-6 pb-5">
            <img src="mail.png" className=" ms-18 w-5/12 " />

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Provident, eius.
            </p>
            <span className="mt-2"> Example@example.com</span>
          </div>
        </div>

        {/* gif */}
        <div className=" mx-96">
          <img src="contact.gif" className="w-96 ms-20 " />
        </div>
        {/* contact second row */}

        <div className="flex justify-around items-center ">
          {/* location */}
          <div className="  border rounded-full w-3/12 flex flex-col justify-center items-center px-6 pb-5">
            <img src="loc.png" className=" ms-18 w-5/12 " />

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Provident, eius.
            </p>
            <span className="mt-2 text-center">
              example Street, example Suite , example City
            </span>
          </div>

          {/* webSite */}
          <div className="  border rounded-full w-3/12 flex flex-col justify-center  items-center px-6 pb-5">
            <img src="www.png" className=" ms-18 w-5/12 " />

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Provident, eius.
            </p>
            <span className="mt-2"> www.example.com</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contactus;
