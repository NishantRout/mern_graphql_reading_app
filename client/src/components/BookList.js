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

  console.log("🚀", data);

  if (loading) return <p>Loading....</p>;

  if (error) return <p>Ops! Something went wrong</p>;
  return (
    <div>
      <ul id="book-list">
        <li>Book List</li>
        {data.books.map(({ name }) => {
          <li>{name}</li>;
        })}
      </ul>
    </div>
  );
}

export default BookList;
