import React, { useState } from "react";
import { data } from "../utils/data";
import ImgThumbnail from "./ImgThumbnail";
import Cart from "../images/icon-cart.svg";
import { ReactComponent as Minus } from "../images/icon-minus.svg";
import { ReactComponent as Plus } from "../images/icon-plus.svg";

const Main = () => {
  const [imgIndex, setIndex] = useState(0);

  function handleImgClick(newIndex) {
    if (imgIndex !== newIndex) setIndex(newIndex);
  }
  const imgGallery = data[imgIndex];
  console.log(imgGallery);

  return (
    <main>
      <section className='img-section'>
        <div className='img-mobile'>
          <img src={imgGallery.fullImg} alt='Shoe' />
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
          <button>
            <Minus className='minus' />
            0
            <Plus className='plus' />
          </button>
          <button>
            <img src={Cart} alt='Cart' />
            Add to Cart
          </button>
        </div>
      </section>
    </main>
  );
};

export default Main;
