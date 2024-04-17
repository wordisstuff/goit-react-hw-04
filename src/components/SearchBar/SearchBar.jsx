import { useState } from "react";

// import CSS from "./SearchBar.module.css"
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
    <header >
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
        {/* {btnOff && value !== "" && <div className={CSS.btn-container} >
        <button type="submit" className={CSS.slide-btn}>🔍</button>
        </div>} */}
      </form>
    </header>
  );
};

export default SearchBar;
