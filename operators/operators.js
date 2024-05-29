import { data } from "../Destruct/data";

function getBook(id) {
  return data.find((d) => d.id === id);
}

const Book = getBook(2);
console.log(Book.title);

const { id, title, author, hasMovieAdaptation } = Book;

// short circuting...
console.log(true && "Some String");
console.log(false && "Some String");

console.log(hasMovieAdaptation && "has Adopted as Movie");

// falsy: 0,undefined,null,''
console.log("Mark" && "has a movie");
console.log(0 && "has a movie");

// OR operator..
console.log(true || "some String");
console.log(false || "Some String");
console.log(Book.translations.french);

const spanishTrans = Book.translations.spanish || "Not Translated";
spanishTrans;

console.log(Book.reviews.librarything.reviewsCount);

const countwrong = Book.reviews.librarything.reviewsCount || "No data Found";

countwrong;

//new method to get the 0 ;
const count = Book.reviews.librarything.reviewsCount ?? "No data";
count;
