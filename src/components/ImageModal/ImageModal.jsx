const ImageModal = ({ images }) => {
  return (
    <div>
      <img src={images.urls.regular} alt={images.alt_description} />
    </div>
  );
};

export default ImageModal;
