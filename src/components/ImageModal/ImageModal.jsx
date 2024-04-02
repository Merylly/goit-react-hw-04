import css from "./ImageModal.module.css";

const ImageModal = ({ images }) => {
  return (
    <div className={css.modalWrapper}>
      <img
        className={css.modalImage}
        src={images.urls.regular}
        alt={images.alt_description}
      />
    </div>
  );
};

export default ImageModal;
