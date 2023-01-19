import React from "react";
import { ButtonType } from "types/button";
import { ButtonContainer } from "./style";

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
