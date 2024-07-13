import React, { useState } from "react";
import "../styles/Details.css";

function Search({ onSearch }) {
  const [query, setQuery] = useState("");

  function handleChange(event) {
    setQuery(event.target.value);
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      onSearch(query);
    }
  }
  function handleClick(event) {
    event.preventDefault();
    onSearch(query);
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Search for a Place"
        value={query}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleClick}>Search</button>
    </div>
  );
}

export default Search;
