const SearchBar = ({ requestProducts, count, setCount }) => {
  const handleInput = (e) => {
    e.preventDefault();
    setCount(requestProducts());
    console.log(count);
  };

  return (
    <header>
      <form onChange={handleInput}>
        <input type="text" placeholder="Search..." />
        <button type="submit">🍭</button>
      </form>
    </header>
  );
};

export default SearchBar;
