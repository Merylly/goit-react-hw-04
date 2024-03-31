import { useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import Loader from "./components/Loader/Loader";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageGallery from "./components/ImageGallery/ImageGallery";

function App() {
  const [query, setQuery] = useState("");

  return (
    <div>
      <SearchBar query={query} />
      <Loader />
      <ImageGallery/>
      <LoadMoreBtn />
      
    </div>
  );
}

export default App;
