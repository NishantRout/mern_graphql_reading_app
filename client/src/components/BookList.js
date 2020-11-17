import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { getBooksQuery } from "../queries/queries";
import BookDetails from "./BookDetails";

function BookList() {
  const [selected, setSelected] = useState(null);
  const { loading, error, data } = useQuery(getBooksQuery);

  // console.log("📚", data);

  if (loading) return <p>Loading....</p>;

  if (error) return <p>Ops! Something went wrong</p>;
  return (
    <div>
      <ul id="book-list">
        {data.books.map(({ name, id }) => (
          <li key={id} onClick={(e) => setSelected(id)}>
            {name}
          </li>
        ))}
      </ul>
      <BookDetails bookId={selected} />
    </div>
  );
}

export default BookList;
