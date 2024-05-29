import { data } from "../Destruct/data";

const getBook = (id) => data.find((d) => d.id === id);

const Book = getBook(2);
Book;

const getTotalReviews = (book) => {
  const goodreaders = book.reviews.goodreads?.reviewsCount ?? 0;
  const librarything = book.reviews.librarything?.reviewsCount ?? 0; // optional chaining
  goodreaders;
  librarything;
  return goodreaders + librarything;
};

const count = getTotalReviews(Book);
count;
