import { useEffect, useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import ImaeGallery from "./components/ImaeGallery/ImaeGallery";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {});

  console.log(setCount);
  return (
    <>
      <SearchBar count={count}></SearchBar>
      <ImaeGallery></ImaeGallery>
    </>
  );
}

export default App;
