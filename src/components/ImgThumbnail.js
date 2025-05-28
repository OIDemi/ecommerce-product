import React, { Fragment } from "react";

export default function ImgThumbnail({ image, index, onImgHandle, imgIndex }) {
  const { thumbnailImg } = image;
  return (
    <>
      <img
        className={`${imgIndex === index ? "thumbnail-img-border" : ""}`}
        src={thumbnailImg}
        alt='img-thumbnail'
        onClick={() => onImgHandle(index)}
      />
    </>
  );
}
