import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { MagnifyingGlass } from "react-loader-spinner";

const SearchBar = ({ onSetSearchQuery }) => {
  const [value, setValue] = useState("");

  const handleChenge = ({ target }) => {
    let queryWords = target.value.trim()
    setValue(queryWords);
  };

  const handleSubmit = (e) => {

    e.preventDefault();
    if (value !== "") {
      onSetSearchQuery(value);
    }else {
      toast("Попрацюй пальчиками🤪");
    }
    
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
        <button type="submit">
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
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
