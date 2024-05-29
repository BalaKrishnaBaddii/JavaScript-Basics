import { data } from "../Destruct/data.js";

const getBook = (id) => data.find((d) => d.id === id);

const Book = getBook(2);

const { id, title, publicationDate, author, pages, hasMovieAdaptation } = Book;
const pageval = pages > 1000 ? "Over Thousand Book" : "Less than Thousand";
pageval;
hasMovieAdaptation;

//using turnary instead if else` in template literals...
const BookSummary = `${title} is a Book written by ${author} with ${pages} pages and has ${
  hasMovieAdaptation ? "" : "not"
} been adopted as a movie`;
BookSummary;

data;
