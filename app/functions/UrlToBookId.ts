import bookMap from "../type/bookMap";

const UrlToBookId = (bookId: bookMap) => {
  return `/book?title=${encodeURIComponent(
    bookId.title
  )}&author=${encodeURIComponent(
    bookId.author
  )}&description=${encodeURIComponent(
    bookId.description
  )}&image=${encodeURIComponent(
    bookId.image
  )}&publication_year=${encodeURIComponent(bookId.publication_year)}`;
};

export default UrlToBookId;
