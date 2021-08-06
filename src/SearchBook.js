import React, { Component } from "react";
import * as BooksAPI from "./BooksAPI";
import Book from "./Book";
import { Link } from "react-router-dom";

export default class SearchBook extends Component {
  state = {
    query: "",
    booksSearch: [],
  };

  updateBooksSearch = (books) => {
    this.setState(() => ({
      booksSearch: books,
    }));
  };

  updateQuery = (query) => {
    if (query === "") {
      this.setState(() => ({
        query: "",
        booksSearch: [],
      }));
    } else {
      this.setState(() => ({
        query: query,
      }));
      if (query.length > 0) {
        BooksAPI.search(query)
          .then(this.updateBooksSearch)
          .catch(() => {
            this.setState(() => ({
              booksSearch: null,
            }));
          });
      }
    }
  };

  render() {
    const updatedBooks =
      this.state.booksSearch.length > 0 &&
      this.state.booksSearch.map((book) => {
        this.props.books.map((b) => {
          if (b.id === book.id) {
            book.shelf = b.shelf;
            BooksAPI.update(b, b.shelf);
          }
          return b;
        });
        return book;
      });
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/">
            <button className="close-search">Close</button>
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={(e) => this.updateQuery(e.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {updatedBooks.length > 0 ? (
              updatedBooks.map((book) => {
                return (
                  <Book
                    key={book.id}
                    book={book}
                    onMove={this.props.onMove}
                  />
                );
              })
            ) : (
              <div />
            )}
          </ol>
        </div>
      </div>
    );
  }
}
