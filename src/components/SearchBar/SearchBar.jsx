import { useState } from "react";

const SearchBar = ({ onSetSearchQuery }) => {
  const [value, setValue] = useState("");

  const handleChenge = ({ target }) => {
    setValue(target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(value);
    onSetSearchQuery(value);
  };

  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input
          name="query"
          onChange={handleChenge}
          value={value}
          type="text"
          placeholder="Search..."
        />
        <button type="submit">🍭</button>
      </form>
    </header>
  );
};

export default SearchBar;
