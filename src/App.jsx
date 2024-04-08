import { useEffect, useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import ImaeGallery from "./components/ImaeGallery/ImaeGallery";
import { requestProducts } from "./services/api";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {}, [count]);

  console.log(setCount);
  return (
    <>
      <SearchBar
        setCount={setCount}
        count={count}
        requestProducts={requestProducts}
      ></SearchBar>
      <ImaeGallery></ImaeGallery>
    </>
  );
}

export default App;
