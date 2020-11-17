import React from "react";
import { useQuery } from "@apollo/client";
import { getBookQuery } from "../queries/queries";

function BookDetails({ bookId }) {
  const { loading, error, data } = useQuery(getBookQuery, {
    variables: {
      id: bookId,
    },
  });
  console.log("🚀", data);
  const displayBooks = () => {
    const { book } = data;
    if (book) {
      return (
        <div>
          <h2>{book.name}</h2>
          <p>{book.genre}</p>
          <p>{book.author.name}</p>
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

  if (loading) return <p>Loading 📚....</p>;

  if (error) return <p>Ops! Something went wrong</p>;

  return <div id="book-details">{displayBooks()}</div>;
}

export default BookDetails;
