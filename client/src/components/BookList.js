import React from "react";
import { useQuery, gql } from "@apollo/client";

const getBooksQuery = gql`
  {
    books {
      name
      id
    }
  }
`;

function BookList() {
  const { loading, error, data } = useQuery(getBooksQuery);

  console.log("👉", data);

  if (loading) return <p>Loading....</p>;

  if (error) return <p>Ops! Something went wrong</p>;
  return (
    <div>
      <ul id="book-list">
        {data.books.map(({ name, id }) => (
          <li key={id}>{name}</li>
        ))}
      </ul>
    </div>
  );
}

export default BookList;
