import React from "react";
import { ImgBtnContainer } from "./style";

interface ButtonType {
  type: "button" | "submit";
  imgSrc: string;
  width: number;
  height: number;
  onClick?: (e: React.MouseEvent<Element, MouseEvent>) => void;
}

function ImageButton({ ...rest }: ButtonType) {
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
