import React from "react";
import { FcPlus } from "react-icons/fc";

function page() {
  return (
    <div className="flex flex-col  ">
      <div className="flex gap-2 items-center  w-full  p-6 mb-1 border shadow border-2 justify-between lg:justify-normal">
        <h2 className="text-xl  ">
          <span className="text-purple-950 font-bold text-2xl">Tecnovix</span>{" "}
          Livraria |{" "}
        </h2>
        <button className=" " title="Adicionar um novo livro">
          <FcPlus size={24} />
        </button>
      </div>
      <main className="p-2 lg:p-12">
        <div className="  py-2 px-2">
          <h2 className=" text-4xl  ">Recomendações de Livros</h2>
          <p className="text-gray-600">
            Mergulhe nos melhores livros e aproveite!
          </p>
        </div>
        <div className=" mt-4 flex flex-col lg:flex-row gap-12 lg:gap-8">
          <div className="cardHover flex flex-col justify-center   max-w-full  lg:w-2xl rounded-xl border rounded">
            <img
              src="https://m.media-amazon.com/images/I/718bxXoq9gL._AC_UF1000,1000_QL80_.jpg"
              alt=""
              className="w-full lg:w-96 h-96 object-cover"
            />
            <div className="border px-2">
              {" "}
              <p className="text-lg font-bold">A bela e a Fera</p>
              <p className="text-sm ">Daniel Silva</p>
            </div>
            <p className="mt-4 text-gray-800 px-2">
              Conheça o incrivel mundo desse livro!
            </p>
            <div className="mt-8 border border w-full flex justify-center">
              <button className=" p-2 text-white button bg-green-600 rounded w-full px-12 ">
                Ver mais
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default page;
