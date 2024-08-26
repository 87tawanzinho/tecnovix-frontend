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
  )}&publishedDate=${encodeURIComponent(
    bookId.publishedDate
  )}&language=${encodeURIComponent(bookId.language)}&city=${encodeURIComponent(
    bookId.city
  )}&state=${encodeURIComponent(
    bookId.state
  )}&neighborhood=${encodeURIComponent(bookId.neighborhood)}`;
};

export default UrlToBookId;
