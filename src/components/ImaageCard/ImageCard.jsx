import CSS from "./ImageCard.module.css";

const ImageCard = ({urls,alt_description,user,likes, openModal }) => {
 
          return (
            <li className={CSS.list}>
              <div className={CSS.img}>
                <img
                  onClick={() => openModal({imgUrl:urls.regular,description: alt_description })}
                  src={urls.small}
                  width={300}
                  alt={alt_description}
                />
              </div>
              <div className={CSS.imageInfo}>
                <p>
                  Author: <span>{user.name}</span>
                </p>
                <p>
                  Likes: <span>{likes}</span>
                </p>
              </div>
            </li>
          );
};

export default ImageCard;
