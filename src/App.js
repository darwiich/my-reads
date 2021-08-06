import React from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import ListBooks from "./ListBooks";
import SearchBook from "./SearchBook";
import { Route, Link } from "react-router-dom";

class BooksApp extends React.Component {
  state = {
    books: [],
  };
  move = (book, s) => {
    !this.state.books.includes(book) && this.updateBooks(book);
    this.setState((currState) => ({
      books: currState.books.map((b) =>
        b.title === book.title ? Object.assign(b, { shelf: s }) : b
      ),
    }));
    BooksAPI.update(book, s);
  };
  updateBooks = (books) => {
    this.setState((currState) => ({
      books: currState.books.concat(books),
    }));
  };
  componentDidMount() {
    BooksAPI.getAll()
      .then(this.updateBooks)
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="app">
        <Route
          exact
          path="/search"
          render={() => (
            <SearchBook
              books={this.state.books}
              onMove={this.move}
            />
          )}
        />
        <Route
          exact
          path="/"
          render={() => (
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <ListBooks books={this.state.books} onMove={this.move} />
              <div className="open-search">
                <Link to="/search">
                  <button>Add a book</button>
                </Link>
              </div>
            </div>
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
