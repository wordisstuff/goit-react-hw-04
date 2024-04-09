// import { useEffect, useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import ImaeGallery from "./components/ImaeGallery/ImaeGallery";
import usePhotosSearch from "./hooks/usePhotosSearch";

function App() {
  const { photos, isLoading, isError, onSetSearchQuery } = usePhotosSearch();
  // const [count, setCount] = useState(0);

  // useEffect(() => {
  //   console.log(isLoading);
  //   console.log(isError);
  //   console.log(photos);
  // }, []);

  console.log(isLoading);
  console.log(isError);
  console.log(photos);

  return (
    <>
      <SearchBar onSetSearchQuery={onSetSearchQuery}></SearchBar>
      <ImaeGallery></ImaeGallery>
    </>
  );
}

export default App;
