import React, { Component } from "react";
import BookTable from "./BookTable";
import SearchBar from "./SearchBar";
import { timingSafeEqual } from "crypto";
import BookRow from "./BookRow";
import { Link } from "react-router-dom";

class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: this.props.books,
      filterBooks: this.props.books
    };
    this.filterBooks = this.filterBooks.bind(this);
  }

  filterBooks(query) {
    query = query.toLowerCase();
    let filterBooks = this.props.books.filter(book => {
      return `${book.title}`.toLowerCase().includes(query);
    });
    this.setState({ filterBooks: filterBooks });
  }

  filterByColor(colorName) {
    return this.props.books.filter(book => book.color === colorName);
  }

  render() {
    let books = this.state.filterBooks;
    let showAllBooksButton;
    const bookColor = this.props.match.params.colorName;
    if (bookColor) {
      books = this.filterByColor(bookColor);
      showAllBooksButton = (
        <Link to="/books">
          <button>Show All Books</button>
        </Link>
      );
    } else {
      books = this.state.filterBooks;
    }
    return (
      <div>
        <h3>Book List</h3>
        <SearchBar changeHandler={this.filterBooks} />
        {showAllBooksButton}
        <BookTable books={books} />
      </div>
    );
  }
}

export default BookList;
