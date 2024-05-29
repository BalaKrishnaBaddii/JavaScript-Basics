import { data } from "../Destruct/data";

const getBook = (id) => data.find((d) => d.id === id);

const Book = getBook(1);
Book;

const getYear = (id) => {
  const MyBook = getBook(id);
  const { publicationDate } = MyBook;
  return publicationDate.split("-")[0];
};

console.log(getYear(1));
