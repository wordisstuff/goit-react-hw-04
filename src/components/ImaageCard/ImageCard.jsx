const ImageCard = ({ photos }) => {
  return (
    <>
      {photos &&
        photos.map((photo) => {
          return (
            <li key={photo.id}>
              {photo.description}
              <div>
                <img src={photo.urls.small} width={600} alt="" />
              </div>
            </li>
          );
        })}
    </>
  );
};

export default ImageCard;
