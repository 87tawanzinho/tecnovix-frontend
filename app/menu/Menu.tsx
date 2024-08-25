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
            <div className=" relative bg-white h-64 w-96 rounded p-2 mx-2 ">
              <div className="flex justify-between font-bold">
                <h2 className="text-xl text-slate-950  ">
                  Insert a new book 📔
                </h2>

                <button
                  className="text-red-800 hover:opacity-80 "
                  title="Out"
                  onClick={() => setModal(false)}
                >
                  X
                </button>
              </div>
              <div className="mt-2 flex flex-col gap-2">
                <input
                  type="text"
                  className="border p-1 outline-none text-zinc-800"
                  placeholder="Name of the book"
                />
              </div>
              <button
                onClick={() => setModal(false)}
                className="tracking-widest bg-emerald-800 p-3 w-full text-white absolute bottom-0 start-0 "
              >
                Insert
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Menu;
