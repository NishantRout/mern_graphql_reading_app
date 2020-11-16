import React from "react";
import { useQuery, gql } from "@apollo/client";

const getAuthorsQuery = gql`
  {
    authors {
      name
      id
    }
  }
`;

function AddBook() {
  const { loading, error, data } = useQuery(getAuthorsQuery);
  const displayAuthors = () => {
    if (loading) {
      return <option disabled>Loading Auth....</option>;
    } else if (error) {
      return <option disabled>Ops! Something went wrong</option>;
    } else {
      return data.authors.map(({ name, id }) => (
        <option key={id} value={id}>
          {name}
        </option>
      ));
    }
  };

  //   console.log("🧔", data);

  return (
    <form id="add-book">
      <div className="field">
        <label>Book name:</label>
        <input type="text" />
      </div>
      <div className="field">
        <label>Genre:</label>
        <input type="text" />
      </div>
      <div className="field">
        <label>Author:</label>
        <select>
          <option>Select author</option>
          {displayAuthors()}
        </select>
      </div>
      <button>+</button>
    </form>
  );
}

export default AddBook;
