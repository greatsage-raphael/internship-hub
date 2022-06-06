import React, { useState } from "react";

// eslint-disable-next-line react/prop-types
const SearchForm = ({ handleSearchTextChange }) => {
  const [searchText, setSearchText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearchTextChange(searchText);
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)} className="search-form">
      <input
        type="text"
        placeholder="Search by role"
        value={searchText}
        name="search"
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button type="submit">
        <span className="icons8-search"></span>
      </button>
    </form>
  );
};

export default SearchForm;
