import React from "react";
import { useQuery } from "@apollo/client";
import { getBookQuery } from "../queries/queries";

function BookDetails({ bookId }) {
  const { loading, error, data } = useQuery(getBookQuery, {
    variables: {
      id: bookId,
    },
  });
  const displayBooks = () => {
    // console.log("🚀", data);
    if (loading) return <p>Loading 📚....</p>;

    if (error) return <p>Ops! Something went wrong</p>;

    const { book } = data;
    if (book) {
      return (
        <div>
          <h2>{book.name}</h2>
          <p>Genre: {book.genre}</p>
          <p>Author: {book.author.name}</p>
          <p>All books by this author:</p>
          <ul className="other-books">
            {book.author.books.map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        </div>
      );
    } else {
      <div>No book selected...</div>;
    }
  };

  return (
    <div id="book-details">
      {bookId != null ? displayBooks() : <h2>No 📚 selected...</h2>}
    </div>
  );
}

export default BookDetails;
