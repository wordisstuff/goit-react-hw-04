// import { useEffect, useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import ImaeGallery from "./components/ImaeGallery/ImaeGallery";
import usePhotosSearch from "./hooks/usePhotosSearch";
import Loader from "./components/Loader/Loader";
import ErroreMessage from "./components/Loader/ErroreMessage";

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
  // console.log(photos.results);

  return (
    <>
      <SearchBar onSetSearchQuery={onSetSearchQuery}></SearchBar>
      {isError ? (
        <ErroreMessage />
      ) : (
        <ImaeGallery photos={photos}></ImaeGallery>
      )}
      {isLoading ?? <Loader />}
    </>
  );
}

export default App;
