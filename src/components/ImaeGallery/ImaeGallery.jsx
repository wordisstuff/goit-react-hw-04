import ImageCard from "../ImaageCard/ImageCard";
import LoadMoreBtn from "../loadMoreBtn/LoadMoreBtn";

const ImaeGallery = ({ photos }) => {
  return (
    <ul>
      <ImageCard photos={photos} />
      {photos && <LoadMoreBtn />}
    </ul>
  );
};

export default ImaeGallery;
