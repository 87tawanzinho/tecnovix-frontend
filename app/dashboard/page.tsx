import React from "react";
import { FcPlus } from "react-icons/fc";
import GetAllComponent from "./GetAllComponent";

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
          <GetAllComponent />
        </div>
      </main>
    </div>
  );
}

export default page;
