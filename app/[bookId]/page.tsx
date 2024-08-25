"use client";
import React from "react";
import Link from "next/link";
import bookMap from "../type/bookMap";
import Menu from "../menu/Menu";
import { IoPersonSharp } from "react-icons/io5";
import { GiCalendarHalfYear } from "react-icons/gi";

function page({
  params,
  searchParams,
}: {
  params: { bookId: string };
  searchParams: bookMap;
}) {
  const bookInformation = TakeThisBook(searchParams);
  const bookName = bookInformation.title;

  return (
    <div>
      <Menu />
      {bookName ? (
        <div className=" relative container mx-auto mt-10 flex flex-col lg:flex-row justify-center lg:justify-start gap-0 lg:gap-8 items-center lg:items-start">
          <img
            src={`${bookInformation.image}`}
            alt=""
            className="h-96 w-60 object-cover rounded"
          />

          <div className="mt-10 lg:mt-0 px-2">
            <h2 className="text-3xl font-bold ">{bookInformation.title}</h2>
            <div className="flex items-center gap-2 ">
              <IoPersonSharp />
              <h4>{bookInformation.author}</h4>
            </div>
            <div className="flex items-center gap-2 tracking-widest">
              <GiCalendarHalfYear />
              <p>{bookInformation.publication_year}</p>
            </div>
            <p className="mt-4 w-full lg:w-96  border border-zinc-300 p2">
              {bookInformation.description}
            </p>

            <Link
              href={`https://api.whatsapp.com/send/?phone=75981975144&text&type=phone_number&app_absent=0`}
              target="_blank"
            >
              <button className="button mt-4 mb-2 bg-slate-800 text-white rounded p-2 bottom-2">
                i want to hire this guy 😍
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="mt-40 text-center">
          <p className=" text-2xl font-bold">Error 404</p>
        </div>
      )}
    </div>
  );
}

function TakeThisBook(searchParams: bookMap) {
  const title = searchParams.title;
  const author = searchParams.author;
  const description = searchParams.description;
  const image = searchParams.image;

  const publication_year = searchParams.publication_year;
  return {
    title,
    author,
    description,
    image,
    publication_year,
  };
}
export default page;
