"use client";
import React, { useState } from "react";
import { FcPlus } from "react-icons/fc";

function Menu() {
  const [modal, setModal] = useState(false);
  return (
    <div className="flex gap-2 items-center  w-full  p-6 mb-1 border shadow border-2 justify-between lg:justify-normal">
      <h2 className="text-xl  ">
        <span className="text-purple-950 font-bold text-2xl">Tecnovix</span>{" "}
        Library |{" "}
      </h2>
      <button
        className=" "
        title="Add a new book"
        onClick={() => setModal(true)}
      >
        <FcPlus size={24} />
      </button>

      {modal && (
        <>
          <div
            className="fixed inset-0 bg-black opacity-60 z-40"
            onClick={() => setModal(false)}
          />
          <div className="fixed inset-0 flex justify-center items-center z-50 ">
            <div className="bg-white h-64 w-96 p-4 rounded mx-2">
              <div className="flex justify-between font-bold">
                <h2 className="text-xl text-slate-950  ">
                  Create a new Book 📔
                </h2>

                <button
                  className="text-red-800 hover:opacity-80 "
                  title="Out"
                  onClick={() => setModal(false)}
                >
                  X
                </button>
              </div>
              <button onClick={() => setModal(false)}>Close</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Menu;
