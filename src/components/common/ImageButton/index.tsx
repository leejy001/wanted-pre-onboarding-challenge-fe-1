import React from "react";
import { ImageButtonType } from "types/button";
import { ImgBtnContainer } from "./style";

function ImageButton({ ...rest }: ImageButtonType) {
  return (
    <ImgBtnContainer {...rest}>
      <img src={rest.imgSrc} alt="Button Image" />
    </ImgBtnContainer>
  );
}

ImageButton.defaultProps = {
  type: "button"
};

export default ImageButton;
