import React from "react";
import { ButtonContainer } from "./style";

interface ButtonType {
  type: "button" | "submit";
  className: string;
  name: string;
  fontSize: number;
  width: number;
  height: number;
  onClick?: ({ ...params }) => void;
}

function DefaultButton({ className, ...rest }: ButtonType) {
  return (
    <ButtonContainer className={className} {...rest}>
      {rest.name}
    </ButtonContainer>
  );
}

DefaultButton.defaultProps = {
  type: "button",
  fontSize: 18
};

export default DefaultButton;
