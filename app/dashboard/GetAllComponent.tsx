"use client";
import React, { useEffect, useState } from "react";
import instanceAxios from "../axios/AxiosInstance";
import bookMap from "../type/bookMap";
import { FaTrash } from "react-icons/fa";

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

  if (loading) return <p>Loading..</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <input
        type="text"
        className="border-2 rounded mb-4 p-2 text-gray-600 outline-none"
        placeholder=" 🔍 Procurar um livro"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="cardHover flex flex-col justify-center lg:w-2xl rounded-xl border">
        {noItensMessage ? (
          <p className="text-center text-gray-500">Nenhum livro encontrado</p>
        ) : (
          filteredBooks.map((book) => (
            <div
              key={book.id}
              className="relative mb-4 border rounded-lg overflow-hidden"
            >
              <img
                src={
                  book.image ||
                  "https://media.graphassets.com/AjUybfxSHGQeRkHqQbgg"
                }
                alt={book.title}
                className="w-full lg:w-96 h-96 object-cover"
              />
              <div className="border px-2 py-1">
                <p className="text-md font-bold">
                  {book.title} -{" "}
                  <span className="text-sm text-zinc-600">
                    {book.publication_year}
                  </span>
                </p>
                <p className="text-sm">{book.author}</p>
              </div>
              <p className="mt-4 text-gray-800 px-2">{book.description}</p>
              <div className="mt-8 border w-full flex justify-center">
                <button className="p-3 text-white bg-red-800 rounded w-full px-12">
                  Excluir Livro
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default GetAllComponent;
