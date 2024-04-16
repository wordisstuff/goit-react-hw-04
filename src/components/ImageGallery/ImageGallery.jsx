import ImageCard from "../ImaageCard/ImageCard.jsx";
import CSS from "./ImageGallery.module.css";

const ImageGallery = ({ photos, openModal }) => {
  return (
    <>
      <ul className={CSS.list}>
      {photos &&
        photos.map(({id,urls,alt_description,user,likes}) => {
          return (
            <ImageCard  
            key={id} 
            urls={urls}
             alt_description={alt_description} 
             user={user} 
             likes={likes} 
             openModal={openModal} />
          );
        })}
        
      </ul>
    </>
  );
};

export default ImageGallery;
