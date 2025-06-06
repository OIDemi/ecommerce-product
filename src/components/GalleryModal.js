import { ReactComponent as CloseModal } from "../images/icon-close.svg";
import ImgThumbnail from "./ImgThumbnail";
import { ReactComponent as Previous } from "../images/icon-previous.svg";
import { ReactComponent as Next } from "../images/icon-next.svg";
const GalleryModal = ({
  imgGallery,
  data,
  onImgHandle,
  imgIndex,
  setOpenGallery,
  onHandleImgScrollPrevious,
  onHandleImgScrollNext,
}) => {
  return (
    <section className='lightbox-gallery-overlay'>
      <div className='lightbox-gallery'>
        <CloseModal
          onClick={() => setOpenGallery(false)}
          className='close-gallery-btn'
        />
        <div className='main-img-container'>
          <div
            className='gallery-modal-previous-btn'
            onClick={onHandleImgScrollPrevious}
          >
            <Previous />
          </div>
          <img src={imgGallery.fullImg} alt='Shoe' className='main-img' />
          <div
            className='gallery-modal-next-btn'
            onClick={onHandleImgScrollNext}
          >
            <Next />
          </div>
        </div>
        <div className='thumbnail-modal-img'>
          {data.map((image, index) => (
            <ImgThumbnail
              image={image}
              key={image.id}
              index={index}
              onImgHandle={onImgHandle}
              imgIndex={imgIndex}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GalleryModal;
