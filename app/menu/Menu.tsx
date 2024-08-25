import React from "react";
import { FcPlus } from "react-icons/fc";

function Menu() {
  return (
    <div className="flex gap-2 items-center  w-full  p-6 mb-1 border shadow border-2 justify-between lg:justify-normal">
      <h2 className="text-xl  ">
        <span className="text-purple-950 font-bold text-2xl">Tecnovix</span>{" "}
        Library |{" "}
      </h2>
      <button className=" " title="Add a new book">
        <FcPlus size={24} />
      </button>
    </div>
  );
}

export default Menu;
