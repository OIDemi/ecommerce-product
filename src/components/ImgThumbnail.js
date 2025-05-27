import React, { Fragment } from "react";

export default function ImgThumbnail({ thumbnailImg }) {
  return (
    <>
      <img src={thumbnailImg} alt='img-thumbnail' />
    </>
  );
}
