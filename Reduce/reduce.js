import { data } from "../Destruct/data";

const getBook = (id) => data.find((d) => d.id === id);

const Book = getBook(2);
Book;

// reduce is used return a single calue from a Array object

const AllPages = data.reduce((nopages, book) => nopages + book.pages, 0);
console.log(AllPages);

let x = [1, 2, 3, 4, 5];
const additon = x.reduce((n, x) => n * x, 1);

additon;

const getFraction = (n) => {
  if (n === 0 || n === 1) {
    return true;
  }

  //   const numbers = Array.from({ length: n }, (_, i) => i + 1);

  return Array.from({ length: n }, (_, i) => i + 1).reduce(
    (num, currentvlue) => num * currentvlue,
    1
  ); // current value is keep iterate itself
};

console.log(getFraction(5));
