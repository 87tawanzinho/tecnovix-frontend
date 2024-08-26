"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { FcPlus } from "react-icons/fc";
import { GiCalendarHalfYear } from "react-icons/gi";
import { IoPersonSharp } from "react-icons/io5";
import { Book, BookVolumeInfo, Cep, ChooseBook } from "../type/BooksMenu";
import ChooseBookComponent from "./ChooseBookComponent";
import instanceAxios from "../axios/AxiosInstance";

function Menu() {
  const [modal, setModal] = useState(false);
  const [query, setQuery] = useState("");
  const [disableButton, setDisableButton] = useState(false);
  const [chooseBook, setChooseBook] = useState<ChooseBook>({
    id: "",
    title: "",
    image: "",
    publishedDate: 0,
    language: "",
    description: "",
    country: "",
    authors: [],
  });
  const [cepQuery, setCepQuery] = useState("");
  const [cep, setCep] = useState<Cep>({});
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setErrorMessage] = useState("");

  useEffect(() => {
    const fetchBooks = async () => {
      if (query.length > 2) {
        setLoading(true);
        try {
          const response = await axios.get(
            "https://www.googleapis.com/books/v1/volumes",
            {
              params: {
                q: query,
                maxResults: 5,
              },
            }
          );

          setBooks(response.data.items || []);
        } catch (error) {
          console.error("Error fetching books:", error);
        }
        setLoading(false);
      } else {
        setBooks([]);
      }
    };

    fetchBooks();
  }, [query]);

  useEffect(() => {
    const fetchCep = async () => {
      if (cepQuery.length === 8) {
        try {
          const response = await axios.get(
            `https://viacep.com.br/ws/${cepQuery}/json/`
          );

          setCep(response.data || {});
        } catch (error) {
          console.error("Error fetching cep:", error);
        }
      } else if (cepQuery.length > 8) {
        setCepQuery(cepQuery.slice(0, 8));
      } else {
        setCep({});
      }
      setLoading(false);
    };

    fetchCep();
  }, [cepQuery]);

  const insertBook = async () => {
    setDisableButton(true);
    setErrorMessage("");
    if (!chooseBook.title) {
      return setErrorMessage("Your don't choose the book");
    }

    if (!cep.bairro) {
      return setErrorMessage("Your CEP are correct?");
    }

    try {
      const response = await instanceAxios.post("books", {
        title: chooseBook.title,
        author: chooseBook.authors[0],
        image: chooseBook.image,
        description: chooseBook.description,
        publishedDate: chooseBook.publishedDate,
        language: chooseBook.language,
        // cep
        city: cep.localidade,
        state: cep.uf,
        neighborhood: cep.bairro,
      });

      setModal(false);
      window.location.reload();
      response;
    } catch (error) {
      setDisableButton(false);
    }
  };
  return (
    <div className="flex gap-2 items-center w-full p-6 mb-1 border shadow border-2 justify-between lg:justify-normal">
      <h2 className="text-xl">
        <span className="text-purple-950 font-bold text-2xl">Tecnovix</span>{" "}
        Library |{" "}
      </h2>
      <button
        className=""
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
          <div className="fixed inset-0 flex justify-center items-center z-50">
            <div className="relative bg-white h-96 lg:h-auto w-11/12 lg:w-96 rounded-2xl p-4 mx-2 overflow-auto">
              <div className="flex justify-between font-bold border-b">
                <h2 className="text-xl text-slate-950">Insert a new book 📔</h2>

                <button
                  className="text-red-800 hover:opacity-80"
                  title="Close"
                  onClick={() => {
                    setBooks([]);
                    setCep({});
                    setCepQuery("");
                    setQuery("");
                    setChooseBook({
                      id: "",
                      title: "",
                      authors: [],
                      image: "",
                      language: "",
                      country: "",
                      description: "",

                      publishedDate: 0,
                    });
                    setModal(false);
                    setErrorMessage("");
                  }}
                >
                  X
                </button>
              </div>
              <div className="mt-2 flex flex-col gap-2">
                <input
                  type="text"
                  className="border p-1 outline-none text-zinc-800"
                  placeholder="Name of the book"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
              </div>

              {loading && <p className="text-zinc-300">Loading...</p>}
              {books.length > 0 && (
                <ul className="flex flex-col gap-1 mt-2 overflow-y-auto max-h-40 text-sm pb-4 mb-4">
                  {books
                    .filter(
                      (book) =>
                        book.volumeInfo.imageLinks &&
                        book.volumeInfo.imageLinks.thumbnail
                    )
                    .map((book) => (
                      <div
                        className="flex w-full"
                        key={book.id}
                        onClick={() => {
                          setQuery(
                            `${book.volumeInfo.title} by ${book.volumeInfo.authors}`
                          );
                          setChooseBook({
                            id: book.id,
                            title: book.volumeInfo.title,
                            authors: book.volumeInfo.authors,
                            image: book.volumeInfo.imageLinks?.thumbnail,
                            description: book.volumeInfo.description,
                            publishedDate: book.volumeInfo.publishedDate,
                            language: book.volumeInfo.language,
                            country: book.saleInfo.country,
                          });
                        }}
                      >
                        <button className="border text-start button-selection rounded p-1 w-full">
                          {book.volumeInfo.title} by{" "}
                          {book.volumeInfo.authors || "Unknown author"}
                        </button>

                        <img
                          src={`${
                            book.volumeInfo.imageLinks &&
                            book.volumeInfo.imageLinks.thumbnail
                              ? book.volumeInfo.imageLinks.thumbnail
                              : "null"
                          }`}
                          className="h-12 w-12"
                          alt={book.volumeInfo.title}
                        />
                      </div>
                    ))}
                </ul>
              )}

              {chooseBook && <ChooseBookComponent chooseBook={chooseBook} />}
              <input
                type="number"
                placeholder="CEP"
                className="border p-2 mt-2 text-zinc-600 outline-none mb-2"
                value={cepQuery}
                onChange={(e) => setCepQuery(e.target.value)}
              />

              {cep && cep.localidade && (
                <div className="pb-2">
                  <p className="mt-4">Address:</p>
                  <p className="border">
                    City: <span>{cep.localidade}</span>
                  </p>
                  <p className="border">
                    Neighborhood: <span>{cep.bairro}</span>
                  </p>
                  <p className="border">
                    State: <span>{cep.uf}</span>
                  </p>
                </div>
              )}
              {error && <p className="text-red-800 text-sm">{error}</p>}
              <button
                className={`w-full bg-green text-black font-bold tracking-widest p-2 rounded button hover:text-white ${
                  disableButton && "opacity-60"
                }`}
                disabled={disableButton}
                onClick={() => insertBook()}
              >
                {disableButton ? "Await...  " : "Insert"}
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Menu;
