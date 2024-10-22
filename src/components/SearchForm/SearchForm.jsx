import { useState } from "react";
import PropTypes from "prop-types";

const SearchForm = ({ onSubmit }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    onSubmit(query);
    setQuery("");
  };

  return (
    <form onSubmit={handleFormSubmit}>
      {" "}
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search for movies..."
      />
      <button type="submit">Search</button>
    </form>
  );
};

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchForm;
