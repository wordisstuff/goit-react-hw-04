import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import usePhotosSearch from "./hooks/usePhotosSearch";
import Loader from "./components/Loader/Loader";
import ErroreMessage from "./components/ErroreMessage/ErroreMessage";
import { useState } from "react";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ImageModal from "./components/ImageModal/ImageModal";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";

function App() {
  const {
    setIsloading,
    setPage,
    page,
    totalPages,
    photos,
    isLoading,
    isError,
    onSetSearchQuery,
  } = usePhotosSearch();
  const [modalImg, setModalImg] = useState(null);
  const [openCloseModal, setOpenCloseModal] = useState(false);

  const loadMorePage = () => {
    setIsloading(true);
    page < totalPages ? setPage((prev) => prev + 1) : page;
  };

  const openModal = (img) => {
    setModalImg(img);
    setOpenCloseModal(true);
  };
  const closeModal = () => setOpenCloseModal(false);

  return (
    <>
      <SearchBar onSetSearchQuery={onSetSearchQuery}></SearchBar>
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
