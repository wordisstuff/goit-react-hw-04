import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { MagnifyingGlass } from "react-loader-spinner";

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
    <header>
      <form onSubmit={handleSubmit}>
        <input
          name="query"
          onChange={handleChenge}
          value={value}
          type="text"
          placeholder="Search..."
        />
        <Toaster />
        {btnOff && <button type="submit">🔍</button>}
      </form>
    </header>
  );
};

export default SearchBar;
