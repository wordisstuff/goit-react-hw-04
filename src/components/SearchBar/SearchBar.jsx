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
        {btnOff && <button type="submit">
          <MagnifyingGlass
            visible={true}
            height="30"
            width="30"
            ariaLabel="magnifying-glass-loading"
            wrapperStyle={{}}
            wrapperClass="magnifying-glass-wrapper"
            glassColor="#c0efff"
            color="#e15b64"
          />
        </button>}
      </form>
    </header>
  );
};

export default SearchBar;
