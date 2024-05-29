import { data } from "../Destruct/data";

const getBook = (id) => data.find((d) => d.id === id);

const Book = getBook(2);
Book;

// reduce is used return a single calue from a Array object

const AllPages = data.reduce((nopages, book) => nopages + book.pages, 0);
console.log(AllPages);

let x = [1, 2, 3, 4, 5];
const additon = x.reduce((n, x) => n + x, 0);

additon;
