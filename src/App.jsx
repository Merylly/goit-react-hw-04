import { useEffect, useState } from "react";
import { fetchGalleryImages } from "./servises/api";
import toast, { Toaster } from "react-hot-toast";
import Modal from "react-modal";

import SearchBar from "./components/SearchBar/SearchBar";
import Loader from "./components/Loader/Loader";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";

import css from "./App.module.css";

Modal.setAppElement("#root");

function App() {
  const [images, setImages] = useState(null);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [swnLoader, setSwnLoader] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const onSearchPhotos = async () => {
      if (!query) return;

      try {
        setSwnLoader(true);

        const data = await fetchGalleryImages(query, page);
        console.log(data);

        if (page === 1) {
          setImages(data.results);
          setTotalPages(data.total_pages);
        } else {
          setImages((prevImages) => [...prevImages, ...data.results]);
        }
      } catch {
        setIsError(true);
        toast("Oops, something is wrong!");
      } finally {
        setSwnLoader(false);
      }
    };

    onSearchPhotos();
  }, [query, page]);

  const onHandleSearch = (formData) => {
    setPage(1);
    setImages([]);
    setQuery(formData);
  };

  const handleClick = () => {
    setPage(page + 1);
  };

  return (
    <div className={css.container}>
      <SearchBar onSubmit={onHandleSearch} />
      {swnLoader && <Loader />}
      {isError && <ErrorMessage />}
      {images && <ImageGallery images={images} />}
      {totalPages > page && <LoadMoreBtn onClick={handleClick} />}
      <Toaster />
    </div>
  );
}

export default App;
