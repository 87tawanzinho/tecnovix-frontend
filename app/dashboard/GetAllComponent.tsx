"use client";
import React, { useEffect, useState } from "react";
import instanceAxios from "../axios/AxiosInstance";
import bookMap from "../type/bookMap";
import { FaTrash } from "react-icons/fa";
import Link from "next/link";
import UrlToBookId from "../functions/UrlToBookId";
import Loading from "../loading";

function GetAllComponent() {
  const [filteredBooks, setFilteredBooks] = useState<bookMap[]>([]);
  const [books, setBooks] = useState<bookMap[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [noItensMessage, setNoItensMessage] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await instanceAxios.get("books");
        setBooks(response.data);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };
    fetchBooks();
  }, []);

  useEffect(() => {
    if (searchTerm) {
      const list = books.filter((book) =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredBooks(list);
      setNoItensMessage(list.length === 0);
    } else {
      setFilteredBooks(books);
      setNoItensMessage(false);
    }
  }, [searchTerm, books]);

  if (loading) return <Loading />;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <input
        type="text"
        className="border rounded mb-4 p-2 text-gray-600 outline-none"
        placeholder=" 🔍 Try find a book"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className=" flex gap-2  flex-wrap justify-center lg:w-2xl rounded-xl ">
        {noItensMessage ? (
          <p className="text-center text-gray-500">No Book Found</p>
        ) : (
          filteredBooks.map((book) => (
            <div key={book.id} className=" mb-4   overflow-hidden ">
              <Link href={UrlToBookId(book)}>
                <img
                  src={
                    book.image ||
                    "https://media.graphassets.com/AjUybfxSHGQeRkHqQbgg"
                  }
                  alt={book.title}
                  title="go to see more"
                  className=" w-32 lg:w-48 h-48 lg:h-60 rounded-lg object-cover cursor-pointer transition-all  hover:transition-all hover:scale-75 "
                />
              </Link>
              <div className=" px-2 py-1">
                <p className="text-md font-bold">{book.title}</p>
                <p className="text-zinc-600 tracking-widest">
                  {" "}
                  {book.publication_year}
                </p>
                <p className="text-sm">{book.author}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default GetAllComponent;
