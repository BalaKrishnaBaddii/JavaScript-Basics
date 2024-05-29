import { data } from "../Destruct/data";

const getBook = (id) => data.find((d) => d.id === id);

const Book = getBook(1);

// Map() - it will return an array with same number of elements with some operations performed.

const sample = [1, 2, 3, 4, 5].map((el) => el - 1);
sample;

///lets try...
const getReviewCount = (book) =>
  book.reviews.goodreads?.reviewsCount ??
  0 + book.reviews.librarything?.reviewsCount ??
  0;

const titles = data.map((book) => book.title);

const essentialData = data.map((book) => ({
  title: book.title,
  author: book.author,
  reviewsCount: getReviewCount(book),
}));

console.log(essentialData);
