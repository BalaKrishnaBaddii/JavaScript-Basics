import { data } from "../Destruct/data";

const getBook = (id) => data.find((d) => d.id === id);

const Book = getBook(2);
Book;

const x = [3, 4, 6, 2, 3, 1, 7, 5];
const sorted = x.slice().sort((a, b) => a - b);
const sorteddesc = x.slice().sort((a, b) => b - a);

x;
sorted;
sorteddesc;

const sortedBypages = data
  .slice()
  .sort((a, b) => a.pages - b.pages)
  .map((book) => [book.title, book.pages]);

sortedBypages;
