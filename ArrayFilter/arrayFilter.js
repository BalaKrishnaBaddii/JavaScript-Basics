import { data } from "../Destruct/data";

const getBook = (id) => data.find((d) => d.id === id);

const Book = getBook(1);

// get long Books using Filter Functions..

const getLongBooks = data.filter((book) => (book?.pages ?? 0) > 500);

getLongBooks;

const getLongBookswithMovieAdoptation = data
  .filter((book) => (book?.pages ?? 0) > 500)
  .filter((book) => book.hasMovieAdaptation);

getLongBookswithMovieAdoptation;

const adventureBooks = data
  .filter((book) => book.genres.includes("adventure"))
  .map((book) => book.title);

adventureBooks;
