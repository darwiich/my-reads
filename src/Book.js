import React, { Component } from "react";

export default class Book extends Component {
  handleChange = (e) => {
    this.props.onMove(this.props.book, e.target.value);
  };
  render() {
    return (
      <li key={this.props.book.id}>
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{
                width: 128,
                height: 193,
                backgroundImage: `url(${
                  !this.props.book.imageLinks
                    ? "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg"
                    : this.props.book.imageLinks.smallThumbnail
                })`,
              }}
            />
            <div className="book-shelf-changer">
              <select
                defaultValue={
                  !this.props.book.shelf ? "none" : this.props.book.shelf
                }
                onChange={this.handleChange}
              >
                <option value="move" disabled>
                  Move to...
                </option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{this.props.book.title}</div>
          <div className="book-authors">
            {this.props.book.authors
              ? this.props.book.authors.map((author, index) => {
                  return <div key={index}>{author}</div>;
                })
              : this.props.book.authors}
          </div>
        </div>
      </li>
    );
  }
}
