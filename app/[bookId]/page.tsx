"use client";
import React from "react";
import Link from "next/link";
import bookMap from "../type/bookMap";
import Menu from "../menu/Menu";
import { IoPersonSharp, IoReturnDownBack } from "react-icons/io5";
import { GiCalendarHalfYear } from "react-icons/gi";
import { FaCity } from "react-icons/fa";
import { TbBuildingEstate } from "react-icons/tb";
import { BsArrowRight } from "react-icons/bs";
import { GrLanguage } from "react-icons/gr";
import { IoMdArrowRoundBack } from "react-icons/io";

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
        <div className=" relative container  border-none lg:border border-2 border-gray-400 rounded p-4 mx-auto mt-10 flex flex-col lg:flex-row justify-center lg:justify-start gap-0 lg:gap-8 items-center lg:items-start">
          <Link href={"/dashboard"} className="hover:opacity-60">
            <IoReturnDownBack size={32} />
          </Link>
          <img
            src={`${bookInformation.image}`}
            alt=""
            className="h-48 w-32 object-cover rounded"
          />

          <div className="mt-10 lg:mt-0 px-2">
            <h2 className="text-3xl font-bold ">{bookInformation.title}</h2>
            <div className="flex items-center gap-2 ">
              <IoPersonSharp />
              <h4>{bookInformation.author}</h4>
            </div>
            <div className="flex items-center gap-2 tracking-wide">
              <GiCalendarHalfYear />
              <p>{bookInformation.publishedDate}</p>
            </div>
            <p className="mt-4 w-full   border border-zinc-300 p-2">
              {bookInformation.description}
            </p>

            <div className="flex items-center gap-2 mt-4">
              <TbBuildingEstate />
              <p>
                {bookInformation.city} - {bookInformation.state}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <GrLanguage />
              <p>{bookInformation.language}</p>
            </div>

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
  const language = searchParams.language;
  const city = searchParams.city;
  const neighborhood = searchParams.neighborhood;
  const state = searchParams.state;

  const publishedDate = searchParams.publishedDate;
  return {
    title,
    author,
    description,
    image,
    publishedDate,
    language,
    city,
    neighborhood,
    state,
  };
}
export default page;
