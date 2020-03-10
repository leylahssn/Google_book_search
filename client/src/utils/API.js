import axios from "axios";
// endpoint from googlebooks api
const BaseUrl = "https://www.googleapis.com/books/v1/volumes?q=";

export default {
  // calls googlbooks api and retrieve books based on user input
  searchBooks: query => axios.get(BaseUrl + query),
  // get all books saved in db
  getBooks: () => axios.get("/api/books"),
  // saves a book to the databse
  saveBook: bookData => axios.post("/api/books", bookData),
  // deletes a book with a given id from the database
  deleteBook: id => axios.delete("api/books/" + id)
};
