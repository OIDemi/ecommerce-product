import React, { useState } from "react";
import { data } from "../utils/data";
import ImgThumbnail from "./ImgThumbnail";
import Cart from "../images/icon-cart.svg";
import { ReactComponent as Minus } from "../images/icon-minus.svg";
import { ReactComponent as Plus } from "../images/icon-plus.svg";
import { ReactComponent as Previous } from "../images/icon-previous.svg";
import { ReactComponent as Next } from "../images/icon-next.svg";

import GalleryModal from "./GalleryModal";

const Main = () => {
  const [imgIndex, setIndex] = useState(0);
  const [add, setAdd] = useState(1);
  const [openGallery, setOpenGallery] = useState(false);

  function handleImgClick(newIndex) {
    if (imgIndex !== newIndex) setIndex(newIndex);
  }
  function addQuantity() {
    setAdd((count) => count + 1);
  }

  function reduceQuantity() {
    if (add > 1) setAdd((count) => count - 1);
  }

  function handleImgScrollNext() {
    if (imgIndex < data.length - 1) {
      setIndex((count) => count + 1);
    } else setIndex(0);
  }

  function handleImgScrollPrevious() {
    if (imgIndex > 0) {
      setIndex((count) => count - 1);
    } else setIndex(data.length - 1);
  }
  const imgGallery = data[imgIndex];

  return (
    <main>
      <section className='img-section'>
        <div className='img-mobile'>
          <div className='previous' onClick={handleImgScrollPrevious}>
            <Previous />
          </div>
          <img
            src={imgGallery.fullImg}
            alt='Shoe'
            onClick={() => setOpenGallery(true)}
          />
          <div className='next' onClick={handleImgScrollNext}>
            <Next />
          </div>
        </div>
        <div className='thumbnail-container'>
          {data.map((image, index) => (
            <ImgThumbnail
              image={image}
              key={image.id}
              index={index}
              onImgHandle={handleImgClick}
              imgIndex={imgIndex}
            />
          ))}
        </div>
      </section>
      <section className='details-section'>
        <p>SNEAKER COMPANY</p>
        <h2>Fall Limited Edition Sneakers</h2>
        <p>
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they'll withstand everything
          the weather can offer.
        </p>
        <div className='price-container'>
          <p>
            $125.00 <span>50%</span>
          </p>
          <p>$250.00</p>
        </div>
        <div className='btn-container'>
          <span>
            <Minus className='minus' onClick={reduceQuantity} />
            {add}
            <Plus className='plus' onClick={addQuantity} />
          </span>
          <button>
            <img src={Cart} alt='Cart' />
            Add to Cart
          </button>
        </div>
      </section>
      {openGallery && (
        <GalleryModal
          imgGallery={imgGallery}
          onImgHandle={handleImgClick}
          imgIndex={imgIndex}
          data={data}
          setOpenGallery={setOpenGallery}
          onHandleImgScrollPrevious={handleImgScrollPrevious}
          onHandleImgScrollNext={handleImgScrollNext}
        />
      )}
    </main>
  );
};

export default Main;
