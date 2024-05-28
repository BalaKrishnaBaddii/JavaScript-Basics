import { data } from "./data.js";

const getBook = (id) => data.find((d) => d.id === id);

data.forEach((data) => {
  if (data.genres.find((d) => d.genres)) console.log(data.title);
});

const fictionBooks = data.filter((data) => data.genres.includes("fantasy"));
fictionBooks;

const fictionTitles = fictionBooks.map((data) => data.title);
console.log(fictionTitles);
