import ImageCard from "../ImageCard/ImageCard";
import css from './ImageGallery.module.css'

const ImageGallery = ({ images }) => {
  return (
    <ul className={css.galleryList}>
      {Array.isArray(images) &&
        images.map((image) => {
          return (
            <li className={css.galleryItem} key={image.id}>
              <ImageCard image={image} />
            </li>
          );
        })}
    </ul>
  );
};

export default ImageGallery;
