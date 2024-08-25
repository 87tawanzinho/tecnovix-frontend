// ChooseBookComponent.tsx
import React from "react";
import { ChooseBook } from "../type/BooksMenu";
import { IoPersonSharp } from "react-icons/io5";
import { GiCalendarHalfYear } from "react-icons/gi";

interface ChooseBookComponentProps {
  chooseBook: ChooseBook;
}

const ChooseBookComponent: React.FC<ChooseBookComponentProps> = ({
  chooseBook,
}) => {
  return (
    <div>
      {chooseBook.title && (
        <div className="border-2 flex gap-2 justify-between h-auto p-2 rounded border-gray-400">
          <div className="text-sm">
            <p className="text-zinc-800 text-sm font-bold rounded">
              {chooseBook.title}
            </p>
            <div className="text-sm flex items-center gap-2">
              <IoPersonSharp /> <p>{chooseBook.authors.join(", ")}</p>
            </div>
            <div className="text-sm flex items-center gap-2">
              <GiCalendarHalfYear /> <p>{chooseBook.publishedDate}</p>
            </div>
          </div>
          <img
            src={chooseBook.image}
            alt={chooseBook.title}
            className="object-fit rounded h-24"
          />
        </div>
      )}
    </div>
  );
};

export default ChooseBookComponent;
