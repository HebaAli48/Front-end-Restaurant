import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className=" mt-10 max-w-md mx-auto  overflow-hidden md:max-w-6xl ">
        <div className="md:flex">
          <div className="md:shrink-0">
            <img
              className=" ms-5  object-cover md:h-full md:w-96 rounded-lg lg:w-96"
              src="home1.jpg"
            />
          </div>
          <div className="p-8 text-zinc-900 italic font-serif">
            <h2 className=" tracking-wide text-smfont-semibold text-2xl text-center">
              Example Restaurent
            </h2>
            <p className="mt-2">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim,
              aliquid dolorem eum itaque omnis voluptas eveniet rerum id error,
              magnam culpa, iste accusantium quae voluptatum sunt molestias
              voluptatibus laboriosam eligendi modi quas. Maiores illum voluptas
              fugiat nihil at corporis repellat tenetur, in, alias quo sed odio
              dolorum perferendis saepe repudiandae error est excepturi ipsum
              cupiditate veniam voluptate quaerat. Aperiam fuga totam optio
              perspiciatis praesentium nihil eveniet quis! Minus nesciunt eum
              enim aliquid repellendus natus vel? Veritatis esse maiores vel
              sint, mollitia repudiandae sunt ipsam necessitatibus tempora at
              expedita ab perferendis aut non sed deleniti atque assumenda sequi
              beatae ex asperiores?
            </p>
            <div className="text-center ">
              <Link to="/contactus">
                <button className="flex mx-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>

                  <span>Contact Us</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="flex justify-around text-center  items-center mt-8 mb-10">
        <div className="w-7/12 ">
          <img className="rounded-full" src="home1.jpg" />
        </div>
        <div className="w-3/12 text-zinc-900 italic font-serif">
          <h2 className="text-2xl"> Example Restaurent </h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim,
            aliquid dolorem eum itaque omnis voluptas eveniet rerum id error,
            magnam culpa, iste accusantium quae voluptatum sunt molestias
            voluptatibus laboriosam eligendi modi quas. Maiores illum voluptas
            fugiat nihil at corporis repellat tenetur, in, alias quo sed odio
            dolorum perferendis saepe repudiandae error est excepturi ipsum
            cupiditate veniam voluptate quaerat. Aperiam fuga totam optio
            perspiciatis praesentium nihil eveniet quis! Minus nesciunt eum enim
            aliquid repellendus natus vel? Veritatis esse maiores vel sint,
            mollitia repudiandae sunt ipsam necessitatibus tempora at expedita
            ab perferendis aut non sed deleniti atque assumenda sequi beatae ex
            asperiores?
          </p>
        </div>
      </div> */}
      {/* second */}
      <div className=" mt-10 max-w-md mx-auto  overflow-hidden md:max-w-6xl ">
        <div className="md:flex">
          <div className="md:shrink-0">
            <img
              className=" ms-5  object-cover md:h-full md:w-96 rounded-lg lg:w-96"
              src="home2.jpg"
            />
          </div>
          <div className="p-8 text-zinc-900 italic font-serif">
            <h2 className=" tracking-wide text-smfont-semibold text-2xl text-center">
              Tasty Food !
            </h2>
            <p className="mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur dolores non debitis, placeat, veniam unde harum rem
              eveniet eum distinctio explicabo asperiores obcaecati corrupti a
              delectus soluta ad minus labore voluptate! A, ipsa quos. Minus
              expedita dolorum corporis atque saepe quod facere, quos, commodi
              laboriosam nesciunt debitis. Voluptates nemo quidem soluta ut
              corporis dicta, libero commodi necessitatibus iste aperiam tempora
              qui voluptate laboriosam dolorum odit, quo quam debitis, itaque
              dolorem nihil ipsa inventore eaque quasi. Debitis doloremque
              aliquid a veritatis corrupti reiciendis, maiores voluptates ad
              explicabo non dignissimos saepe similique nihil harum deserunt
              ipsum? Deserunt obcaecati aut sit rem dicta!
            </p>
          </div>
        </div>
      </div>

      {/* 3rd */}
      <div className=" mt-10 max-w-md mx-auto  overflow-hidden md:max-w-6xl ">
        <div className="md:flex">
          <div className="md:shrink-0">
            <img
              className=" ms-5  object-cover md:h-full md:w-96 rounded-lg lg:w-96"
              src="home3.jpg"
            />
          </div>
          <div className="p-8 text-zinc-900 italic font-serif">
            <h2 className=" tracking-wide text-smfont-semibold text-2xl text-center">
              Delicious 🤤
            </h2>
            <p className="mt-2">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error
              inventore eligendi natus, omnis aliquid, commodi quae laboriosam
              consequuntur facilis eum vero modi vitae rerum quis? Odit ipsa
              perspiciatis deleniti rerum quo dicta, quisquam sed deserunt
              itaque perferendis ad ab repudiandae esse eaque reiciendis aut
              commodi dolore modi pariatur harum dolores quibusdam. At odio
              officiis eius voluptates nostrum accusamus id! At, tempora!
              Impedit iusto eveniet voluptatum quia inventore praesentium,
              laboriosam quis corporis consequuntur ex dolore saepe expedita
              corrupti nostrum nihil facere.
            </p>
            <div className="text-center ">
              <Link to="/menu">
                <button className="flex mx-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75"
                    />
                  </svg>

                  <span>Menu</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* 4th */}

      <div className=" mt-10 max-w-md mx-auto  overflow-hidden md:max-w-6xl ">
        <div className="md:flex">
          <div className="md:shrink-0">
            <img
              className=" ms-5  object-cover md:h-full md:w-96 rounded-lg lg:w-96"
              src="home4.png"
            />
          </div>
          <div className="p-8 text-zinc-900 italic font-serif">
            <h2 className=" tracking-wide text-smfont-semibold text-2xl text-center">
              Good Customer Service
            </h2>
            <p className="mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
              nostrum a dolorem ad eveniet cumque iusto. Repellendus, quae!
              Iusto beatae quo veritatis eaque, maiores reiciendis deleniti!
              Exercitationem earum ad ipsum!
            </p>
          </div>
        </div>
      </div>

      {/* 5th */}

      <div className=" mt-10 max-w-md mx-auto  overflow-hidden md:max-w-6xl mb-10">
        <div className="md:flex">
          <div className="md:shrink-0">
            <img
              className=" ms-5  object-cover md:h-full md:w-96 rounded-lg lg:w-96"
              src="home5.jpg"
            />
          </div>
          <div className="p-8 text-zinc-900 italic font-serif">
            <h2 className=" tracking-wide text-smfont-semibold text-2xl text-center">
              Skilled Staff
            </h2>
            <p className="mt-2">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Molestiae asperiores dolor aliquid, obcaecati corporis voluptate
              rerum. Harum mollitia corrupti illum dolore, consequuntur, quo
              officia quas error blanditiis dignissimos soluta iste!
            </p>
            <div className="text-center ">
              <Link to="/about">
                <button className="flex  mx-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0"
                    />
                  </svg>

                  <span>About</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
