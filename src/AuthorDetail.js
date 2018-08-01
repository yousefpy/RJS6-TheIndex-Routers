import React, { Component } from "react";

// Components
import BookRow from "./BookRow";

class AuthorDetail extends Component {
  render() {
    const author = this.props.author;
    const bookRows = author.books.map(book => (
      <BookRow key={book.title} book={book} />
    ));

    return (
      <div className="author">
        <div>
          <h3>{author.first_name + " " + author.last_name}</h3>
          <img
            src={author.imageUrl}
            className="img-thumbnail img-fluid"
            alt={author.first_name + " " + author.last_name}
          />
        </div>
        <table className="mt-3 table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Authors</th>
              <th>Color</th>
            </tr>
          </thead>
          <tbody>{bookRows}</tbody>
        </table>
      </div>
    );
  }
}

export default AuthorDetail;
