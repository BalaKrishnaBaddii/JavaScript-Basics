import { data } from "../Destruct/data.js";

const getBook = (id) => data.find((d) => d.id === id);

const Book = getBook(1);

const genres = Book.genres;

const [primaryGenre, secondaryGenre, ...otherGenre] = genres;

// primaryGenre;
// secondaryGenre;
// otherGenre;
otherGenre.push("Sci-Fi");

const newGenres = [...otherGenre, "Commercial"];
// console.log(newGenres);

// updateBook
const updateBook = {
  ...Book,
  // Adding new prorerty
  movePublicationDate: "12-12-2023",
  // updating objectE
  pages: 1444,
};

console.log(updateBook);

// templage literals
const summary = `${Book.title} is a ${Book.pages} pages Book written by ${Book.author}`;
summary;
