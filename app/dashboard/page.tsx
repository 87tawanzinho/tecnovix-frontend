import React from "react";
import { FcPlus } from "react-icons/fc";
import GetAllComponent from "./GetAllComponent";
import Menu from "../menu/Menu";

function page() {
  return (
    <div className="flex flex-col  ">
      <Menu />
      <main className="p-2 lg:p-12 flex flex-col justify-center items-center">
        <div className="   text-center">
          <h2 className=" text-2xl  ">Explore Books</h2>
        </div>
        <div className=" mt-4 flex flex-col lg:flex-row gap-12 lg:gap-8">
          <GetAllComponent />
        </div>
      </main>
    </div>
  );
}

export default page;
