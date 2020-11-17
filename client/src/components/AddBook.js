import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { getAuthorsQuery } from "../queries/queries";

function AddBook() {
  const [newBook, setNewBook] = useState({
    name: "",
    genre: "",
    authorId: "",
  });
  const submitForm = (e) => {
    e.preventDefault();
    console.log("📙", newBook);
  };
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
    <form id="add-book" onSubmit={(e) => submitForm(e)}>
      <div className="field">
        <label>Book name:</label>
        <input
          type="text"
          onChange={(e) => setNewBook({ ...newBook, name: e.target.value })}
          value={newBook.name}
        />
      </div>
      <div className="field">
        <label>Genre:</label>
        <input
          type="text"
          onChange={(e) => setNewBook({ ...newBook, genre: e.target.value })}
          value={newBook.genre}
        />
      </div>
      <div className="field">
        <label>Author:</label>
        <select
          onChange={(e) => setNewBook({ ...newBook, authorId: e.target.value })}
        >
          <option>Select author</option>
          {displayAuthors()}
        </select>
      </div>
      <button>+</button>
    </form>
  );
}

export default AddBook;
