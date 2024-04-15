import ImageCard from "../ImaageCard/ImageCard.jsx";
import CSS from "./ImageGallery.module.css";

const ImageGallery = ({ photos, openModal }) => {
  return (
    <>
      <ul className={CSS.list}>
        <ImageCard photos={photos} openModal={openModal} />
      </ul>
    </>
  );
};

export default ImageGallery;
