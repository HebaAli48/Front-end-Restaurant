import React from "react";

const About = () => {
  return (
    <>
      <div className="mt-5 mb-10">
        {/* burger */}
        <div className="flex flex-col justify-around text-center  items-center mt-8 md:flex-row">
          <div className="w-96 ">
            <img className="rounded-lg" src="about11.jpg" />
          </div>
          <div className="w-96 md:w-3/12 text-zinc-900 italic font-serif">
            <h2 className="text-2xl"> Most Juicy Burger 🤤 </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum consequatur omnis mollitia ratione ad eum repellendus
              voluptas et laborum autem iusto reiciendis voluptatem incidunt quo
              quibusdam fuga fugit, expedita natus asperiores aut? Iusto velit
              non ut amet, nostrum labore sit eum, et corrupti assumenda magni
              illo nisi, temporibus eos similique!
            </p>
          </div>
        </div>
        {/* Pizza */}

        <div className="flex flex-col justify-around text-center  items-center mt-8 md:flex-row ">
          <div className="w-96 ">
            <img className="rounded-lg" src="about22.jpg" />
          </div>
          <div className="w-96 md:w-3/12 text-zinc-900 italic font-serif">
            <h2 className="text-2xl"> Tasty Pizza 🥰 </h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero eum
              dolores delectus quaerat incidunt corporis a beatae accusamus quae
              cum eligendi ipsa nisi, numquam sint vel! Nisi neque voluptates
              officia possimus earum dolor quas tempore rerum totam, reiciendis,
              aliquid ipsum vel deserunt recusandae perferendis. Placeat sequi
              facilis aut alias neque. Eaque, blanditiis quia repellat expedita
              quam officia adipisci dolorem aspernatur?
            </p>
          </div>
        </div>
        {/* pasta */}
        <div className="flex flex-col justify-around text-center  items-center mt-8 md:flex-row ">
          <div className="w-96 ">
            <img className="rounded-lg" src="about33.jpg" />
          </div>
          <div className="w-96 md:w-3/12 text-zinc-900 italic font-serif">
            <h2 className="text-2xl"> Special Pasta !🤩 </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
              dignissimos commodi cum iste enim vel sed eligendi voluptatum,
              provident delectus ipsam voluptates! Laudantium distinctio
              repudiandae cum libero reprehenderit quaerat eum alias, adipisci
              animi, fuga fugit molestias recusandae quas deserunt dolorum quasi
              nemo sunt odit quis aperiam vitae ipsum! Architecto asperiores
              porro nobis unde possimus eligendi et quia eum, quibusdam, ea
              commodi? Veritatis quod consectetur, doloremque harum officiis
              pariatur expedita est!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
