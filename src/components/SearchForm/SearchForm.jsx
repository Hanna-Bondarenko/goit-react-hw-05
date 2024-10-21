import { useState } from "react";
import PropTypes from "prop-types"; // Імпортуємо бібліотеку prop-types

const SearchForm = ({ onSubmit }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value); // Оновлюємо стан з введеного значення
  };

  const handleFormSubmit = (e) => {
    e.preventDefault(); // Запобігаємо перезавантаженню сторінки
    if (!query.trim()) return; // Перевірка на порожнє поле
    onSubmit(query); // Викликаємо функцію onSubmit з пропсів
    setQuery(""); // Очищаємо поле пошуку після відправки
  };

  return (
    <form onSubmit={handleFormSubmit}>
      {" "}
      {/* Викликаємо handleFormSubmit при сабміті */}
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

// Визначаємо типи пропсів за допомогою prop-types
SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired, // onSubmit обов'язковий і має бути функцією
};

export default SearchForm;
