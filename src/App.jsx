import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import Loader from "./components/Loader/Loader";
import ErroreMessage from "./components/ErroreMessage/ErroreMessage";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ImageModal from "./components/ImageModal/ImageModal";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";

import { requestPhotosByQuery } from "./services/api";

// import usePhotosSearch from "./hooks/usePhotosSearch";

import { useEffect, useState } from "react";

import toast from "react-hot-toast";

function App() {
  const [photos, setPhotos] = useState(null);
  const [isLoading, setIsloading] = useState(false);
  const [isError, setIserror] = useState(false);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [modalImg, setModalImg] = useState(null);
  const [openCloseModal, setOpenCloseModal] = useState(false);

  useEffect(() => {
    if (query.length === 0) return;
    async function fetchPhotosByQuery() {
      try {
        setIsloading(true);
        const data = await requestPhotosByQuery(query, page);
        !photos
          ? setPhotos(data.results)
          : setPhotos((prev) => [...prev, ...data.results]);

        setTotalPages(data.total_pages);
      } catch (error) {
        setIserror(true);
      } finally {
        setIsloading(false);
      }
    }
    fetchPhotosByQuery();
  }, [query, page]);

  const loadMorePage = () => {
    setIsloading(true);
    page < totalPages ? setPage((prev) => prev + 1) : page;
  };

  const setSearchBarQuery = (query) => {
    if (query !== "") {
      setQuery(query);
      setPhotos([]);
      setPage(1);
    } else {
      toast("Попрацюй пальчиками🤪");
    }
  };

  const openModal = (img) => {
    setModalImg(img);
    setOpenCloseModal(true);
  };
  const closeModal = () => setOpenCloseModal(false);

  return (
    <>
      <SearchBar
        setSearchBarQuery={setSearchBarQuery}
        isError={isError}
      ></SearchBar>
      {isLoading && <Loader />}
      {isError ? (
        <ErroreMessage />
      ) : (
        <ImageGallery photos={photos} openModal={openModal} />
      )}
      {photos && page < totalPages && <LoadMoreBtn pageChange={loadMorePage} />}
      <ImageModal
        modalImg={modalImg}
        isOpen={openCloseModal}
        onCloseModal={closeModal}
      />
    </>
  );
}

export default App;
