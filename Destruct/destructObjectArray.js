import { data } from "./data.js";

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

const book = getBook(1);
const { id, title, publicationDate, author, genres, pages } = book;
id;
title;
publicationDate;
author;
genres;
pages;

const [primaryGenre, secondaryGenre] = genres;
console.log(primaryGenre, secondaryGenre);
