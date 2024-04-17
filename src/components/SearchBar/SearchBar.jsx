import { useState } from "react";

import CSS from "./SearchBar/SearchBar.module.css"
import { Toaster } from "react-hot-toast";

const SearchBar = ({ setSearchBarQuery }) => {
  const [value, setValue] = useState("");
  const [btnOff, setBtnOff] = useState(true)

  const handleChenge = ({ target }) => {
    setBtnOff(true)
    setValue(target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
setBtnOff(false)
    setSearchBarQuery(value.trim())
  };

  return (
    <header className={CSS.btn-container}>
      <form onSubmit={handleSubmit}>
        <input
          name="query"
          onChange={handleChenge}
          value={value}
          type="text"
          placeholder="Search..."
        />
        <Toaster />
        {btnOff && value !== "" && <button type="submit" className={CSS.slide-btn}>🔍</button>}
      </form>
    </header>
  );
};

export default SearchBar;
