const LoadMoreBtn = () => {
  const handleClick = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <button onClick={handleClick} type="submit">
        ...
      </button>
    </>
  );
};

export default LoadMoreBtn;
