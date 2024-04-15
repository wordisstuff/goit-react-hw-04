import CSS from "./ImageCard.module.css";

const ImageCard = ({ photos, openModal }) => {
  return (
    <>
      {photos &&
        photos.map((photo) => {
          return (
            <li key={photo.id} className={CSS.list}>
              <div className={CSS.img}>
                <img
                  onClick={() => openModal({ ...photo })}
                  src={photo.urls.small}
                  width={300}
                  alt={photo.alt_description}
                />
              </div>
              <div className={CSS.imageInfo}>
                <p>
                  Author: <span>{photo.user.name}</span>
                </p>
                <p>
                  Likes: <span>{photo.likes}</span>
                </p>
              </div>
            </li>
          );
        })}
    </>
  );
};

export default ImageCard;
