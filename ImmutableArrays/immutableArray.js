import { data } from "../Destruct/data";

const getBook = (id) => data.filter((book) => book.id === id);

const Book = getBook(1);

Book;

// Add Book
const newBook = {
  id: 6,
  title: "Bahubali the Legends",
  author: "Rajendra Prasad",
  genres: ["Fictional", "Action"],
  pages: 1245,
};

const booksAfterAdded = [...data, newBook];

booksAfterAdded;

// Delete Book.
const booksAfterDelete = booksAfterAdded.filter((book) => book.id !== 1);

booksAfterDelete;

// update..
const booksAfterUpdate = booksAfterDelete.map((book) =>
  book.id === 6 ? { ...book, pages: 1300 } : book
);

booksAfterUpdate;

booksAfterDelete.pop(); // it will removes the last one
booksAfterDelete;

booksAfterAdded.push(newBook);

booksAfterAdded;
